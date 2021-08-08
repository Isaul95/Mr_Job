  $(document).ready(function () {

$("#addPago").prop('disabled', true);  // btn venta
$("#addCredito").prop('disabled', true);  // btn venta a credito

// SE EXTRAE LA FECHA DEL DIA ACTUAL
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
      fecha = yyyy + "/" + mm + "/" + dd;

//  SE EXTRAE LA HORA ACTUAL DEL DIA
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




  verDatosClienteAgregado();

  });


/* -------------------------------------------------------------------------- */
/*                           Agregar Cliente                             */
/* -------------------------------------------------------------------------- */
$(document).on("click", "#btnAddClienteXContrato", function (e) {
  // debugger;
    e.preventDefault();
    var nombre = $("#nombreCliente").val();
    var direccion = $("#direccionCliente").val();  // Se convierte el texto a un float
    var telefono = $("#telefonoCliente").val();
    var sexo = $("#sexoCliente").val();
    var email = $("#emailCliente").val();
    var ine = $("#ine")[0].files[0];
    var name_ine = $("#ine")[0].files[0];
    var user_session = $("#username_cliente").val();
    var id_evento = $("#id_eventoCliente").val();

    // var outString = name.replace(/[.,#´*+\-?^${}()|[\]\\]/g ,' ');   [^\\dA-Za-z]", " "
    // var outString = name.replaceAll("[^\\dA-Za-z]", "");

    if ($("#ine").val() == '') {
      // En caso de no agregar imagen
      ine = '';
    }else {
      // Validacion de la extencion del archivo
      var extencion = $('#ine').val().split('.').pop().toLowerCase();
    //  tipoImagen = extencion;
      if(jQuery.inArray(extencion, ['pdf']) == -1){
        //
        alert("Archivo no valido");
        $('#ine').val(''); // Limpia el input file
        return false;
      }
    }

    if (nombre == "" || direccion == "" || telefono == "" || sexo == "") {
        alert("¡Complete todos los campos!");
    } else {
        var fd = new FormData();
        fd.append("nombre", nombre);
        fd.append("direccion", direccion);
        fd.append("telefono", telefono);
        fd.append("sexo", sexo);
        fd.append("email", email);
        fd.append("ine", ine);
        fd.append("user_session", user_session);
        fd.append("id_evento", id_evento);
        fd.append("nombre_ine", name);

        //fd.append("tipoImagen", tipoImagen);
        $.ajax({
            type: "post",
            url: base_url + 'Clientes/Clientes/addCliente',
            data: fd,
            processData: false,
            contentType: false,
            dataType: "json",
            enctype: 'multipart/form-data',
            success: function (response) {
                if (response.res == "success") {
                    toastr["success"](response.message);
                    $('#addClienteForm')[0].reset();
                    verDatosClienteAgregado();
                } else {
                    toastr["error"](response.message);
                }
            },
        });
    }
});






/* ============  Una vez agregado los datos del cliente se recuperan esos datos para visualizarlos NO EDIT  ================ */
function verDatosClienteAgregado(){
    // var id_cliente = 1;
    var user_session = $("#username_cliente").val();
    var id_evento    = $("#id_eventoCliente").val();

    $.ajax({
        type: "post",
        url: base_url + 'Clientes/Clientes/verDatosCliente',
        data: {
            user_session: user_session,
            id_evento: id_evento,
        },
        dataType: "json",
        success: function (data) {

              if (data.responce == "success") {
                    $('#divAddPdf').hide();
                    $('#divMostrarPdf').show();
                  }else{
                    $('#divAddPdf').show();
                    $('#divMostrarPdf').hide();
                  }

          $('#id_clienteAdd').val(data.post.id_cliente)
              $('#nombreCliente').val(data.post.nombre)
              $('#direccionCliente').val(data.post.direccion)
              $('#telefonoCliente').val(data.post.telefono)
              $('#sexoCliente').val(data.post.sexo)
              $('#emailCliente').val(data.post.email)
              $('#id_evento_Agregado').val(data.post.id_evento)
              deshabilitar_form_cliente();

      // Si ya existen estos datos (cliente y evento) se inserta la venta en la tabla venta
                    var id_clienteAdd      = $("#id_clienteAdd").val();
                    var id_evento_Agregado = $("#id_evento_Agregado").val();
                         if (id_clienteAdd != 'null' && id_evento_Agregado != 'null') {
                                verificarSiYaExisteVentaActual();
                         }

        },
    });
}



