$(document).ready(function ($) {
  //=include ../../base/ts/base.ts
  //=include ../../modules/navbar/navbar.ts
  var swiper = new Swiper('.swiper-container', {
        speed: 800,
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        effect: 'fade',
        loop: true,
        autoplay: 4500,
        autoplayDisableOnInteraction: true
    });
});

//   function initMap() {
//     var city = 'Productores Asociados - Seguros Generales';
//     var myLatLng = { lat: -32.413980, lng: -63.247759 };
//     var map = new google.maps.Map(document.getElementById('googleMap'), {
//       scrollwheel: false,
//       center: myLatLng,
//       zoom: 18
//     });
//     var infowindow = new google.maps.InfoWindow({
//       content: '<strong>Ubicación:</strong><br>Buenos Aires 660<br> Villa María<br>'
//     });
//     var marker = new google.maps.Marker({
//       map: map,
//       position: myLatLng,
//       title: city
//     });
//     google.maps.event.addListener(marker, 'click', function () {
//       infowindow.open(map, marker);
//     });
//     infowindow.open(map, marker);
//   }
//   google.maps.event.addDomListener(window, 'load', initMap);
