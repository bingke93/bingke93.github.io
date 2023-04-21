/*let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');



const scrollInProgress = () => {
  didScroll = true
}

const raf = () => {
  if(didScroll) {
    paralaxTitles.forEach((element, index) => {
      console.log(element)
      element.style.transform = "translateX("+ window.scrollY / 10 + "%)";
    })
    didScroll = false;
  }
  requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)
*/
$(document).ready(function(){
    $(document).on('scroll', function(){
/*300是元素在开始移动时需要左移到初始位置的总距离，0.35是左移速度，0是左移结束元素距离初始css的位移*/
      $('#text_everyone').css("right", Math.max(400 - 0.35*window.scrollY, 0) + "px");
      
      $('#text_artist').css("left", Math.max(400 - 0.35*window.scrollY, 0) + "px");

      $('#text_anything').css("left", Math.max(400 - 0.35*window.scrollY, 0) + "px");

      $('#text_plastic').css("right", Math.max(350 - 0.3*window.scrollY, 0) + "px");

      $('#text_bottle').css("left", Math.max(450 - 0.3*window.scrollY, 0) + "px");

      $('#text_everything').css("left", Math.max(500 - 0.3*window.scrollY, 0) + "px");

      $('#text_cup').css("right", Math.max(500 - 0.3*window.scrollY, 0) + "px");

      $('#text_chair').css("left", Math.max(550 - 0.3*window.scrollY, 0) + "px");

      $('#text_phone').css("right", Math.max(550 - 0.3*window.scrollY, 0) + "px");
    })
})
