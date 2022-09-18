<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>.:: Login ::. "Mr. Job"</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

  <!-- base_url() = http://localhost/ventas_ci/-->

  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="<?php echo base_url();?>assets/template/bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo base_url();?>assets/template/font-awesome/css/font-awesome.min.css">

  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo base_url();?>assets/template/dist/css/AdminLTE.min.css">

</head>
<body class="hold-transition login-page">  <!--COLOR background NEGRO => style="background-color: #060405;"-->
    <div class="login-box">
        <div class="login-logo">
            <!-- <h2>Cesvi</h2> -->
        </div>
        <!-- /.login-logo  <font color="#D34787"></font>-->
        <div class="login-box-body">

          <center><img src="<?php echo base_url()?>assets/template/dist/img/Logo1.jpg"  class="user-image" alt="User Image" width=120px heigth=120px></center> <br>
         <!-- <center> <label><h3>Bienvenidos</h3></font></label> </center> -->

            <p class="login-box-msg"><center><h4>Introduzca sus datos de ingreso</h4></center></p>
            <br>
              <?php if($this->session->flashdata("error")):?>
                    <div class="alert alert-danger">
                        <p><?php echo $this->session->flashdata("error")?></p>
                    </div>
               <?php endif; ?>
<!---SE ESTA LLAMADO AL ALERT DE Auth.php line 28/ EN ESTA SOLO ES LA POSICION DONDE APARECERA LA ALERTA NO TIENE NADA K VER DONDE VAYA ESTA PARTDE DEL LLAMADO AL CONTRILALDOR-->

            <form action="<?php echo base_url();?>Login/Iniciar_Sesion/login_user" method="post">
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="Número de control" name="username"> <!--- HERE ADD -->
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback" >

                    <input type="password" class="form-control" placeholder="Contraseña" name="password"> <!--- HERE ADD -->
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Ingresar</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>

        </div>
        <!-- /.login-box-body -->
    </div>
    <!-- /.login-box -->



    <!-- Modal Agregar registro para recibo de pago -->
      <!-- <div class="modal fade" id="ModalEventos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> -->
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-primary text-center">
              <strong class="modal-title" id="exampleModalLabel">Agregar Nuevo Evento para esta fecha</strong>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- <input type="hidden" id="username" name="username" value="<?php echo $username;?>" > -->
              <input type="hidden" id="id_evento" name="id_evento" >

              <!-- Add Record Form -->
          <form id="frm_registro">

                <!-- <div class="form-group">
                  <label for="">Fecha: </label>
                  <input type="text" class="form-control" id="registro_fecha" readonly placeholder="llevarse fecha de regist-el back...">
                </div> -->

                <div class="form-group">
                  <label for="">Nombres: *</label>
                  <input type="text" class="form-control" id="registro_nombre" placeholder="Titulo del evento...">
                </div>

                <div class="form-group">
                  <label for="">Apellido Paterno: *</label>
                  <input type="text" class="form-control" id="registro_apellidoPat"  placeholder="Horario del evento...">
                </div>

                <div class="form-group">
                  <label for="">Apellido Materno: *</label>
                  <input type="text" class="form-control" id="registro_apellidoMat"  placeholder="Horario del evento...">
                </div>

                <div class="form-group">
                  <label for="">Email: *</label>
                  <input type="text" class="form-control" id="registro_email"  placeholder="Horario del evento...">
                </div>

                <div class="form-group">
                  <label for="">Edad: *</label>
                  <input type="text" class="form-control" id="registro_edad"  placeholder="Horario del evento...">
                </div>

                <div class="form-group">
                    <label for="read">Sexo:</label>
                    <label class="radio-inline">
                        <input type="radio" name="sexo" value="1-MAS" checked="checked">M
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="sexo" value="2-FEM" >F
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="sexo" value="3-OTH" >Otro
                    </label>
                </div>

                <div class="form-group">
                  <label for="">Contraseña: *</label>
                  <input type="text" class="form-control" id="registro_pass"  placeholder="*********">
                </div>

                <div class="form-group">
                  <label for="">Repetir Contraseña: *</label>
                  <input type="text" class="form-control" id="registro_passRepeat"  placeholder="*********">
                </div>

          </form>
            </div>
            <div class="modal-footer">
              <!-- Insert Button -->
              <button type="button" class="btn btn-primary" id="btn_registroUsuario">Registrarme</button>
              <a type="button" href="<?php echo base_url();?>" class="btn btn-success">Regresar</a>
<!-- <li><a href="<?php echo base_url();?>Login/Iniciar_Sesion" class="right">Registro</a></li> -->
            </div>
          </div>
        </div>
      <!-- </div> -->

<br>
<br>


	      <!-- FOOTER -->
	      <footer>
					<center>
	        <p><a href="#">Politicas de Privacidad</a> &middot; <a href="#">Terminos y Condiciones</a>
					<a class="pull-right">Versión 0.0.1</a></p>
					</center>
	      </footer>

<br>

<div class="Rectngulo-148392"></div>

<!-- jQuery 3 -->
<script src="<?php echo base_url();?>assets/template/jquery/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="<?php echo base_url();?>assets/template/bootstrap/js/bootstrap.min.js"></script>

</body>
</html>
