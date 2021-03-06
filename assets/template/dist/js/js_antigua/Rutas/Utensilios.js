$(document).ready(function () {
    llenartablaUtensilios(); // SEINICIALIZA LA FUNCTIO DE LA CARGA DEL LISTADO DE LA TABLA

});
/* ---------------------------- Add periodo Modal --------------------------- */
$("#modal_add_licenciatura").on("hide.bs.modal", function (e) {
    // do something...
    $("#addcarrera")[0].reset();
});
/* ---------------------------- Edit periodo Modal --------------------------- */
$("#modaleditcarrera").on("hide.bs.modal", function (e) {
    // do something...
    $("#formeditarcarrera")[0].reset();
});
//////////////////////// AGREGAR PERIODO ////////////////////////////////////////////////7
$(document).on("click", "#btnaddcarrera", function (e) {
    e.preventDefault();
    var licenciatura = $("#licenciatura").val();
    var clave_licenciatura = $("#clave_licenciatura").val();
    var fecha_licenciatura = $("#datepicker_fecha_licenciatura").val();
    if (licenciatura == "" || clave_licenciatura == "" || fecha_licenciatura == "") {
        alert("┬íComplete todos los campos!");
    } else {
        var fd = new FormData();
        fd.append("carrera_descripcion", licenciatura);
        fd.append("clave", clave_licenciatura);
        fd.append("fecha", fecha_licenciatura);
        $.ajax({
            type: "post",
            url: base_url + 'Administrativos/Carreras/insertarcarrera',
            data: fd,
            processData: false,
            contentType: false,
            dataType: "json",
            enctype: 'multipart/form-data',
            success: function (response) {
                if (response.res == "success") {
                    toastr["success"](response.message);
                    $("#modal_add_licenciatura").modal("hide");
                    $("#addcarrera")[0].reset();
                    $("#tbl_carreras").DataTable().destroy();
                    llenartablacarreras();
                } else {
                    toastr["error"](response.message);
                }
            },
        });
    }
});
//////////////////////// VER PERIODOS ////////////////////////////////////////////////7
function llenartablaUtensilios() {
    $.ajax({
        type: "get",
        url: base_url + 'Banquetes/Utensilios/verUtensilios',
        dataType: "json",
        success: function (response) {
            var i = "1";
            $("#tbl_Utensilios").DataTable({
                data: response,
                responsive: true,
                columns: [
                    {
                        data: "id_utensilio",
                        "visible": false,
                        "searchable": false
                    },

                    {
                        data: "nombre_utensilio",
                    },
                    {
                        data: "piezas_existencia",
                    },
                    {
                        data: "precio",
                    },
                    {
                        orderable: false,
                        searchable: false,
                        data: function (row, type, set) {
                            return `
                        <a href="#" id="edit_carrera" class="btn btn-success btn-remove" value="${row.id_carrera}"><i class="far fa-edit"></i></a>
                        <a href="#" id="del_carrera" class="btn btn-danger btn-remove" value="${row.id_carrera}"><i class="fas fa-trash-alt"></i></a>
                                 `;
                        },
                    },
                ],
                "language": language_espaniol,
            });
        },
    });
}
//////////////////////// ELIMINAR PERIODO ////////////////////////////////////////////////7
$(document).on("click", "#del_carrera", function (e) {
    e.preventDefault();
    var del_id = $(this).attr("value");
    Swal.fire({
        title: "┬┐Est├ís seguro de Borrar?",
        text: "┬íEsta acci├│n es irreversile!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "┬íSi, b├│rralo!",
        cancelButtonText: "┬íNo, cancelar!",
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "post",
                url: base_url + 'Administrativos/Carreras/eliminarcarrera',
                data: {
                    del_id: del_id,
                },
                dataType: "json",
                success: function (data) {
                    if (data.responce == "success") {
                        Swal.fire(
                            '┬íEliminado!',
                            'El periodo fue eliminado',
                            'success'
                        );
                        $("#tbl_carreras").DataTable().destroy();
                        llenartablacarreras();
                    }
                },
            });
        }
    });
});
////////////////////////// GET PERIODO FOR EDIT /////////////////////////////////
$(document).on("click", "#edit_carrera", function (e) {
    e.preventDefault();
    var edit_id = $(this).attr("value");
    $.ajax({
        type: "post",
        url: base_url + 'Administrativos/Carreras/editarcarrera',
        data: {
            edit_id: edit_id,
        },
        dataType: "json",
        success: function (data) {
            // console.log(data); ver la respuesta del json, los valores que contiene
            $('#modaleditcarrera').modal('show');
            $('#id_licenciatura_update').val(data.post.id_carrera)
            $('#licenciatura_update').val(data.post.carrera_descripcion)
            $('#clave_licenciatura_update').val(data.post.clave)
            $('#datepicker_fecha_licenciatura_update').val(data.post.fecha)
        },
    });
});
////////////////////////// EDIT PERIODO /////////////////////////////////
$(document).on("click", "#update_carrera", function (e) {
    e.preventDefault();
    var id_carrera = $('#id_licenciatura_update').val();
    var licenciatura_update = $('#licenciatura_update').val();
    var clave_licenciatura_update = $('#clave_licenciatura_update').val();
    var datepicker_fecha_licenciatura_update = $('#datepicker_fecha_licenciatura_update').val();
    if (licenciatura_update == "" || clave_licenciatura_update == "" || datepicker_fecha_licenciatura_update == "") {
        alert("┬íComplete todos los campos!");
    } else {
        $.ajax({
            type: "post",
            url: base_url + 'Administrativos/Carreras/updatecarrera',
            data: {
                id_carrera: id_carrera,
                licenciatura_update: licenciatura_update,
                clave_licenciatura_update: clave_licenciatura_update,
                datepicker_fecha_licenciatura_update: datepicker_fecha_licenciatura_update
            },
            dataType: "json",
            success: function (data) {
                if (data.responce == "success") {
                    toastr["success"](data.message);
                    $("#modaleditcarrera").modal("hide");
                    $("#formeditarcarrera")[0].reset();
                    $("#tbl_carreras").DataTable().destroy();
                    llenartablacarreras();
                } else {
                    toastr["error"](data.message);
                }
            },
        });
    }
});
// ********************   variable PARA CAMBIAR DE IDIOMA AL ESPA├ĹOL EL DataTable  *************************
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
        "last": "├Ültimo",
        "next": "Siguiente",
        "previous": "Anterior"
    }, /* TODO ESTO ES PARA CAMBIAR DE IDIOMA */
}
