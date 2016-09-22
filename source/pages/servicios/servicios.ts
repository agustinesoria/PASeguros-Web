$(document).ready(function() {
	//=include ../../base/ts/base.ts
  //=include ../../modules/navbar/navbar.ts
	$(window).scroll(function() {
  console.log($(document).scrollTop());
  if ($(document).scrollTop() > 50) {
    $('.container').css('padding-top','55');
  } else {
    $('.container').css('padding-top','0');
  }
});
$('.navegacion').find('a').click(function (e) {
	e.preventDefault();
	var direccion= $(e.target).attr('href');
	console.log(direccion);
  $("html, body").animate({ scrollTop: $(direccion).offset().top }, 600);
  return false;
});
  // $(function() {
	// $('div.navegacion a').bind('click',function(event){
	// 	var $anchor = $(this);

	// 	$('html, body').stop().animate({
	// 		scrollTop: $($anchor.attr('href')).offset().top
	// 	}, 1500,'easeInOutExpo');
		/*
		if you don't want to use the easing effects:
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		*/
		// event.preventDefault();
// 	});
// });
});