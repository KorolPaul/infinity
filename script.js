"use strict";for(var accordionItems=document.querySelectorAll(".accordion_item"),i=0;i<accordionItems.length;i++)accordionItems[i].addEventListener("click",changeAccordion);function changeAccordion(e){if(e.currentTarget.classList.contains("active"))for(var t=0;t<accordionItems.length;t++)accordionItems[t].classList.remove("active");else{for(var n=0;n<accordionItems.length;n++)accordionItems[n].classList.remove("active");e.currentTarget.classList.add("active")}}document.querySelector(".assistant").addEventListener("mousemove",function(e){var t=window.innerWidth/2,n=100*e.clientX/t-50,o=document.querySelector(".assistant_wheel"),i=document.querySelectorAll(".assistant_light");o.style.transform="rotate("+n+"deg)",i[0].style.transform="rotate("+n+"deg)",i[1].style.transform="rotate("+n+"deg)"}),document.querySelector(".assistant").addEventListener("touchmove",function(e){var t=window.innerWidth/2,n=100*e.touches[0].clientX/t-75,o=document.querySelector(".assistant_wheel"),i=document.querySelectorAll(".assistant_light");o.style.transform="rotate("+n/2+"deg)",i[0].style.transform="rotate("+n/2+"deg)",i[1].style.transform="rotate("+n/2+"deg)"});var loadingPercentElement=document.querySelector(".loading_percent-value"),IS_MOBILE=window.innerWidth<=1024,player=null;function closeIntro(){if(document.body.classList.add("faded"),setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.add("dark"),document.querySelector(".intro").innerHTML=""},IS_MOBILE?0:2e3),IS_MOBILE)setTimeout(function(){document.body.classList.add("scrolled"),setTimeout(function(){changeSlide(1),setCounters()},500)},5e3);else{var e=function e(t){document.body.classList.add("scrolled"),document.body.removeEventListener("click",e),setTimeout(function(){setCounters()},5500),setTimeout(function(){changeSlide(1),window.removeEventListener("wheel",e),window.addEventListener("wheel",function(e){0<e.deltaY?nextSlide():prevSlide()})},1500)};window.addEventListener("wheel",e),setTimeout(function(){document.body.addEventListener("click",e)},2100)}setTimeout(function(){setSpeedChange()},2e3)}function init(){var t=setInterval(function(){var e=parseInt(loadingPercentElement.innerHTML);if(e<100)loadingPercentElement.innerHTML=++e;else{document.body.classList.add("show-intro"),clearInterval(t);try{player.playVideo()}catch(e){console.log(e)}document.querySelector(".intro_close").addEventListener("click",closeIntro),document.addEventListener("keyup",function(e){27==e.keyCode&&closeIntro()})}},20)}function setCounters(){for(var e=document.querySelectorAll("[data-number]"),t={useEasing:!0,useGrouping:!0,separator:"",decimal:"."},n=0;n<e.length;n++){var o=new CountUp(e[n],0,e[n].dataset.number,0,3,t);o.error?console.error(o.error):o.start()}}if(IS_MOBILE)closeIntro();else{var onYouTubeIframeAPIReady=function(){player=new YT.Player("player",{height:"360",width:"640",videoId:"9BCdoCeS-Co",playerVars:{fullscreen:1,controls:0,showinfo:0},events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})},onPlayerReady=function(e){init();var t=setInterval(function(){player.getDuration()-player.getCurrentTime()<=2&&(closeIntro(),clearInterval(t))},1e3)},onPlayerStateChange=function(e){e.data!=YT.PlayerState.ENDED||done||(player.stopVideo(),closeIntro(),done=!0)},tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var done=!1}function initSliders(){console.log("sliders init"),new Glide(".content_left .content_step__2  .slider",{type:"slider",perView:1}).mount(),new Glide(".content_right .content_step__2  .slider",{type:"slider",perView:1}).mount(),new Glide(".content_step__4  .slider",{type:"slider",perView:1}).mount()}window.addEventListener("load",function(){initSliders();for(var e=document.getElementsByClassName("glide_slides"),t=0;t<e.length;t++)e[t].style.backfaceVisibility="visible";document.querySelector(".menu-toggle").addEventListener("click",function(e){e.preventDefault(),e.currentTarget.classList.toggle("opened"),document.querySelector(".menu").classList.toggle("opened")})});var prevSlideElement=document.querySelector(".js-prev-slide"),nextSlideElement=document.querySelector(".js-next-slide"),icons=document.querySelectorAll(".sections_icon"),menuLinks=document.querySelectorAll(".menu_link"),slide=0,isAnimated=!1;function prevSlide(){1<slide&&changeSlide(slide-1,slide)}function nextSlide(){slide<6?changeSlide(slide+1,slide):6===slide&&changeSlide(1,slide)}function changeSlide(e,t){console.log(e,t),isAnimated||e===t||(isAnimated=!0,slide=parseInt(e),document.body.dataset.slide=e,document.body.dataset.old=t,changeActiveIcon(e),setTimeout(function(){isAnimated=!1},IS_MOBILE?0:4e3),4===slide&&initSliders())}function changeActiveIcon(e){for(var t=0;t<icons.length;t++)icons[t].classList.remove("sections_icon__active");icons[e-1].classList.add("sections_icon__active")}prevSlideElement.addEventListener("click",function(e){e.preventDefault(),prevSlide()}),nextSlideElement.addEventListener("click",function(e){e.preventDefault(),nextSlide()}),IS_MOBILE&&setTimeout(function(){document.querySelector(".switcher_left").addEventListener("click",function(e){prevSlide()}),document.querySelector(".switcher_right").addEventListener("click",function(e){nextSlide()})},5e3);for(i=0;i<icons.length;i++)icons[i].addEventListener("click",function(e){e.preventDefault(),changeSlide(parseInt(e.target.dataset.index),slide)});for(var _i=0;_i<menuLinks.length;_i++)menuLinks[_i].addEventListener("click",function(e){e.preventDefault(),document.querySelector(".menu").classList.toggle("opened"),document.querySelector(".menu-toggle").classList.toggle("opened"),changeSlide(parseInt(e.target.dataset.index),slide)});function setSpeedChange(){if(IS_MOBILE)document.querySelector(".venom__mobile").addEventListener("click",function(e){document.body.classList.toggle("dark"),document.body.classList.toggle("light"),initSliders()});else{for(var e=0;e<document.querySelectorAll(".js-light").length;e++)document.querySelectorAll(".js-light")[e].addEventListener("mouseenter",function(){document.body.classList.remove("dark"),document.body.classList.add("light")});for(var t=0;t<document.querySelectorAll(".js-dark").length;t++)document.querySelectorAll(".js-dark")[t].addEventListener("mouseenter",function(){document.body.classList.add("dark"),document.body.classList.remove("light")})}}var tabsButtons=document.querySelectorAll(".tabs_button"),tabsContent=document.querySelectorAll(".tabs_content");for(i=0;i<tabsButtons.length;i++)tabsButtons[i].addEventListener("click",changeTab);function changeTab(e){for(var t=e.currentTarget.dataset.tab-1,n=0;n<tabsButtons.length;n++)tabsButtons[n].classList.remove("active");for(var o=0;o<tabsContent.length;o++)tabsContent[o].classList.remove("active");tabsButtons[t].classList.add("active"),tabsContent[t].classList.add("active")}