$(document).ready(function ($) {
  //=include ../../base/ts/base.ts
  //=include ../../modules/navbar/navbar.ts
  $(window).scroll(function(){
  	var barra = $(window).scrollTop();
  	var posicion =  (barra * 0.4);
	$('body').css({
  		'background-position': '0 -' + posicion + 'px'
  	});
	});
	$('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});
})
