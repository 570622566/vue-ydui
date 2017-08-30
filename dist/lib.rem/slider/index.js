/*! vue-ydui v0.8.9 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SliderItem=e.Slider=void 0;var r=i(13),s=n(r),a=i(12),o=n(a);e.Slider=s.default,e.SliderItem=o.default},function(t,e){t.exports=function(t,e,i,n){var r,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),i&&(o._scopeId=i),n){var l=o.computed||(o.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:r,exports:s,options:o}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=d[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(s(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(s(i.parts[r]));d[i.id]={id:i.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function s(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(p)return m;n.parentNode.removeChild(n)}if(v){var s=f++;n=h||(h=r()),e=a.bind(null,n,s,!1),i=a.bind(null,n,s,!0)}else n=r(),e=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function a(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function o(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document,c=i(4),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),h=null,f=0,p=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){p=i;var r=c(t,e);return n(r),function(e){for(var i=[],s=0;s<r.length;s++){var a=r[s],o=d[a.id];o.refs--,i.push(o)}e?(r=c(t,e),n(r)):r=[];for(var s=0;s<i.length;s++){var o=i[s];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete d[o.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},r=0;r<e.length;r++){var s=e[r],a=s[0],o=s[1],l=s[2],c=s[3],d={id:t+":"+r,css:o,media:l,sourceMap:c};n[a]?n[a].parts.push(d):i.push(n[a]={id:a,parts:[d]})}return i}},,,,,,function(t,e,i){e=t.exports=i(2)(),e.push([t.id,".m-slider{overflow:hidden;-ms-touch-action:none;touch-action:none}.m-slider,.slider-wrapper{width:100%;position:relative}.slider-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.slider-wrapper.slider-wrapper-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.slider-item{width:100%;height:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.slider-item a{display:block}.slider-item img{width:100%}@-webkit-keyframes slider-pagination-opacity{0%{opacity:0}to{opacity:1}}@keyframes slider-pagination-opacity{0%{opacity:0}to{opacity:1}}.slider-pagination{position:absolute;width:100%;z-index:2;left:0;bottom:.1rem;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;opacity:0;-webkit-animation:slider-pagination-opacity .3s linear .4s forwards;animation:slider-pagination-opacity .3s linear .4s forwards}.slider-pagination,.slider-pagination.slider-pagination-vertical{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.slider-pagination.slider-pagination-vertical{width:0;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;bottom:0;left:auto;right:.1rem}.slider-pagination>.slider-pagination-item{margin:.05rem;width:6px;height:6px;display:inline-block;border-radius:100%;background-color:#b7d0e1}.slider-pagination>.slider-pagination-item.slider-pagination-item-active{background-color:#ff0005}",""])},,function(t,e,i){var n=i(1)(i(20),i(14),null,null);t.exports=n.exports},function(t,e,i){i(18);var n=i(1)(i(21),i(16),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider-item"},[t._t("default")],2)},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"m-slider"},[i("div",{ref:"warpper",staticClass:"slider-wrapper",class:"vertical"==t.direction?"slider-wrapper-vertical":"",style:t.dragStyleObject},[i("div",{staticClass:"slider-item",style:t.itemHeight,domProps:{innerHTML:t._s(t.lastItem)}}),t._v(" "),t._t("default"),t._v(" "),i("div",{staticClass:"slider-item",style:t.itemHeight,domProps:{innerHTML:t._s(t.firtstItem)}})],2),t._v(" "),t.itemsArr.length>1&&t.showPagination?i("div",{staticClass:"slider-pagination",class:"vertical"==t.direction?"slider-pagination-vertical":""},t._l(t.itemNums,function(e,n){return i("span",{staticClass:"slider-pagination-item",class:t.paginationIndex==n?"slider-pagination-item-active":""})})):t._e()])},staticRenderFns:[]}},,function(t,e,i){var n=i(10);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(3)("787def37",n,!0)},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-slider-item",mounted:function(){this.$nextTick(this.$parent.init)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-slider",data:function(){return{firtstItem:"",lastItem:"",currentIndex:~~this.index,itemNums:0,itemsArr:[],autoPlayTimer:null,paginationIndex:0,itemHeight:{height:null},dragStyleObject:{transform:0,speed:0},touches:{moveTag:0,moveOffset:0,touchStartTime:0,isTouchEvent:!1,allowClick:!1,isDraging:!1}}},props:{index:{default:1,validator:function(t){return/^\d*$/.test(t)}},speed:{default:300,validator:function(t){return/^\d*$/.test(t)}},autoplay:{default:0,validator:function(t){return/^\d*$/.test(t)}},direction:{validator:function(t){return["horizontal","vertical"].indexOf(t)>-1},default:"horizontal"},showPagination:{type:Boolean,default:!0},callback:{type:Function}},watch:{index:function(t){t=~~t,t>this.itemNums&&(t=this.itemNums),this.currentIndex=t,this.showItem(t)},currentIndex:function(t){var e=this.itemNums,i=(t-1)%e;this.paginationIndex=i<0?e-1:i}},methods:{init:function(){this.destroy(),this.isVertical="vertical"===this.direction,this.itemsArr=this.$children.filter(function(t){return"yd-slider-item"===t.$options.name}),this.itemNums=this.itemsArr.length,this.cloneItem(),this.showItem(this.currentIndex),this.bindEvents(),this.autoPlay()},showItem:function(t){if(this.isVertical){this.$refs.slider.style.height="100%";var e=this.$el.clientHeight;this.itemHeight.height=e+"px",this.setTranslate(0,-e*t),this.itemsArr.forEach(function(t){t.$el.style.height=e+"px"})}else this.setTranslate(0,-this.$refs.warpper.offsetWidth*t)},cloneItem:function(){if(!(this.itemsArr.length<=1)){var t=this.itemsArr;this.firtstItem=t[0].$el.innerHTML,this.lastItem=t[t.length-1].$el.innerHTML}},touchStartHandler:function(t){var e=this.touches;if(e.allowClick=!0,e.isTouchEvent="touchstart"===t.type,(e.isTouchEvent||!("which"in t)||3!==t.which)&&0===e.moveTag){e.moveTag=1,e.startX=t.touches?t.touches[0].clientX:t.clientX,e.startY=t.touches?t.touches[0].clientY:t.clientY,e.touchStartTime=Date.now();var i=this.itemNums;if(0===this.currentIndex)return this.currentIndex=i,void this.setTranslate(0,-i*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth));this.currentIndex>i&&(this.currentIndex=1,this.setTranslate(0,this.isVertical?-this.$el.clientHeight:-this.$refs.warpper.offsetWidth))}},touchMoveHandler:function(t){this.supportTouch&&!this.isVertical||t.preventDefault();var e=this.touches;if(e.allowClick=!1,!e.isTouchEvent||"mousemove"!==t.type){var i=t.touches?t.touches[0].clientY:t.clientY,n=t.touches?t.touches[0].clientX:t.clientX,r=180*Math.atan2(Math.abs(i-e.startY),Math.abs(n-e.startX))/Math.PI;if((this.isVertical?90-r>45:r>45)&&this.supportTouch)return e.moveTag=3,this.stopAutoplay(),void this.setTranslate(0,-this.currentIndex*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth));e.isDraging=!0;var s=e.moveOffset=this.isVertical?i-e.startY:n-e.startX;0!==s&&0!==e.moveTag&&(1===e.moveTag&&(this.stopAutoplay(),e.moveTag=2),2===e.moveTag&&this.setTranslate(0,-this.currentIndex*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth)+s))}},touchEndHandler:function(){var t=this.touches,e=t.moveOffset,i=this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth;if(1===t.moveTag&&(t.moveTag=0),setTimeout(function(){t.allowClick=!0,t.isDraging=!1},this.speed),2===t.moveTag){t.moveTag=0;var n=Date.now()-t.touchStartTime;if(n>300&&Math.abs(e)<=.5*i||this.itemsArr.length<=1)this.setTranslate(this.speed,-this.currentIndex*i);else{this.setTranslate(this.speed,-((e>0?--this.currentIndex:++this.currentIndex)*i));var r=this.currentIndex%this.itemNums;this.callback&&this.callback(0===r?this.itemNums:r)}return void this.autoPlay()}3===t.moveTag&&(t.moveTag=0,this.autoPlay())},autoPlay:function(){var t=this;this.autoplay<=0||this.itemsArr.length<=1||(this.autoPlayTimer=setInterval(function(){var e=t.isVertical?t.$el.clientHeight:t.$refs.warpper.offsetWidth;return t.currentIndex>t.itemNums?(t.currentIndex=1,t.setTranslate(0,-e),void setTimeout(function(){t.setTranslate(t.speed,-(++t.currentIndex*e))},100)):void t.setTranslate(t.speed,-(++t.currentIndex*e))},this.autoplay))},stopAutoplay:function(){clearInterval(this.autoPlayTimer)},stopDrag:function(t){this.touches.isDraging&&t.preventDefault()},bindEvents:function(){var t=this;this.$el.addEventListener("touchstart",this.touchStartHandler),this.$el.addEventListener("touchmove",this.touchMoveHandler),this.$el.addEventListener("touchend",this.touchEndHandler),this.$el.addEventListener("click",function(e){t.touches.allowClick||e.preventDefault()}),window.addEventListener("resize",this.resizeSlides),document.body.addEventListener("touchmove",this.stopDrag)},unbindEvents:function(){this.$el.removeEventListener("touchstart",this.touchStartHandler),this.$el.removeEventListener("touchmove",this.touchMoveHandler),this.$el.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("resize",this.resizeSlides),document.body.removeEventListener("touchmove",this.stopDrag)},setTranslate:function(t,e){this.dragStyleObject.transitionDuration=t+"ms",this.isVertical?this.dragStyleObject.transform="translate3d(0, "+e+"px, 0)":this.dragStyleObject.transform="translate3d("+e+"px, 0, 0)"},resizeSlides:function(){if(this.isVertical){var t=this.$el.clientHeight;this.dragStyleObject.transform="translate3d(0, "+-this.currentIndex*t+"px, 0)"}else{var e=this.$refs.warpper.offsetWidth;this.dragStyleObject.transform="translate3d("+-this.currentIndex*e+"px, 0, 0)"}},destroy:function(){this.unbindEvents(),this.stopAutoplay()}},destroyed:function(){this.destroy()}}}])});