// Consultar si ya existe una venta actual con el user, cliente y evento, sino crearlo
  function verificarSiYaExisteVentaActual(){
      // debugger;
        		var datos = {
                  usuario : $("#username_cliente").val(),
                  cliente : $("#id_clienteAdd").val(),
                  evento  : $("#id_evento_Agregado").val(),
        		    }

        		$.ajax({
              url: base_url+'Clientes/Clientes/verSiExisteVentaActual',
              type: "post",
              dataType: "json",
        			data : (datos),
        			success : function(data){
                if (data.responce == "success") {
                  // debugger;
                    toastr["success"](data.message);

                      $('#id_ventaDesdeVenta').val(data.post.id_venta)

// alert("SI ENTRA EN SUCCES EXISTE UNA VENTA:  id_venta: =>" + data.post.id_venta);
verificarSiYaExisteInDescripcionVenta();

llenartablaSalonEnVenta();
llenartablaMobiliarioEnVenta();
llenarTablaPlatillosEnVenta();

verSiYaExisteSalonEnVenta();
verSiYaExisteMobiliarioEnVenta();
verSiYaExistePlatillosEnVenta();

// Consultar si existe venta a credito o venta normal
// Si es venta a CREDITO => en la pestaña de cobro semuestra el div con la tabla d elospagos realizados
// Si es venta NORMAL se muestra el div de venta realizad ya venta pagada

verificarTipoDeVentaCreditoNormal();
// llenarTablaVentaCreditoActual();

                      }else{
                        // toastr["error"](data.message);
                        // alert("ENTRA EN ERROR NO EXISTE VENTA => lO CREA NUEVA VENTA");
                        createVenta();
                        // inserInDescripcionVenta(data.post.id_venta);
                      }
        			    }
        		});
        }





// Consultar si ya existe una venta actual en descripcion de venta, sino crearlo
  function verificarSiYaExisteInDescripcionVenta(){
      // debugger;
        		var datos = {
                  venta : $("#id_ventaDesdeVenta").val(),
                  // cliente : $("#id_clienteAdd").val(),
                  // evento  : $("#id_evento_Agregado").val(),
        		    }

        		$.ajax({
              url: base_url+'Clientes/Clientes/verSiExisteVentaActualInDescripcionVenta',
              type: "post",
              dataType: "json",
        			data : (datos),
        			success : function(data){
                if (data.responce == "success") {
                  // debugger;
                    toastr["success"](data.message);

                      // $('#id_ventaDesdeVenta').val(data.post.id_venta)

// alert(" SI EXISTE DESCRIPCION VENTA:=> -- XXX " );
                      }else{
                        // toastr["error"](data.message);
// alert(" NO EXISTE DESCRIPCION VENTA => lO CREA NUEVA VENTA -- XXX");
                        inserInDescripcionVenta();
                        // inserInDescripcionVenta(data.post.id_venta);
                      }
        			    }
        		});
        }





  /* -----------------------   Se crea la nueva venta  -------------------------- */
    function  inserInDescripcionVenta(){
// debugger;
      var datos = {
          // venta : id_venta,
          // venta : $('#id_ventaDesdeVenta').val(data.post.id_venta)
          venta : $("#id_ventaDesdeVenta").val(),
        }

        if (datos.venta == "" ) {
            alert("No existe una venta actual...!");
        } else {
            $.ajax({
                type: "post",
                url: base_url + 'Clientes/Clientes/createNewInsertInDescripcionVenta',
                data: (datos),
                dataType: "json",
                success: function(data) {
                    if (data.responce == "success") {
                        toastr["success"](data.message);

                    } else {
                        toastr["error"](data.message);
                    }
                },
            });
        }
    }




