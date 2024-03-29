
<!-- jQuery 3 -->
<script src="<?php echo base_url();?>assets/template/jquery/jquery.min.js"></script>
<!-- Highcharts -->
<script src="<?php echo base_url();?>assets/template/highcharts/highcharts.js"></script>
<script src="<?php echo base_url();?>assets/template/highcharts/exporting.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="<?php echo base_url();?>assets/template/bootstrap/js/bootstrap.min.js"></script>
<script src="<?php echo base_url();?>assets/template/bootstrap/css/bootstrap.css"></script>
<script src="<?php echo base_url();?>assets/template/jquery-ui/jquery-ui.js"></script>
<!-- SlimScroll -->
<script src="<?php echo base_url();?>assets/template/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- DataTables -->
<script src="<?php echo base_url();?>assets/template/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="<?php echo base_url();?>assets/template/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>

<!--FONT AWESOME, CARGA DE ICONOS PARA LOS BOTONES-->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
<!-- DataTables Export -->
<script src="<?php echo base_url();?>assets/template/datatables-export/js/dataTables.buttons.min.js"></script>
<script src="<?php echo base_url();?>assets/template/datatables-export/js/buttons.flash.min.js"></script>
<script src="<?php echo base_url();?>assets/template/datatables-export/js/jszip.min.js"></script>
<script src="<?php echo base_url();?>assets/template/datatables-export/js/pdfmake.min.js"></script>
<script src="<?php echo base_url();?>assets/template/datatables-export/js/vfs_fonts.js"></script>
<script src="<?php echo base_url();?>assets/template/datatables-export/js/buttons.html5.min.js"></script>
<script src="<?php echo base_url();?>assets/template/datatables-export/js/buttons.print.min.js"></script>
<script src="<?php echo base_url();?>assets/template/datatables-export/css/buttons.dataTables.min.css"></script>
<!-- Toastr -->
<script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<!-- FastClick -->
<script src="<?php echo base_url();?>assets/template/fastclick/lib/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="<?php echo base_url();?>assets/template/dist/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="<?php echo base_url();?>assets/template/dist/js/demo.js"></script>
<!-- Sweet Alert2 -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>


<script src="<?php echo base_url();?>assets/template/js/fullcalendar.min.js"></script>
<script src="<?php echo base_url();?>assets/template/js/es.js"></script>
<script src="<?php echo base_url();?>assets/template/clockpicker-js/bootstrap-clockpicker.js"></script>

<!-- xxxxxxxxxxxx -->
<!-- <script src="<?php echo base_url();?>assets/template/js/organictabs.jquery.js"></script> -->

<!-- Js para el diseño del tab del dashboard...  -->
<script src="<?php echo base_url();?>assets/template/dist/js/jsTabDashboard.js"></script>

<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->


<script>

    $(document).ready(function(){

//  1.-  Vista ruta     ===>>    views\admin\permisos\list.php
        $('#tbl_permisos').DataTable( {
            "language" : language_espaniol,
          });

//   2.- Vista ruta       ====>>>   views\admin\usuarios\list.php
        $('#tbl_usuarios').DataTable( {
            "language" : language_espaniol,
          });

    })


// ES EL LENGUAJE DE LAS TABLAS DE INGLES => ESPAÑOL DataTable()
// *********   VAR PARA CAMBIAR DE IDIOMA AL ESPAÑOL EL DataTable **********
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

    var base_url = '<?php echo base_url();?>';

</script>




<!-- $(document).ready(function(){
    /*  ADD LA PARTE SUPERIOR LA BUSKEDA Y LA PAGHINACION  */
$('#btn_RegistroPago').DataTable( {
 "order": [[ 5, "asc" ]], //ordenar de forma ascendente

 "language": {
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
   }, /*  ESTO ES PARA CAMBIAR DE IDIOMA */
 }
});
        }) -->




<!--  SON LAS LIGAS K SE ESTAN AGREGARNDO PARA LOS MODULOS DE LA ANTIGUA    -->

<!-- =============  Rutas para encargado de MOBILIARIO  ISAUL ============== -->
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/Rutas/rutas.js"></script>
<!-- =============  utensilios  ISAUL ============== -->
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/Eventos/contratos.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/VentasCredito/VentaCredito.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/gastos/Gastos.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/Salones/Salones.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/Platillos/Platillos.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/Eventos/NuevoEvento.js"></script>
<!-- Mobiliario -->
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/Mobiliario/Mobiliario.js"></script>
<!-- Clientes -->
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/Clientes/Clientes.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua//banquetes/Banquetes.js"></script>
<!-- Email -->
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/Email/Email.js"></script>
<!-- La persona encargada de los platillos preparacion -->
<script src="<?php echo base_url();?>assets/template/dist/js/js_antigua/EncargadosAreas/ListasDePlatillosToEncargado.js"></script>




<!--  JS DEL PROYECTO DE MR JOB 2022 -->
<!-- 1.- Registro de usuarios para ingresar sistema -->
<script src="<?php echo base_url();?>assets/template/dist/js/js_mrjob/RegistroUser/registro.js"></script>

<script src="<?php echo base_url();?>assets/template/dist/js/js_mrjob/ContactoPrestadorServicio/chat_Pservicio.js"></script>





<!-- vistas del front mr job 2022  -->
<script src="<?php echo base_url();?>assets/template/dist/js/js_mrjob/FrontJs/vista_01.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_mrjob/FrontJs/vista_02.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_mrjob/FrontJs/vista_03.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_mrjob/FrontJs/vista_04.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_mrjob/FrontJs/vista_05.js"></script>
<script src="<?php echo base_url();?>assets/template/dist/js/js_mrjob/FrontJs/vista_06.js"></script>