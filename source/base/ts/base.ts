//SCROLL BACK TO TOP
var viewPort = $(this).height() / 2;
if ($(this).scrollTop() > viewPort) {
  $('#scroll').fadeIn();
} else {
  $('#scroll').fadeOut();
}

$(window).scroll(function () {
  var viewPort = $(this).height() / 2;
  if ($(this).scrollTop() > viewPort) {
    $('#scroll').fadeIn();
  } else {
    $('#scroll').fadeOut();
  }
});
$('#scroll').click(function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});