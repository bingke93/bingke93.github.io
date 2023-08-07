// Modernizr 2.6.2 (Custom Build) | MIT & BSD
var Modernizr = (function (window, document) {
    var version = "2.6.2",
        options = {},
        docElement = document.documentElement,
        mod = "modernizr",
        modElem = document.createElement(mod),
        mStyle = modElem.style,
        omPrefixes = "Webkit Moz O ms",
        cssomPrefixes = omPrefixes.split(" "),
        domPrefixes = omPrefixes.toLowerCase().split(" "),
        tests = {},
        classes = [],
        slice = classes.slice,
        lastClass,
        featureName;

    function isFn(fn) {
        return typeof fn === "function";
    }

    function isStr(s) {
        return typeof s === "string";
    }

    function noop() {}

    function injectCss(rule, callback, nodes, testnames) {
        var style, ret, node;
        ...
    }

    function testProps(props, prefixed) {
        ...
    }

    function testAllProps(prop, prefixed, elem) {
        ...
    }

    function testPropsAll(prop, prefixed, elem) {
        ...
    }

    var _Modernizr = {},
        ModernizrProto = {
            // The rest of the properties and methods go here...
        };

    return _Modernizr;
})(this, this.document);

function addTest(feature, test) {
    ...
}

function testRunner() {
    ...
}

var classes = docElement.className.split(" ");
docElement.className += (classes[0] ? " " : "") + (f ? "" : "no-") + tests.join(" ");

Modernizr._version = version;
Modernizr._prefixes = cssomPrefixes;
Modernizr._domPrefixes = domPrefixes;
Modernizr._cssomPrefixes = cssomPrefixes;
Modernizr.testProp = function (prop) {
    return testProps([prop]);
};
Modernizr.testAllProps = testAllProps;
Modernizr.testStyles = injectCss;
Modernizr.prefixed = function (prop, obj, elem) {
    return obj ? testAllProps(prop, obj, elem) : testAllProps(prop, "pfx");
};

document.documentElement.className = document.documentElement.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + classes.join(" ") : "");
