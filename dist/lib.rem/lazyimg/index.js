/*! vue-ydui v0.8.7 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LazyImg=void 0;var i=n(83),r=o(i);t.LazyImg=r.default},1:function(e,t){e.exports=function(e,t,n,o){var i,r=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,r=e.default);var a="function"==typeof r?r.options:r;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var c=a.computed||(a.computed={});Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}})}return{esModule:i,exports:r,options:a}}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),o=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||o.test(e)},r=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},s=function(e,t){var n=e==window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,i=t.getBoundingClientRect().top-o,r=i+t.offsetHeight;return i>=0&&i<n||r>0&&r<=n},a=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},c=function(e,t){a(e,t)||(e.className=""==e.className?t:e.className+" "+t)},u=function(e,t){if(a(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(n,o,i){if(n!==o){var r=n+i>o?o:n+i;n>o&&(r=n-i<o?o:n-i),e===window?window.scrollTo(r,r):e.scrollTop=r,window.requestAnimationFrame(function(){return t(r,o,i)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var r=Math.abs(n-o),s=Math.ceil(r/i*50);t(n,o,s)};t.pageScroll=n,t.isIOS=o,t.isColor=i,t.getScrollview=r,t.checkInview=s,t.addClass=c,t.removeClass=u,t.scrollTop=d},83:function(e,t,n){var o=n(1)(n(230),n(122),null,null);e.exports=o.exports},122:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{attrs:{src:e.defaultSrc,datasrc:e.src}})},staticRenderFns:[]}},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5);t.default={name:"yd-lazyimg",props:{src:{type:String},defaultSrc:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}},methods:{init:function(){this.scrollview=(0,o.getScrollview)(this.$el),this.scrollHandler(),this.bindEvent()},scrollHandler:function(){(0,o.checkInview)(this.scrollview,this.$el)&&(this.$el.setAttribute("src",this.$el.getAttribute("datasrc")),this.unbindEvent())},bindEvent:function(){this.scrollview.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler)},unbindEvent:function(){this.scrollview.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.scrollHandler)}},mounted:function(){var e=this;this.$nextTick(function(){e.init()})},destoryed:function(){this.unbindEvent()}}}})});