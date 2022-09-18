$(document).ready(function () {    
    $('.clockpicker').clockpicker();
});






/* -----------------------   AGREGAR HORA DE SALIDA DEL MOBILIARIO  -------------------------- */

  $(document).on("click", "#btn_registroUsuario", function(e) {
      e.preventDefault();

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

alert("fecgas: " + fecha + hora);

var fechaActual = fecha+" "+hora;
alert("hora: " + fechaActual);

    var datos = {
        //ID_CLIENTE : 5,
        nombres : $("#registro_nombre").val(),
        apellido_paterno : $("#registro_apellidoPat").val(),
        apellido_materno : $("#registro_apellidoMat").val(),
        genero : $('input:radio[name=sexo]:checked').val(),
        email : $("#registro_email").val(),
        edad : $("#registro_edad").val(),
        password : $("#registro_pass").val(),
    //  VERIFI_CONTRASENIA : $("#registro_passRepeat").val(),
    //  fecha_registros : fechaActual,
      }

      if (datos.nombres == "") {
          alert("Debe capturar el nombre x moment...!");
      } else {
          $.ajax({
              type: "post",
              url: base_url + 'Registro_mrj/RegistroUsuarios/insert_registroUsuario',
              data: (datos),
              dataType: "json",
              success: function(data) {
                  if (data.responce == "success") {
                      toastr["success"](data.message);
                      // $("#addHoraSalida")[0].reset();
                      // $('#modal_Add_HoraSalida').modal('hide');
                      //   $("#tbl_RutasEntregaMobil").DataTable().destroy();
                    	// 	llenarTablaRutasParaMobiliario();
                  } else {
                      toastr["error"](data.message);
                  }
              },
          });
      }
  });



// ********************   variable PARA CAMBIAR DE IDIOMA AL ESPAÑOL EL DataTable  *************************
var language_espaniol = {
    "lengthMenu": "Mostrar _MENU_ registros por pagina",
    "zeroRecords": "No se encontraron resultados en su busqueda",
    "searchPlaceholder": "Buscar Registros",
    "info": "Total: _TOTAL_ registros",
    "infoEmpty": "No Existen Registros",
    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
    "search": "Buscar:",
    "paginate": {
        "first": "Primero",
        "last": "Último",
        "next": "Siguiente",
        "previous": "Anterior"
    }, /* TODO ESTO ES PARA CAMBIAR DE IDIOMA */
}
