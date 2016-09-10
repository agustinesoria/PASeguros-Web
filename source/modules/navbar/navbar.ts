$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('ul.nav.logo').addClass('achicar');
  } else {
    $('ul.nav.logo').removeClass('achicar');
  }
});