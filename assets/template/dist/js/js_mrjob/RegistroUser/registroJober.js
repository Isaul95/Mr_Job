/***********************************/

$(document).ready(function () {

});




/* -----------------------   AGREGAR HORA DE SALIDA DEL MOBILIARIO  -------------------------- */

  $(document).on("click", "#btn_registroUsuario_Jober", function(e) {
      e.preventDefault();
      alert("Registro Jobber 2021");

// La raiz del proyecto, para que cuando se suba al server ya lo tome x default y redireccion de forma correcta
var base_urlMrJob = $("#base_urlReg").val();

// Extrae fecha de registro
          var f = new Date();
          var yyyy = f.getFullYear();
          var mm = f.getMonth()+1;
          var dd = f.getDate();

          if(mm<10){
            mm='0'+mm //agrega cero si el menor de 10
          }

          if(dd<10){
            dd='0'+dd; //agrega cero si el menor de 10
          }

      //  fecha = yyyy + "/" + mm + "/" + dd;
          fecha = dd + "/" + mm + "/" + yyyy;
          var ho = f.getHours();
          var min = f.getMinutes();
          var seg = f.getSeconds();

          if(min<10){
            min='0'+min //agrega cero si el menor de 10
          }

          if(seg<10){
            seg='0'+seg; //agrega cero si el menor de 10
          }
          hora = ho + ":" + min + ":" + seg;

var fechaActual = fecha+" "+hora;  // Extrae fecha y hora junto

    var datos = {
        // ID_REG_ENCUESTA : 9, el id de la tabla se extrae x medio de un Trigger en oracle
        NOMBRE_COMPLETO : $("#registro_nombre").val(),
        EMAIL : $("#registro_email").val(),
        UBICACION : $("#registro_ubicacion").val(),
        TELEFONO : $("#registro_telefono").val(),
        SERVICIO : $("#radio").val(),
        OTRO : $("#radio").val(),
        FECHA_REGISTRO : fechaActual,
      }

      if (datos.nombres == "") {
          alert("Debe capturar el nombre x moment...!");
      } else {
          $.ajax({
              type: "post",
              url: base_url + 'Servicios/Lista_Servicios_Jober/insert_registroUsuario_jober',
              data: (datos),
              dataType: "json",
              success: function(data) {
                  if (data.responce == "success") {
                      toastr["success"](data.message);
                      location.href = base_urlMrJob+"Agradecimientos/Gracias"; // redirect pagina de agradecimientos
                  } else {
                      toastr["error"](data.message);
                  }
              },
          });
      }
  });
