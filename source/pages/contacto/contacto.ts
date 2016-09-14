$(document).ready(function ($) {
  //=include ../../base/ts/base.ts    
  //=include ../../modules/navbar/navbar.ts
  
  $("#consulta").submit(function (e) {
    e.preventDefault();
    var required = $(this).find("input:required , textarea:required");
    var ready = true;
    required.each(function (index, elem) {
      var valid = this.validity.valid;
      if (valid == false) {
        ready = false;
      }
    })
    if (ready) {
      swal({
        title: "¿Confirmar envio?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4AA64A",
        confirmButtonText: "Enviar",
        cancelButtonText: "Cancelar",
        closeOnConfirm: false,
        closeOnCancel: false
      }, function (isConfirm) {
        if (isConfirm) {
          $.post("/api/consulta", { nombre: $("#nombre").val() , email: $("#email").val() , consulta: $("#consulta").val()}, function (res) {
            if (!res) return;
            res = JSON.parse(res);
            if (res.status == 200)
              swal("Enviado", "Tu consulta a sido enviada", "success");
            if (res.status == 500)            
              swal("A ocurrido un error!", "Tu consulta no ha sido enviada. Intente realizarla mas tarde", "error");
          })
        } else {
          swal("Cancelado", "No se ha enviado la consulta", "error");
        }
      });
    }
  })
})
