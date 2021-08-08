$(document).ready(function () {
    llenarTablaRutasParaMobiliario(); // SEINICIALIZA LA FUNCTIO DE LA CARGA DEL LISTADO DE LA TABLA

    $('.clockpicker').clockpicker();

});



/* -----------------------   AGREGAR HORA DE SALIDA DEL MOBILIARIO  -------------------------- */

  $(document).on("click", "#btnAddHoraSalida", function(e) {
      e.preventDefault();

    var datos = {
        hora_salida : $("#hora_rutaSalida").val(),
        id_venta : $("#id_x").val(),
      }

      if (datos.hora_salida == "") {
          alert("Debe capturar un horario...!");
      } else {
          $.ajax({
              type: "post",
              url: base_url + 'RutasMobiliario/Rutas/insertHoraSalida',
              data: (datos),
              dataType: "json",
              success: function(data) {
                  if (data.responce == "success") {
                      toastr["success"](data.message);
                      $("#addHoraSalida")[0].reset();
                      $('#modal_Add_HoraSalida').modal('hide');
                        $("#tbl_RutasEntregaMobil").DataTable().destroy();
                    		llenarTablaRutasParaMobiliario();
                  } else {
                      toastr["error"](data.message);
                  }
              },
          });
      }
  });



/* -----------------------   AGREGAR HORA DE Entrega DEL MOBILIARIO  -------------------------- */

    $(document).on("click", "#btnAddHoraEntrega", function(e) {
        e.preventDefault();

      var datos = {
            hora_entrega : $("#hora_rutaEntrega").val(),
            id_venta : $("#id_horaEntrega").val(),
        }

        if (datos.hora_entrega == "") {
            alert("Debe capturar un horario...!");
        } else {
            $.ajax({
                type: "post",
                url: base_url + 'RutasMobiliario/Rutas/insertHoraEntrega',
                data: (datos),
                dataType: "json",
                success: function(data) {
                    if (data.responce == "success") {
                        toastr["success"](data.message);
                        $("#addHoraEntrega")[0].reset();
                        $('#modal_Add_HoraEntrega').modal('hide');
                          $("#tbl_RutasEntregaMobil").DataTable().destroy();
                      		llenarTablaRutasParaMobiliario();
                    } else {
                        toastr["error"](data.message);
                    }
                },
            });
        }
    });







function llenarTablaRutasParaMobiliario() {

  $("#loading-screen").show();
   // $('.container').html('<div class="loading"><img src="'+ base_url + 'assets/template/dist/img/ajax-loader.gif" alt="loading" /><br/>Un momento, por favor...</div>');
    $.ajax({
        type: "get",
        url: base_url + 'RutasMobiliario/Rutas/listarMobiliarioParaEntrega',
        dataType: "json",
        success: function (response) {
            $("#tbl_RutasEntregaMobil").DataTable({
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
                        data: "venta",
                        "visible": false,
                        "searchable": false
                    },
                    {
                        data: "name_cliente",
                    },
                    {
                        data: "start",
                    },
                    {
                        data: "direccion",
                    },
                    {
                        data: "nombre",
                    },
                    {
                        data: "precio",
                        "className": "text-center",
                    },
                    {
                        data: "cantidad_piezas_mobiliario",
                        "className": "text-center",
                    },
                    // {
                    //     orderable: false,
                    //     searchable: false,
                    //     data: function (row, type, set) {
                    //         return `
                    //     <a title="Capturar hora de entrega" onclick=modalCapturaHoraEntrega('${row.id_platillo}') class="btn btn-primary btn-remove"><i class="far fa-clock"></i></a>`;
                    //     },
                    // },
                    {
                        // data: "descripcion",
                        orderable: false,
                        searchable: false,
                        "className": "text-center",
                        // data: function (row, type, set) {
                        //     return `<a title="Capturar hora de salida" onclick=modalCapturaHoraSalida('${row.id_platillo}') class="btn btn-success btn-remove" ><i class="far fa-clock"></i></a>`;
                        // },
                        "render" : function(data, type, row) {
                            var hayNombres = `${row.nombre}`;
                            var hora_salida = `${row.hora_salida}`;
                                if( hayNombres != "null" && hora_salida == "null" ){
                                     var a = `<a title="Capturar hora de salida" onclick=modalCapturaHoraSalida('${row.venta}') class="btn btn-success btn-remove" ><i class="far fa-clock"></i></a>`;
                                } else if (hora_salida == "null" && hayNombres == "null") {
                                       var a = '-------';
                                }else {
                                var a = '<div class="p-3 mb-2 bg-green text-white">'+hora_salida+'</div>';
                              }
                                return a;
                          },
                    },
                    {
                        orderable: false,
                        searchable: false,
                        "className": "text-center",
                        "render" : function(data, type, row) {
                          var hayHoraSalida = `${row.hora_salida}`;
                          var hora_entrega = `${row.hora_entrega}`;
                              if( hayHoraSalida != "null"  && hora_entrega == "null"){
                                  var a = `<a title="Capturar hora de entrega" onclick=modalCapturaHoraEntrega('${row.venta}') class="btn btn-primary btn-remove"><i class="far fa-clock"></i></a>`;
                                } else if (hora_entrega != "null" ) {
                                       var a = '<div class="p-3 mb-2 bg-green text-white">'+hora_entrega+'</div>';
                                }else {
                                  var a = 'No hay horario de salida';
                                }
                                  return a;
                        },
                    },
                ],
                "language": language_espaniol,
            });
            $("#loading-screen").hide();
        },
    });
}



  function modalCapturaHoraSalida(venta){

    		$("#modal_Add_HoraSalida").modal("show");
        $("#addHoraSalida")[0].reset();
    		$("#id_x").val(venta);
            // $("#tbl_RutasEntregaMobil").DataTable().destroy();
        		// llenarTablaRutasParaMobiliario();
      }



  function modalCapturaHoraEntrega(venta){

    		$("#modal_Add_HoraEntrega").modal("show");
        $("#addHoraEntrega")[0].reset();
    		$("#id_horaEntrega").val(venta);
            // $("#tbl_RutasEntregaMobil").DataTable().destroy();
        		// llenarTablaRutasParaMobiliario();
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
