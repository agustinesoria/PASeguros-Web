//CONTENT start
  function pxToInt(string) {
    return Number(string.replace("px", ""));
  }

  $(".content").css("min-height", $(window).height() + "px");
  var $footer = $("footer").height() + 30;
  $(".content").css("padding-bottom", $footer + "px");
  $(window).resize(function () {
    $(".content").css("min-height", $(window).height() + "px");
    var foot = $("footer").height() + 30;
    $(".content").css("padding-bottom", foot + "px");
  });
  //close

//NAVBAR start
  //navbar en el que estoy actualmente
  var pathname = window.location.pathname;
  $('.nav > li > a[href="..' + pathname + '"]').parent().addClass('navbar-active');
//close

//PARALLAX start

  $('.parallax').each(function () {
    var parallax = $(this);
    $(window).on('scroll', function () {
      var scrolled = $(window).scrollTop();
      parallax.css({
        'transform': 'translateY(' + scrolled * +0.3 + 'px'
      });
    });
  });
//close

//SWEETALERT start
  $('#enviarConsulta').click(function () {
    swal({
      title: 'Seguro?',
      text: "Tu consulta se enviará con su contenido actual",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Sí, enviar'
    }).then(function (isConfirm) {
      if (isConfirm) {
        swal(
          'Enviado!',
          'Tu consulta ha sido enviada!',
          'success'
        );
      }
    });
  });
//close