/* -----------------------   Se crea la nueva venta  -------------------------- */
  function  createVenta(){
// debugger;
    var datos = {
        usuario       : $("#username_cliente").val(),
        cliente       : $("#id_clienteAdd").val(),
        evento        : $("#id_evento_Agregado").val(),
        estado_venta  : "En_captura",
        // fecha_reporte : fecha,
        // hora          : hora,
      }

      if (datos.cliente == "" || datos.evento == "") {
          alert("No existe cliente ni evento...!");
      } else {
          $.ajax({
              type: "post",
              url: base_url + 'Clientes/Clientes/createNewVenta',
              data: (datos),
              dataType: "json",
              success: function(data) {
                  if (data.responce == "success") {
                      toastr["success"](data.message);
                //  Si se inserto bien el venta se recarga la pagina
                      location.reload();
                  } else {
                      toastr["error"](data.message);
                  }
              },
          });
      }
  }





  function verPdfIne() {

     var id_cliente = $("#id_clienteAdd").val();
    var url = base_url+"Clientes/Clientes/verPdfIneXCliente/" + id_cliente ;
          window.open(url, "_blank", id_cliente);
    }






/* Esto pasa cuando ya se agrego el cliente para ver los datos visual sin pider editar*/
function deshabilitar_form_cliente(){
    $('#nombreCliente').prop('disabled', true);
    $("#direccionCliente").prop('disabled', true);
    $("#telefonoCliente").prop('disabled', true);
    $("#sexoCliente").prop('disabled', true);
    $("#emailCliente").prop('disabled', true);
    $("#btnAddClienteXContrato").prop('disabled', true);
}



  function regresarACaledar() {
  debugger;
    //  Redireccionar a la siguiente pagina o liga cuando
        location.href ="http://localhost/antigua/Eventos/NuevoEvento";

    }











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



// 1.- https://www.youtube.com/watch?v=2CuzeOODfuI
//
// 2.- https://css-tricks.com/organic-tabs/
//
// 3.- http://www.formacionwebonline.com/crear-tabs-solapas-pestanas-jquery-html-forma-sencilla/
//
//




//  ===================== EL SALON QUE YA ESTE LELEGIDO ESTA EN PROCESO DE VENTA ================

function llenartablaSalonEnVenta() {

  var datos = {
      venta : $("#id_ventaDesdeVenta").val(),
    }

    $.ajax({
        type: "post",
        url: base_url + 'Eventos/Contratos/verSalonEnVenta',
        data: (datos),
        dataType: "json",
        success: function (response) {
            // var i = "1";
            $("#tbl_VentaSalon").DataTable({
                data: response,
                responsive: true,
                columns: [
                    {
                        data: "id",
                        "visible": false,
                        "searchable": false
                    },
                    {
                        data: "salon",
                        "visible": false,
                        "searchable": false
                    },
                    {
                        data: "nombre_salon",
                    },
                    // {
                    //     data: "cantidad_salon",
                    // },
                    {
                        data: "cantidad_salon",
                        "className": "text-center",
                    },
                    {
                        data: "cantidad_salon",
                        "className": "text-center",
                    },
                    {
                        orderable: false,
                        searchable: false,
                        "className": "text-center",
                        data: function (row, type, set) {
                            return `
<a title="Eliminar Salón de la venta" onclick=eliminarSalonDeLaVenta('${row.id}','${row.salon}','${row.venta}') class="btn btn-danger btn-remove" ><i class="fas fa-trash-alt"></i></a>
                                 `;
                        },
                    },

                    {
                        orderable: false,
                        searchable: false,
                        "className": "text-center",
                        render : function(data, type, row) {            //   generaReportePDFSalonDetails/${row.salon}/${row.venta}" target
                            var a = `
<a title="Generar Reporte PDF" href="Contratos/generaReportePDFSalonDetails/${row.venta}" target="_blank"><i class="far fa-file-pdf fa-2x"></i></a>
                            `;
                             return a;
                        },
                    },

                ],
                "language": language_espaniol,
            });
        },
    });
}

//  value="${row.id}"+"${row.id}"



