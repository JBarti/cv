parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"m6Ky":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.textHoby=exports.textTest=void 0;var e="Hi, my name is Josip.<br>\nI'm a highscool junior developer, <br>\neager in learning new skills and getting more experience.<br>\nI started off as a robotician <br>\nlearning to appreciate good quality code.<br>\nThat eventually lead to me becoming a web developer";exports.textTest=e;var t="Although almost all of my projects are made in JavaScript <br>\n    I consider myself a python developer and a linux enthusiast <br>\n\n";exports.textHoby=t;
},{}],"kbG+":[function(require,module,exports) {
"use strict";var e=require("./text");screen.orientation.lock("landscape"),window.onload=function(){function n(e,n,t){var s=e.length,l=0;!function e(n,t,o){var c=document.getElementsByClassName(t)[0];l<s?(c.innerHTML=c.innerHTML.slice(0,-1),c.innerHTML+=n[l],c.innerHTML+="_",setTimeout(function(){e(n,t,o)},70),l++):(c.innerHTML=c.innerHTML.slice(0,-1),o&&o())}(e,n,t)}function t(e,n){e.onclick=function(){var t=document.getElementsByClassName("sidebar__file");Array.from(t).map(function(e){console.table(e),e.classList.remove("file__selected")}),document.getElementsByClassName("window__text")[0].innerHTML=n,e.classList.add("file__selected"),document.getElementsByClassName("file__selection")[0].innerHTML=e.innerHTML}}document.getElementsByClassName("tag__open")[0].innerHTML="",document.getElementsByClassName("tag__close")[0].innerHTML="",document.getElementsByClassName("intro__text")[0].innerHTML="",n("<coder>","tag__open",function(){n("Not Tech Support!","intro__text",function(){n("</coder>","tag__close")})}),function(){for(var e=document.getElementsByClassName("text__num")[0],n=0;n<=34;n++)e.innerHTML+="".concat(n,"\n")}(),t(document.getElementsByClassName("file__about")[0],e.textTest),t(document.getElementsByClassName("file__doing")[0],e.textHoby);var s,l=(s=null,function(e){s&&(s.style.display="none"),e.style.display="inline",s=e});l(document.getElementsByClassName("sidebar__files")[0]),document.getElementsByClassName("icon__files")[0].onclick=function(){l(document.getElementsByClassName("sidebar__files")[0])},document.getElementsByClassName("icon__search")[0].onclick=function(){l(document.getElementsByClassName("sidebar__search")[0])},document.getElementsByClassName("icon__source")[0].onclick=function(){l(document.getElementsByClassName("sidebar__source")[0])},document.getElementsByClassName("icon__debug")[0].onclick=function(){l(document.getElementsByClassName("sidebar__debug")[0])}};
},{"./text":"m6Ky"}]},{},["kbG+"], null)
//# sourceMappingURL=/introAnimation.526c8d05.js.map