//var Swiper = require("./swiper-3.3.1.min.js");
//var anim = require("./swiper.animate1.0.2.min.js");
//;(function() {
//	debugger;
	var swiper = new Swiper('.swiper-container', {
		direction: "vertical",
		pagination: '.swiper-pagination',
		oninit: function(swiper) {
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper);
		}
	});

	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false);

//})()