function eliminarSalonDeLaVenta(id, salon, venta) {

    var datos = {
        salon : 0,
        cantidad_salon : 0,
        venta : venta,
        // id    : id,       // Id de la tabla de descripcion de venta
    }


    Swal.fire({
        title: "¿Estás seguro de Borrar?",
        text: "¡Esta acción es irreversile!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, bórralo!",
        cancelButtonText: "¡No, cancelar!",
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "post",
                url: base_url + 'Eventos/Contratos/eliminarSalonEnVenta',
                data: (datos),
                dataType: "json",
                success: function (data) {
                    if (data.responce == "success") {
                        Swal.fire(
                            '¡Eliminado!',
                            'El periodo fue eliminado',
                            'success'
                        );
                        $("#tbl_VentaSalon").DataTable().destroy();
                        llenartablaSalonEnVenta();
                        verSiYaExisteSalonEnVenta();
                        // VisualizarSalones();  // Esta function esta en contratos.js
                    }
                },
            });
        }
    });
}







//  ===================== EL MOBILIARIO QUE YA ESTE LELEGIDO ESTA EN PROCESO DE VENTA ================

function llenartablaMobiliarioEnVenta() {

  var datos = {
      venta : $("#id_ventaDesdeVenta").val(),
    }

    $.ajax({
        type: "post",
        url: base_url + 'Eventos/Contratos/verMobiliarioEnVenta',
        data: (datos),
        dataType: "json",
        success: function (response) {
            // var i = "1";
            $("#tbl_VentaMobiliario").DataTable({
                data: response,
                responsive: true,
                columns: [
                    {
                        data: "id",
                        "visible": false,
                        "searchable": false
                    },
                    {
                        data: "mobiliario",
                        "visible": false,
                        "searchable": false
                    },
                    {
                        data: "nombre",
                    },
                    {
                        data: "cantidad_piezas_mobiliario",
                        "className": "text-center",
                    },
                    {
                        data: "precio",
                        "className": "text-center",
                    },
                    {
                        data: "precio_total_mob",
                        "className": "text-center",
                    },
                    {
                        orderable: false,
                        searchable: false,
                        "className": "text-center",
                        data: function (row, type, set) {
                            return `
<a title="Eliminar el Mobiliario de la venta" onclick=eliminarMobiliarioDeLaVenta('${row.id}','${row.mobiliario}','${row.venta}') class="btn btn-danger btn-remove" ><i class="fas fa-trash-alt"></i></a>
                                 `;
                        },
                    },
                    {
                        orderable: false,
                        searchable: false,
                        "className": "text-center",
                        render : function(data, type, row) {            //   generaReportePDFSalonDetails/${row.salon}/${row.venta}" target
                            var a = `
<a title="Generar Reporte de mobiliario" href="Contratos/generaReportePDFMobiliarioDetails/${row.venta}" target="_blank"><i class="far fa-file-pdf fa-2x"></i></a>
                            `;
                             return a;
                        },
                    },
                ],
                "language": language_espaniol,
            });
        },
    });
}




function eliminarMobiliarioDeLaVenta(id, mobiliario, venta) {

  var datos = {
      mobiliario : 0,
      cantidad_piezas_mobiliario : "NULL",
      precio_total_mob : "NULL",
      venta : venta,
      // id    : id,       // Id de la tabla de descripcion de venta
  }


  Swal.fire({
      title: "¿Estás seguro de Borrar?",
      text: "¡Esta acción es irreversile!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, bórralo!",
      cancelButtonText: "¡No, cancelar!",
  }).then((result) => {
      if (result.isConfirmed) {
          $.ajax({
              type: "post",
              url: base_url + 'Eventos/Contratos/eliminarMobiliarioEnVenta',
              data: (datos),
              dataType: "json",
              success: function (data) {
                  if (data.responce == "success") {
                      Swal.fire(
                          '¡Eliminado!',
                          'El periodo fue eliminado',
                          'success'
                      );
                      $("#tbl_VentaMobiliario").DataTable().destroy();
                      llenartablaMobiliarioEnVenta();
                      verSiYaExisteMobiliarioEnVenta();
                      // VisualizarSalones();  // Esta function esta en contratos.js
                  }
              },
          });
      }
  });
}







//  ===================== EL PLATILLOS QUE YA ESTE LELEGIDO ESTA EN PROCESO DE VENTA ================

