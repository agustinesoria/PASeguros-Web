$(document).ready(function(o){var c=o(this).height()/2;o(this).scrollTop()>c?o("#scroll").fadeIn():o("#scroll").fadeOut(),o(window).scroll(function(){var c=o(this).height()/2;o(this).scrollTop()>c?o("#scroll").fadeIn():o("#scroll").fadeOut()}),o("#scroll").click(function(){return o("html, body").animate({scrollTop:0},600),!1});var i=o(".logo"),l=o(".navbar-right");o(window).scroll(function(){console.log(o(document).scrollTop()),o(document).scrollTop()>50?(i.find("img").css("height","50"),l.css("padding-top","30px")):(i.find("img").css("height","150"),l.css("padding-top","70px"))}),o(window).scroll(function(){var c=o(window).scrollTop(),i=.4*c;o("body").css({"background-position":"0 -"+i+"px"})}),o(".map-container").click(function(){o(this).find("iframe").addClass("clicked")}).mouseleave(function(){o(this).find("iframe").removeClass("clicked")})});