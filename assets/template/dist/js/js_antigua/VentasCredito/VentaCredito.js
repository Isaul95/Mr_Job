$(document).ready(function () {
    llenarTablaGralVentasAcreditos(); // SEINICIALIZA LA FUNCTIO DE LA CARGA DEL LISTADO DE LA TABLA

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
          fechaPago = yyyy + "/" + mm + "/" + dd;

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
          horaPago = ho + ":" + min + ":" + seg;

});




//  =================  LISTA GRAL DE ALL VENTAS A CREDITOS PENDIENTES  ================

  function llenarTablaGralVentasAcreditos() {

      $.ajax({
          type: "get",
          url: base_url + 'VentasCreditos/VentaCredito/verListaVentasCreditosActuales',
          dataType: "json",
          success: function (response) {
              // var i = "1";
              $("#tbl_AllVentasACreditosPend").DataTable({
                  data: response,
                  responsive: true,
                  columns: [
                      {
                          data: "id_venta",
                          "className": "text-center",
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
                          "className": "text-center",
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
                      {
                          orderable: false,
                          searchable: false,
                          "className": "text-center",
                          "render" : function(data, type, row) {
                              // debugger;
                              // var nombreCliente = `${row.nombre}`;
                              // $('#name_clientePagos').val(nombreCliente);
                                var a = `<a title="Capturar hora de salida" onclick=modalCapturaPagoCredito('${row.id_venta}','${row.cliente}') class="btn btn-success btn-remove" ><i class="fas fa-cash-register"></i></a>`;
                                  return a;
                            },
                      },
                      {
                                orderable: false,
                                searchable: false,
                                  "className": "text-center",
                                "render" : function(data, type, row) {
                                  var a = `<a title="Historial de parcialidades" onclick=modalHistorialParcialidades('${row.id_venta}')><i class="fas fa-history iconbig azul fa-2x"></i></a>`
                                  return a;
                                },
                            },
                  ],
                  "language": language_espaniol,
              });
          },
      });
  }




// Historial de pagos x parcialidad
  function modalHistorialParcialidades(id_venta){

		$("#modalHistorialDeParcialidadesXCliente").modal("show");
		$("#id_ventaHistorialPagos").val(id_venta);
        $("#tbl_listaHistPagosParcialidad").DataTable().destroy();
    		litaHistorialParcialidadXCliente();
}



/* -------------------------------------------------------------------------- */
/*         llenarTabla Historial de pagos x parcialidades                     */
/* -------------------------------------------------------------------------- */
function litaHistorialParcialidadXCliente() {

      var datos = {
          id_venta : $("#id_ventaHistorialPagos").val(),
          }

var url = base_url+'VentasCreditos/VentaCredito/verListaParcialidades/'+datos.id_venta;

    $.ajax({
        type: "post",
        url: url,
        dataType: "json",
        data : (datos),
        success: function(response) {
            $("#tbl_listaHistPagosParcialidad").DataTable({
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


/* -----------------------   AGREGAR EL PAGO DE LA VENTA A CREDITO  -------------------------- */

  $(document).on("click", "#btnAddPagosVentaCredito", function(e) {
      e.preventDefault();

    var datos = {
        pago     : $("#monto_pagos").val(),
        id_venta : $("#id_ventaPagos").val(),
        cliente   : $("#id_clientePagos").val(), // nombre to table pagos concatenan  PAGO => Pago + => nombre del cliente
        fecha    : fechaPago,
        hora     : horaPago,
      }

      if (datos.pago == "") {
          alert("Debe ingresar una cantidad...!");
      } else {
          $.ajax({
              type: "post",
              url: base_url + 'VentasCreditos/VentaCredito/insertPago',
              data: (datos),
              dataType: "json",
              success: function(data) {
                  if (data.responce == "success") {
                      toastr["success"](data.message);
                      $("#addPagos")[0].reset();
                      $('#modal_Add_PagoCredito').modal('hide');
                        $("#tbl_AllVentasACreditosPend").DataTable().destroy();
                    		llenarTablaGralVentasAcreditos();
                  } else {
                      toastr["error"](data.message);
                  }
              },
          });
      }
  });



/* -----------------------   AGREGAR HORA DE Entrega DEL MOBILIARIO  -------------------------- */

    // $(document).on("click", "#btnAddHoraEntrega", function(e) {
    //     e.preventDefault();
    //
    //   var datos = {
    //         hora_entrega : $("#hora_rutaEntrega").val(),
    //         id_venta : $("#id_horaEntrega").val(),
    //     }
    //
    //     if (datos.hora_entrega == "") {
    //         alert("Debe capturar un horario...!");
    //     } else {
    //         $.ajax({
    //             type: "post",
    //             url: base_url + 'RutasMobiliario/Rutas/insertHoraEntrega',
    //             data: (datos),
    //             dataType: "json",
    //             success: function(data) {
    //                 if (data.responce == "success") {
    //                     toastr["success"](data.message);
    //                     $("#addHoraEntrega")[0].reset();
    //                     $('#modal_Add_HoraEntrega').modal('hide');
    //                       $("#tbl_RutasEntregaMobil").DataTable().destroy();
    //                   		llenarTablaGralVentasAcreditos();
    //                 } else {
    //                     toastr["error"](data.message);
    //                 }
    //             },
    //         });
    //     }
    // });
    //








  function modalCapturaPagoCredito(venta, cliente){
    		$("#modal_Add_PagoCredito").modal("show");
        $("#addPagos")[0].reset();
    		$("#id_ventaPagos").val(venta);
        $("#id_clientePagos").val(cliente);
      }



  //
  //
  // function modalCapturaHoraEntrega(venta){
  //
  //   		$("#modal_Add_HoraEntrega").modal("show");
  //       $("#addHoraEntrega")[0].reset();
  //   		$("#id_horaEntrega").val(venta);
  //           // $("#tbl_RutasEntregaMobil").DataTable().destroy();
  //       		// llenarTablaGralVentasAcreditos();
  //     }



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