function llenarTablaPlatillosEnVenta() {

  var datos = {
      venta : $("#id_ventaDesdeVenta").val(),
    }

    $.ajax({
        type: "post",
        url: base_url + 'Eventos/Contratos/verPlatillosEnVenta',
        data: (datos),
        dataType: "json",
        success: function (response) {
            // var i = "1";
            $("#tbl_VentaPlatillos").DataTable({
                data: response,
                responsive: true,
                columns: [
                    {
                        data: "id",
                        "visible": false,
                        "searchable": false
                    },
                    {
                        data: "platillo",
                        "visible": false,
                        "searchable": false
                    },
                    {
                        data: "nombre_platillo",
                    },
                    {
                        data: "cantidad_personas_platillo",
                        "className": "text-center",
                    },
                    {
                        data: "costo",
                        "className": "text-center",
                    },
                    {
                        data: "precio_total_platillo",
                        "className": "text-center",
                    },
                    {
                        orderable: false,
                        searchable: false,
                        "className": "text-center",
                        data: function (row, type, set) {
                            return `
<a title="Eliminar Platillos de la venta" onclick=eliminarPlatillosDeLaVenta('${row.id}','${row.platillo}','${row.venta}') class="btn btn-danger btn-remove" ><i class="fas fa-trash-alt"></i></a>
                                 `;
                        },
                    },
                    {
                        orderable: false,
                        searchable: false,
                        "className": "text-center",
                        render : function(data, type, row) {            //   generaReportePDFSalonDetails/${row.salon}/${row.venta}" target
                            var a = `
<a title="Generar Reporte de platillos" href="Contratos/generaReportePDFPlatillosDetails/${row.venta}" target="_blank"><i class="far fa-file-pdf fa-2x"></i></a>
                            `;
                             return a;
                        },
                    },
                ],
                "language": language_espaniol,
            });
        },
    });
}




function eliminarPlatillosDeLaVenta(id, platillo, venta) {

  var datos = {
      platillo : 0,
      cantidad_personas_platillo : "NULL",
      precio_total_platillo : "NULL",
      venta : venta,
      // id    : id,       // Id de la tabla de descripcion de venta
  }


  Swal.fire({
      title: "¿Estás seguro de Borrar?",
      text: "¡Esta acción es irreversile!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, bórralo!",
      cancelButtonText: "¡No, cancelar!",
  }).then((result) => {
      if (result.isConfirmed) {
          $.ajax({
              type: "post",
              url: base_url + 'Eventos/Contratos/eliminarPlatillosEnVenta',
              data: (datos),
              dataType: "json",
              success: function (data) {
                  if (data.responce == "success") {
                      Swal.fire(
                          '¡Eliminado!',
                          'El periodo fue eliminado',
                          'success'
                      );
                      $("#tbl_VentaPlatillos").DataTable().destroy();
                      llenarTablaPlatillosEnVenta();
                      verSiYaExistePlatillosEnVenta();
                      // VisualizarSalones();  // Esta function esta en contratos.js
                  }
              },
          });
      }
  });
}








// Consultar si ya existe un salon en venta actual en descripcion de venta, para ocultar DIV DE SALON
  function verSiYaExisteSalonEnVenta(){
      // debugger;
        		var datos = {
                  venta : $("#id_ventaDesdeVenta").val(),
        		    }

        		$.ajax({
              url: base_url+'Eventos/Contratos/verSalonEnVentaOcultarDivSalon',
              type: "post",
              dataType: "json",
        			data : (datos),
        			success : function(data){
                if (data.responce == "success") {
                  debugger;
                    toastr["success"](data.message);

                    // $('#total_salon').val(data.post[0].cantidad_salon);

// alert(" PRECIO de SALON:  precio total: =>" + data.post[0].salon);
// alert(" SI EXISTE SALON VENTA:=> -- YYYY " );
        document.getElementById("SalonElegido").style.display = "block";
        document.getElementById("Salones").style.display = "none";

                      }else{
                        // toastr["error"](data.message);
// alert(" NO EXISTE SALON en VENTA -- YYYY");

      document.getElementById("Salones").style.display = "block";
      document.getElementById("SalonElegido").style.display = "none";

                      }
        			    }
        		});
        }





