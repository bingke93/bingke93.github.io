#!/bin/bash
# push_media.sh
# 用法：
#   1) 提交单个或多个媒体文件（自动 LFS + 提交 + 推送到当前分支）
#      ./push_media.sh path/to/a.mp4 path/to/b.wav "提交说明"
#   2) 仅提交（不推送）
#      ./push_media.sh --no-push path/to/a.mp4 "只提交不推送"
#
# 说明：
# - 自动针对常见大文件后缀启用 Git LFS：视频/音频/无损音频等
# - 自动检测当前分支，并推送到对应远程分支（若未设置 upstream 会自动设置）
# - 若传了多个路径，统一在一次 commit 中提交
# - 你需要已安装 Git LFS（首次用：git lfs install）
#
# 支持的扩展（可自行增删）：
#  视频：mp4 mov mkv webm m4v
#  音频：mp3 wav flac aac aiff ogg m4a

set -e

# -------- 配置：可按需增删 ----------
EXTS=(mp4 mov mkv webm m4v mp3 wav flac aac aiff ogg m4a)
# ------------------------------------

# 参数处理
NO_PUSH=0
ARGS=()

for arg in "$@"; do
  if [[ "$arg" == "--no-push" ]]; then
    NO_PUSH=1
  else
    ARGS+=("$arg")
  fi
done

if [[ ${#ARGS[@]} -lt 1 ]]; then
  echo "❌ 用法：$0 [--no-push] <文件1> [文件2 ...] [\"提交说明\"]"
  exit 1
fi

# 最后一个参数若以引号包裹，视作提交说明；否则用默认
COMMIT_MSG=""
LAST="${ARGS[-1]}"
if [[ "$LAST" == *" "* || "$LAST" == *"."* || "$LAST" == *"："* || "$LAST" == *"："* ]]; then
  # 简单策略：若最后一个参数里包含空格或中文/标点，很可能是 commit message
  COMMIT_MSG="$LAST"
  unset 'ARGS[${#ARGS[@]}-1]'
fi
if [[ -z "$COMMIT_MSG" ]]; then
  COMMIT_MSG="chore(media): add large media via Git LFS"
fi

# 确保在 git 仓库
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "❌ 当前目录不是 Git 仓库根目录（或在其子目录）。请先 cd 到仓库目录。"
  exit 1
fi

# 检查 Git LFS
if ! command -v git-lfs >/dev/null 2>&1 && ! command -v git lfs >/dev/null 2>&1; then
  echo "❌ 本机未安装 Git LFS。请先安装（如：brew install git-lfs 或下载官方 pkg）。"
  exit 1
fi

# 初始化 LFS（幂等）
git lfs install >/dev/null 2>&1 || true

# 为扩展名配置 LFS 跟踪（幂等；重复 track 不会报错）
for ext in "${EXTS[@]}"; do
  git lfs track "*.${ext}" >/dev/null 2>&1 || true
done

# 若 .gitattributes 有变化，纳入暂存
if ! git diff --quiet -- .gitattributes 2>/dev/null || ! git diff --cached --quiet -- .gitattributes 2>/dev/null; then
  git add .gitattributes
fi

# 校验文件并纳入暂存
STAGED_ANY=0
for f in "${ARGS[@]}"; do
  if [[ ! -e "$f" ]]; then
    echo "⚠️  跳过：文件不存在 -> $f"
    continue
  fi
  git add -- "$f"
  STAGED_ANY=1
done

if [[ $STAGED_ANY -eq 0 ]]; then
  echo "❌ 没有可提交的文件（路径不存在或未变化）。"
  exit 1
fi

# 提交
git commit -m "$COMMIT_MSG"

# 推送（可选）
if [[ $NO_PUSH -eq 1 ]]; then
  echo "✅ 已提交，但按你的要求未推送。"
  exit 0
fi

# 当前分支
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# 检查是否已有 upstream
set +e
git rev-parse --abbrev-ref --symbolic-full-name "@{u}" >/dev/null 2>&1
HAS_UPSTREAM=$?
set -e

if [[ $HAS_UPSTREAM -ne 0 ]]; then
  # 没有 upstream，第一次推并建立跟踪
  echo "ℹ️  未检测到 upstream，正在首次推送并建立跟踪：origin $BRANCH"
  git push -u origin "$BRANCH"
else
  git push origin "$BRANCH"
fi

echo "✅ 媒体文件已通过 Git LFS 提交并推送到分支：$BRANCH"
