!function e(t,n,o){function i(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var r=n[a]={exports:{}};t[a][0].call(r.exports,function(e){var n=t[a][1][e];return i(n||e)},r,r.exports,e,t,n,o)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){"use strict";$(function(){if($(".about__slider-list").length){for(var e=["./img/slider1.jpeg","./img/slider2.jpeg","./img/slider3.jpeg","./img/slider4.jpeg"],t=$(".about__slider-list"),n=0;n<e.length;n++)t.append('<li class="about__slider-item"><img class="about__slider-img" src="'+e[n]+'"></li>');$(".about__slider-list").slick({slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]})}})},{}],2:[function(e,t,n){"use strict";$(function(){$(".back_to_top").on("click",function(){$("body, html").animate({scrollTop:0},500)}),$(window).on("scroll",function(){var e=$(".preview").height(),t=$(".back_to_top");$(window).scrollTop()>=e?t.addClass("back_to_top--active"):t.removeClass("back_to_top--active")})})},{}],3:[function(e,t,n){"use strict";new function(e){var t=this;this.btn=document.getElementById(e.btnId),this.nav=document.getElementById(e.navigationId),this.overlay=document.createElement("div"),this.openNav_=function(){document.body.appendChild(t.overlay),setTimeout(function(){return t.nav.classList.add(e.activeNavClass)},200)},this.hideNav_=function(n){(document.querySelector("."+e.overlayClass)&&27===n.keyCode||"click"===n.type||"dragend"===n.type)&&(t.nav.classList.remove(e.activeNavClass),t.nav.hasAttribute("style")&&t.nav.removeAttribute("style"),setTimeout(function(){return document.body.removeChild(t.overlay)},200))},this.dragStart_=function(e){var n=270-e.screenX;n<270&&(t.nav.style.transform="translateX("+-n+"px)")},this.events_=function(){t.btn.addEventListener("click",t.openNav_),t.overlay.addEventListener("click",t.hideNav_),window.addEventListener("keyup",t.hideNav_),t.nav.addEventListener("drag",t.dragStart_),t.nav.addEventListener("dragend",t.hideNav_)},this.init_=function(){t.events_(),t.overlay.classList.add(e.overlayClass)},this.init_()}({btnId:"js-menu-btn",navigationId:"js-nav",activeNavClass:"nav--active",overlayClass:"overlay"})},{}],4:[function(e,t,n){"use strict";new function(){var e=this;this.tabsBtn=document.querySelector(".tab-btns"),this.tabContent=document.querySelectorAll(".tab-content"),this.childBtn=document.querySelectorAll(".tab-btn"),this.line=document.querySelector(".line"),this.width=this.childBtn[0].clientWidth,this.changeContent_=function(t){if("A"===t.target.parentNode.tagName&&t.target.parentNode.hasAttribute("href")){var n=t.target.parentNode.getAttribute("href").slice(1);e.childBtn.forEach(function(e){e.classList.contains("active-tab")&&e.classList.remove("active-tab")}),t.target.parentNode.classList.add("active-tab"),e.tabContent.forEach(function(e){e.classList.contains("active-content")&&e.classList.remove("active-content")}),document.getElementById(n).classList.add("active-content"),e.containerRect=e.tabsBtn.getBoundingClientRect(),e.curTabRect=document.querySelector(".active-tab").getBoundingClientRect(),e.line.style.left=e.curTabRect.left-e.containerRect.left+"px",e.width=t.target.parentNode.clientWidth,e.line.style.width=e.width+"px"}},this.events_=function(){e.tabsBtn.addEventListener("click",e.changeContent_),e.childBtn.addEventListener("click",function(e){e.preventDefault()})},this.init_=function(){e.events_(),e.line.style.width=e.width+"px"},this.init_()}},{}],5:[function(e,t,n){"use strict";new function(){var e=this;this.show_=function(){e.overlay=document.querySelector(".md-overlay"),[].slice.call(document.querySelectorAll(".md-trigger")).forEach(function(t,n){e.modal=document.querySelector("#"+t.getAttribute("data-modal")),e.close=e.modal.querySelector(".md-close"),e.removeModal=function(t){classie.remove(e.modal,"md-show"),t&&classie.remove(document.documentElement,"md-perspective")},e.removeModalHandler=function(){e.removeModal(classie.has(t,"md-setperspective"))},t.addEventListener("click",function(n){classie.add(e.modal,"md-show"),e.overlay.removeEventListener("click",e.removeModalHandler),e.overlay.addEventListener("click",e.removeModalHandler),classie.has(t,"md-setperspective")&&setTimeout(function(){classie.add(document.documentElement,"md-perspective")},25)}),e.close.addEventListener("click",function(t){t.stopPropagation(),e.removeModalHandler()})})},this.init_=function(){e.show_()},this.init_()}},{}],6:[function(e,t,n){"use strict";!function(e){function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,t){(o(e,t)?s:i)(e,t)}var o,i,s;"classList"in document.documentElement?(o=function(e,t){return e.classList.contains(t)},i=function(e,t){e.classList.add(t)},s=function(e,t){e.classList.remove(t)}):(o=function(e,n){return t(n).test(e.className)},i=function(e,t){o(e,t)||(e.className=e.className+" "+t)},s=function(e,n){e.className=e.className.replace(t(n)," ")});var a={hasClass:o,addClass:i,removeClass:s,toggleClass:n,has:o,add:i,remove:s,toggle:n};"function"==typeof define&&define.amd?define(a):e.classie=a}(window)},{}],7:[function(e,t,n){"use strict";var o=document.querySelector(".portsolio__show-link"),i=document.querySelector(".portfolio__list"),s=0;o.addEventListener("click",function(){var e=new XMLHttpRequest;e.open("GET","ajax.json"),e.responseType="json",e.addEventListener("load",function(){if(4===e.readyState){var t=e.response;if(s<t.length){var n=document.createElement("li");n.classList.add("portfolio__item");var a=document.createElement("div");a.classList.add("portfolio__img-wrap");var c=document.createElement("img");c.classList.add("portfolio__item-img");var l=document.createElement("h3");l.classList.add("portfolio__item-title");var r=document.createElement("p");r.classList.add("portfolio__descr"),c.setAttribute("src",t[s].img),l.textContent=t[s].title,r.textContent=t[s].descr,a.appendChild(c),n.appendChild(a),n.appendChild(l),n.appendChild(r),i.appendChild(n),++s===t.length&&(o.style.display="none")}}}),e.send()})},{}],8:[function(e,t,n){"use strict";$(function(){$(".social__list").length&&$(window).width()>320&&$(".social__list").slick({centerMode:!0,centerPadding:"25%",slidesToShow:1,speed:1e3,arrows:!1,responsive:[{breakpoint:700,settings:{slideWidth:100,moveSlides:1,centerMode:!1,dots:!0}}]})})},{}],9:[function(e,t,n){"use strict";e("../components/header/nav.js"),e("../components/about/about.js"),e("../components/portfolio/ajaxload.js"),e("../components/mobile/mobile.js"),e("../components/social/social.js"),e("../components/backToTop/scroll.js"),e("../components/modal/modal_cl.js"),e("../components/modal/modal.js")},{"../components/about/about.js":1,"../components/backToTop/scroll.js":2,"../components/header/nav.js":3,"../components/mobile/mobile.js":4,"../components/modal/modal.js":5,"../components/modal/modal_cl.js":6,"../components/portfolio/ajaxload.js":7,"../components/social/social.js":8}]},{},[9]);