// Consultar si ya existe un Mobiliario en venta actual en descripcion de venta, para ocultar DIV DE Mobiliario
  function verSiYaExisteMobiliarioEnVenta(){
      // debugger;
        		var datos = {
                  venta : $("#id_ventaDesdeVenta").val(),
        		    }

        		$.ajax({
              url: base_url+'Eventos/Contratos/verMobiliarioEnVentaOcultarDivMobiliario',
              type: "post",
              dataType: "json",
        			data : (datos),
        			success : function(data){
                if (data.responce == "success") {
                    toastr["success"](data.message);

                    // $('#total_mobiliario').val(data.post[0].precio_total_mob)

// alert(" SI EXISTE Mobiliario VENTA:=> -- YYYY2222 " );
        document.getElementById("MobiliarioElegido").style.display = "block";
        document.getElementById("Mobiliario").style.display = "none";

                      }else{
                        // toastr["error"](data.message);
// alert(" NO EXISTE Mobiliario en VENTA -- YYYY222");

      document.getElementById("Mobiliario").style.display = "block";
      document.getElementById("MobiliarioElegido").style.display = "none";

                      }
        			    }
        		});
        }






// Consultar si ya existe un Platillos en venta actual en descripcion de venta, para ocultar DIV DE Mobiliario
  function verSiYaExistePlatillosEnVenta(){
      // debugger;
        		var datos = {
                  venta : $("#id_ventaDesdeVenta").val(),
        		    }

        		$.ajax({
              url: base_url+'Eventos/Contratos/verPlatillosEnVentaOcultarDivPlatillos',
              type: "post",
              dataType: "json",
        			data : (datos),
        			success : function(data){
                if (data.responce == "success") {
                    toastr["success"](data.message);

                //     $('#total_platillos').val(data.post[0].precio_total_platillo)
                //
                //     // debugger;
                //     var totalSalon     = $("#total_salon").val();
                //     var totalMobil     = $("#total_mobiliario").val();
                //     var totalPlatillos = $("#total_platillos").val();
                //
                // var sumaTotal = ( parseFloat(totalSalon) + parseFloat(totalMobil) + parseFloat(totalPlatillos) );
// ISAUL
                    // $('#cobroTotal').val(totalProductos);
                    // $('#peso').val(totalProductos);
                    // $('#cobroTotal').html(sumaTotal);

                    sumTotalVentas_Salon_Mob_Platillo();

// SELECT sum( precio_total_mob + precio_total_platillo + cantidad_salon)
// FROM descripcion_de_venta
// WHERE  venta = 11


// alert(" SI EXISTE Platillos VENTA:=> -- YYYY333332 " );
        document.getElementById("PlatillosElegido").style.display = "block";
        document.getElementById("Platillos").style.display = "none";

                      }else{
                        // toastr["error"](data.message);
// alert(" NO EXISTE Platillos  en VENTA -- YYYY33333");

      document.getElementById("Platillos").style.display = "block";
      document.getElementById("PlatillosElegido").style.display = "none";

                      }
        			    }
        		});
        }







/* ============  visualizarlos TOTAL DE ALL VENTAS ACTYUAL  ================ */
function sumTotalVentas_Salon_Mob_Platillo(){

    var venta = $("#id_ventaDesdeVenta").val();

    $.ajax({
        type: "post",
        url: base_url + 'Eventos/Contratos/verSumaTotalAllVentaActual',
        data: {
            venta: venta,
        },
        dataType: "json",
        success: function (data) {
              if (data.responce == "success") {
                $('#cobroTotal').html(data.post.totalVentas);
                  }else{
                  }

        },
    });
}





  /* -----------------   Realizar el cobro de la venta total dle dia venta actual  ----------------- */
    function  btnAddPagoCobroTotal(){
debugger;

var totalNumero = document.getElementById("cobroTotal").innerHTML; // De esta forma obtienee el valor de un label

      var datos = {
          // venta : id_venta,
          id_venta      : $("#id_ventaDesdeVenta").val(),
          total         : totalNumero,
          pago          : $("#pagoNumero").val(),
          cambio        : $("#cambioNumero").val(),
          estado_venta  : "Realizada",
          fecha_reporte : fecha,
          hora          : hora,
        }

        if (datos.pago == "" ) {
            alert("Debe realizar el pago...!");
        } else {
            $.ajax({
                type: "post",
                url: base_url + 'Clientes/Clientes/createRealizarCobroTerminar',
                data: (datos),
                dataType: "json",
                success: function(data) {
                    if (data.responce == "success") {
                        toastr["success"](data.message);
                          $('#addPagoCobroForm')[0].reset();
                          verificarTipoDeVentaCreditoNormal();
                    } else {
                        toastr["error"](data.message);
                    }
                },
            });
        }
    }


