
        <!-- Content Wrapper. Contains page content -->
        <!-- style="background-color: black;" -->
            <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
        <h1>
            <center><strong><font color="#D34787">"Proyecto Mr. Job"</font></strong></center>
    <center><small><font color="#2F4D97" face="Comic Sans MS,arial,verdana">Ciudad Iguala de la Independencia, Guerrero</font></small></center>
        </h1>
            </section>
            <!-- Main content -->

            <section class="content">

                    <!---div class="box box-solid"> <div class="box-body">
Esta vista es la del dashboard WELCOME ISAUL HERE IS MY WORld <br> </div>  <! /.box-body >  </div-->         <br> <br>
<!--Aqui cambio la vista al modo venta-->
<form>
                <center>
                <!-- <button  type ="submit" class="btn btn-outline-secondary"> -->
                <!-- <img src="<?php echo base_url()?>assets/template/dist/img/Logo.png"  class="user-image" alt="User Image" width=420px heigth=420px link=""> -->
                 <!-- </button> -->
                   <center>

</form>

<!-- <?php ini_set('date.timezone', 'America/Mexico_City');?>
<?php  echo $time=date('H:i:s', time());?>
<?php echo date('g:i:s a', strtotime($time));?>
<?php echo $time=date('Y-m-d', time());?> -->

            </section>




            

<!-- ------- INICIA TRABAJANDO ISAUL CHAT FECHA: 17/09/22 6:06 PM --------------------->

  <!-- https://www.youtube.com/watch?v=DoEQ-nCJqP0
        Pestañas animadas usando HTML, CSS y JavaScript - con esto crear tabs se ven bien -->

<div class="row">
<div class="col-md-12">
    <div class="d-flex flex-row">
        <a type="button" class="btn btn-primary btn-float" data-toggle="modal" data-target="#ModalAgregarDetalleCliente"><span class="fa fa-plus"></span> Nuevo platillo</a>
    </div>
</div>
</div>

 <!-- Modal Agregar nuevo registro -->
 <div class="modal fade" id="ModalAgregarDetalleCliente" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header bg-primary text-center">
                    <strong class="modal-title" id="exampleModalLabel">Agregar detalles</strong>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form id="resetDetalles">                      
                      <div class="form-group">
                        <label for="">Descripción</label>
                        <textarea class="form-control" id="descripcion_banquete" placeholder="Descripcion..." rows="15"></textarea>
                      </div>                      
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" id="btnaddbanquete">Agregar</button>
                  </div>
                </div>
              </div>
            </div>

            <br>
<div class="row">
<div class="col-md-12">
    <div class="d-flex flex-row">
        <a type="button" class="btn btn-primary btn-float" data-toggle="modal"><span class="fa fa-plus"></span> Abrir chat</a>
    </div>
</div>
</div>

<!-- ------- TERMINA TRABAJANDO ISAUL CHAT FECHA: 17/09/22 6:06 PM --------------------->



        </div>
 