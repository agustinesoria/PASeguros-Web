var logo = $('.logo')
var right= $('.navbar-right')
$(window).scroll(function() {
  console.log($(document).scrollTop());
  if ($(document).scrollTop() > 50) {
    logo.find('img').css('height','50');
    right.css('padding-top', '30px');
  } else {
    logo.find('img').css('height','150');
    right.css('padding-top', '70px');
  }
});