// VALIDACION DEL PAGO VS TOTAL Y EL CAMBIO
    $("#pagoNumero").on("keyup",  function(e){
debugger;
      var totalNumero = document.getElementById("cobroTotal").innerHTML; // De esta forma obtienee el valor de un label

              var cambio =   parseInt(totalNumero)-parseInt($('#pagoNumero').val());
              var pago = $('#pagoNumero').val();
              var total = parseInt(totalNumero);
                  if( pago == ""){

                    $('#cambioNumero').val("");
                    $("#addCredito").prop('disabled', true);
                  }
                  else if(pago<total){
                      // $('#cambioNumero').val(cambio);
                      // $("#addPago").prop('disabled', false);

                      // $('#cambioNumero').val("¡La cantidad a pagar debe ser mayor o igual al total!");
                      $('#cambioNumero').val("¡Venta a credito!");
                      $("#addPago").prop('disabled', true);
                      $("#addCredito").prop('disabled', false); // Sera una venta a credito
                  }else{  // (pago == " ")
                    // $('#cambioNumero').val(" ");
                    $('#cambioNumero').val(cambio);
                    $("#addPago").prop('disabled', false);   // Sera una venta normal
                    $("#addCredito").prop('disabled', true);
                  }

            });






  /* -----------------   Realizar el cobro de la venta A CREDITO   ----------------- */

  // 1.- se inserta en table venta con el estado de credito_pendiente
  // 2.- se inserta en table descripcion_de_venta en el campo de nombre_credito con el nombre de la persona que hace el credito
  // 3.- Previo a eso se inserta en la table de egresos se marca como un gasto
  // 4.- Hya una tabla de historico que se llevan los registros de las ventas a creditos

  function  btnAddPagoCredito(){
debugger;
  var totalNumero = document.getElementById("cobroTotal").innerHTML; // De esta forma obtienee el valor de un label
  var pago = $("#pagoNumero").val();
  var nombreCliente = $("#nombreCliente").val();  // ORIGINAL INPUT NAME CIENTE
  var credito = "CREDITO";
  var cambioOfaltante =   parseInt(totalNumero)-parseInt(pago);  // cambio ==> faltante x pagar

      var datos = {
          id_venta      : $("#id_ventaDesdeVenta").val(),
          total         : totalNumero,
          pago          : pago,
          cambio        : cambioOfaltante,
          subtotal      : totalNumero,
          estado_venta  : "Credito_pendiente",
          fecha_reporte : fecha,
          hora          : hora,
          cantidad      : 0,
          tipo          : "CDO_"+nombreCliente,       // tipo table Egresos concatenan CDO => CREDITO +  => nombre del cliente
          nombre        : "PAGO "+nombreCliente,       // nombre to table pagos concatenan  PAGO => Pago + => nombre del cliente
          usuario       : $("#username_cliente").val(),
          cliente       : $("#id_clienteAdd").val(),
          credito       : credito,
        }

        if (datos.pago > datos.total ) {
            alert("El pago deber ser menor al total para una venta a credito...!");
        } else {
            $.ajax({
                type: "post",
                url: base_url + 'Clientes/Clientes/createRealizarCobroTerminar',
                data: (datos),
                dataType: "json",
                success: function(data) {
                    if (data.responce == "success") {
                        toastr["success"](data.message);
                          $('#addPagoCobroForm')[0].reset();
                          verificarTipoDeVentaCreditoNormal();
                    } else {
                        toastr["error"](data.message);
                    }
                },
            });
        }
    }






