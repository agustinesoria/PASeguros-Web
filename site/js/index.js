$(document).ready(function(o){function e(){var o="Productores Asociados - Seguros Generales",e={lat:-32.41398,lng:-63.247759},n=new google.maps.Map(document.getElementById("googleMap"),{scrollwheel:!1,center:e,zoom:18}),l=new google.maps.InfoWindow({content:"<strong>Ubicación:</strong><br>Buenos Aires 660<br> Villa María<br>"}),t=new google.maps.Marker({map:n,position:e,title:o});google.maps.event.addListener(t,"click",function(){l.open(n,t)}),l.open(n,t)}var n=o(this).height()/2;o(this).scrollTop()>n?o("#scroll").fadeIn():o("#scroll").fadeOut(),o(window).scroll(function(){var e=o(this).height()/2;o(this).scrollTop()>e?o("#scroll").fadeIn():o("#scroll").fadeOut()}),o("#scroll").click(function(){return o("html, body").animate({scrollTop:0},600),!1});var l=o(".logo"),t=o(".navbar-right");o(window).scroll(function(){console.log(o(document).scrollTop()),o(document).scrollTop()>50?(l.find("img").css("height","50"),t.css("padding-top","30px")):(l.find("img").css("height","150"),t.css("padding-top","70px"))});new Swiper(".swiper-container",{speed:800,paginationClickable:!0,spaceBetween:30,centeredSlides:!0,effect:"fade",loop:!0,autoplay:4500,autoplayDisableOnInteraction:!0});google.maps.event.addDomListener(window,"load",e)});