// Consultar si ya existe una venta actual SI ES CREDITO O NORMAL EN ESTADO DE VENTA
  function verificarTipoDeVentaCreditoNormal(){
      debugger;
        		var datos = {
                  venta : $("#id_ventaDesdeVenta").val(),
                  usuario : $("#username_cliente").val(),
                  cliente : $("#id_clienteAdd").val(),
                  evento  : $("#id_evento_Agregado").val(),
        		    }

        		$.ajax({
              url: base_url+'Clientes/Clientes/verTipoVentaActualInEstadoVenta',
              type: "post",
              dataType: "json",
        			data : (datos),
        			success : function(data){
                if (data.responce == "success") {
                  debugger;
                    toastr["success"](data.message);
                              $('#estado_ventaActual').val(data.post.estado_venta)
                            var estado_ventaActual = $("#estado_ventaActual").val();

                  //   msjVentaEnCaptura     msjVentaCredito      msjVentaRealizada

                      if (estado_ventaActual == "En_captura") {

                            document.getElementById("msjVentaEnCaptura").style.display = "block";
                            document.getElementById("msjVentaCredito").style.display = "none";
                            document.getElementById("msjVentaRealizada").style.display = "none";

                      } else if (estado_ventaActual == "Credito_pendiente") {

                            document.getElementById("msjVentaEnCaptura").style.display = "none";
                            // $('#msjVentaEnCaptura').prop('hide', true);
                            document.getElementById("msjVentaCredito").style.display = "block";
                            document.getElementById("msjVentaRealizada").style.display = "none";
                            llenarTablaVentaCreditoActual();

                      } else  {  // Realizada

                            document.getElementById("msjVentaEnCaptura").style.display = "none";
                            document.getElementById("msjVentaCredito").style.display = "none";
                            document.getElementById("msjVentaRealizada").style.display = "block";
                            litaHistorialPagosXCliente();

                      }

                      }else{

                      }
        			    }
        		});
        }






  //  ===================== Lista la venta a creditos EN PROCESO DE VENTA ================

  function llenarTablaVentaCreditoActual() {

    var datos = {
        venta : $("#id_ventaDesdeVenta").val(),
        usuario : $("#username_cliente").val(),
        cliente : $("#id_clienteAdd").val(),
        evento  : $("#id_evento_Agregado").val(),
      }

      $.ajax({
          type: "post",
          url: base_url + 'Eventos/Contratos/verVentasCreditosActual',
          data: (datos),
          dataType: "json",
          success: function (response) {
              // var i = "1";
              $("#tbl_VentaCredito").DataTable({
                  data: response,
                  responsive: true,
                  columns: [
                      {
                          data: "id_venta",
                          // "visible": false,
                          // "searchable": false
                      },
                      {
                          data: "nombre",
                          // "visible": false,
                          // "searchable": false
                      },
                      {
                          data: "subtotal",
                      },
                      {
                          data: "total",
                          "className": "text-center",
                      },
                      {
                          data: "pago",
                          "className": "text-center",
                      },
                      {
                          data: "cambio",
                          "className": "text-center",
                      },
                      {
                          data: "fecha_reporte",
                          "className": "text-center",
                      },
                  ],
                  "language": language_espaniol,
              });
          },
      });
  }





  /* ------------------------------------------------------------------------------------ */
  /*       llenarTabla Historial de pagos x parcialidades UNA VEZ K ESTA EN REALIZADA     */
  /* ------------------------------------------------------------------------------------ */
  function litaHistorialPagosXCliente() {

        var datos = {
            id_venta : $("#id_ventaDesdeVenta").val(),
            // venta : $("#id_ventaDesdeVenta").val(),
            }

  var url = base_url+'VentasCreditos/VentaCredito/verListaParcialidades/'+datos.id_venta;

      $.ajax({
          type: "post",
          url: url,
          dataType: "json",
          data : (datos),
          success: function(response) {
              $("#tbl_listaPagosPagados").DataTable({
                  data: response,
                  responsive: true,
                  columns: [
                      {
                          data: "id_pago",
                          "visible": false, // ocultar la columna
                      },
                      {
                        data: "nombre",
                      },
                      {
                        data: "monto",
                        "className": "text-center",
                      },
                      {
                        data: "fechaCompleta",
                        "className": "text-center",
                      },
                  ],
                    "language" : language_espaniol,
              });
          },
      });
  }
