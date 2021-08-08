
        <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar" >
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
<!-- ========= Aqui se reciben los roles =========== -->
            <?php
                $user      =null;
                $mobiliario   =2;
                $banquetes =4;
                $admin     =1;
                $profesor  =3;
                $ruta      =5;
                $user= $this->session->userdata("rol");
                // echo $user;
            ?>

          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="sidebar-menu" data-widget="tree">
              <li class="header"><strong>OPCIONES DE MENU</strong></li>
              <li>
                  <a href="<?php echo base_url();?>dashboard">
                      <i class="fa fa-home"></i> <span>Inicio</span>
                  </a>
              </li>



<!-- ROLE ALUMNO ===================== Empieza rol alumno to vistas ===================== -->
<!-- <?php echo $this->session->userdata("username")?> <br>
<?php echo $this->session->userdata("rol")?> -->

 <?php if($user==$mobiliario):?>
        <li class="treeview">
               <a href="#">
                   <i class="fas fa-user-graduate"></i>  <span>Encargado Mobiliario</span>
                   <span class="pull-right-container">
                       <i class="fa fa-angle-left pull-right"></i>
                   </span>
               </a>
            <ul class="treeview-menu">
                <li><a href="<?php echo base_url();?>RutasMobiliario/Rutas">
                    <i class="far fa-dot-circle"></i> Lista de eventos</a>
                 </li>
            </ul>
        </li>
 <?php endif;?>




 <?php if($user==$ruta):?>
        <li class="treeview">
               <a href="#">
                   <i class="fas fa-user-graduate"></i>  <span>Encargado Rutas</span>
                   <span class="pull-right-container">
                       <i class="fa fa-angle-left pull-right"></i>
                   </span>
               </a>
            <ul class="treeview-menu">
                <li><a href="<?php echo base_url();?>RutasMobiliario/Rutas">
                    <i class="far fa-dot-circle"></i> Lista de rutas</a>
                 </li>
            </ul>
        </li>
 <?php endif;?>





 <?php if($user==$banquetes):?>
        <li class="treeview">
               <a href="#">
                   <i class="fas fa-user-graduate"></i>  <span>Encargado Banquetes</span>
                   <span class="pull-right-container">
                       <i class="fa fa-angle-left pull-right"></i>
                   </span>
               </a>
            <ul class="treeview-menu">
                <li><a href="<?php echo base_url();?>Platillos/ListaPlatillosEncargado">
                    <i class="far fa-dot-circle"></i> Lista de banquetes</a>
                 </li>
            </ul>
        </li>
 <?php endif;?>



<!-- ROLE ADMIN ===================== Empieza rol ADMIN to vistas ===================== -->
<?php if($user==1):?>
      <li class="treeview">
            <a href="#">
                <i class="fas fa-balance-scale"></i> <span>Administrativos</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
          <ul class="treeview-menu">

                <!-- <li><a href="<?php echo base_url();?>Administrativos/Profesores">
                  <i class="far fa-dot-circle"></i> Profesores </a>
                </li> -->

                <li><a href="<?php echo base_url();?>Eventos/Contratos">
                  <i class="far fa-dot-circle"></i> Contratos</a>
                </li>

                <li>
                  <a href="<?php echo base_url();?>Platillos/ControlPlatillos">
                      <i class="fas fa-drumstick-bite"></i> <span>Platillos</span>
                  </a>
                </li>

                <li><a href="<?php echo base_url();?>Administrativos/Banquetes">
                    <i class="far fa-dot-circle"></i> Banquetes </a>
                </li>

                <li>
                  <a href="<?php echo base_url();?>Salones/ControlSalones">
                    <i class="fas fa-home"></i> <span>Salones</span>
                  </a>
                </li>

                <li>
                  <a href="<?php echo base_url();?>Mobiliario/Mobiliario">
                  <i class="fas fa-chair"></i> Mobiliario</a>
                </li>

                <!-- <li>
                  <a href="<?php echo base_url();?>Clientes/Clientes">
                  <i class="fas fa-users"></i> Clientes</a>
                </li> -->
                <!-- Inicio Seccion de Email -->
              <li>
                <a href="<?php echo base_url();?>Email/Email">
                <i class="fas fa-mail-bulk"></i> Email</a>
              </li>
              <!-- Fin Seccion de Email -->


          </ul>
      </li>
<?php endif;?>


<?php if($user==1):?>

      <li class="treeview">
          <a href="#">
              <i class="fas fa-balance-scale"></i> <span>Rutas</span>
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
              <li><a href="<?php echo base_url();?>RutasMobiliario/Rutas">
                 <i class="far fa-dot-circle"></i>  Rutas Mobiliario</a>
              </li>

              <!-- <li><a href="<?php echo base_url();?>Banquetes/Utensilios">
                <i class="far fa-dot-circle"></i>  Utensilios</a>
              </li> -->
          </ul>
      </li>



      <li class="treeview">
          <a href="#">
              <i class="fas fa-balance-scale"></i> <span>Eventos</span>
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
              <li><a href="<?php echo base_url();?>Eventos/NuevoEvento">
                 <i class="far fa-dot-circle"></i>  Crear Nuevo Evento</a>
              </li>

              <!-- <li><a href="<?php echo base_url();?>Eventos/ListaEventos">
                <i class="far fa-dot-circle"></i> Contratos</a>
              </li> -->
          </ul>
      </li>

<?php endif;?>




<?php if($user==1):?>
<!--  Modilo de Gastos -->
        <li class="treeview">
            <a href="#">
                <i class="fas fa-balance-scale"></i> <span>Gastos</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">

                <li>
                  <a href="<?php echo base_url();?>Gasto/Gastos">
                  <i class="far fa-dot-circle"></i> Lista de gastos</a>
                </li>

            </ul>
        </li>

<?php endif;?>

<!-- INICIO  Listado de ventas a creditos/pagos/seguimiento de las ventas a creditos -->


<?php if($user==1):?>

      <li class="treeview">
          <a href="#">
              <i class="fas fa-balance-scale"></i> <span>Ventas A credito</span>
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
              <li><a href="<?php echo base_url();?>VentasCreditos/VentaCredito">
                 <i class="far fa-dot-circle"></i>  Lista de creditos</a>
              </li>

          </ul>
      </li>


<?php endif;?>

<!-- FIN VENTAS A CREDITOS -->


<!-- ROLE PROFE ===================== Empieza rol PROFE to vistas ===================== -->
<?php if($user==3):?>
      <li class="treeview">
          <a href="#">
              <i class="fas fa-balance-scale"></i> <span>Profesores</span>
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">

              <li><a href="<?php echo base_url();?>Finanzas/HabilitarAlumnos">
                  <i class="far fa-dot-circle"></i> Subir planeación</a>
              </li>

             <li><a href="<?php echo base_url();?>Administrativos/Calificaciones">
              <i class="far fa-dot-circle"></i> Agregar calificaciones</a>
             </li>

          </ul>
      </li>
<?php endif;?>



<?php if($user==1):?>
      <li class="treeview">
          <a href="#">
            <i class="fas fa-user-shield"></i> <span>Usuarios y permisos</span>
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>

        <ul class="treeview-menu">
              <li>
                  <a href="<?php echo base_url();?>administrador/usuarios">
                  <i class="far fa-dot-circle"></i>  Usuarios</a>
              </li>

              <li>
                  <a href="<?php echo base_url();?>administrador/permisos">
                    <i class="far fa-dot-circle"></i>  Permisos</a>
              </li>
        </ul>
    </li>
<?php endif;?>

    <!-- <li>
      <a href="<?php echo base_url();?>Platillos/ControlPlatillos">
          <i class="fas fa-drumstick-bite"></i> <span>Platillos</span>
      </a>
    </li> -->

    <!-- <li>
      <a href="<?php echo base_url();?>Salones/ControlSalones">
        <i class="fas fa-home"></i> <span>Salones</span>
      </a>
    </li> -->

    <li>
      <a href="<?php echo base_url();?>PlatillosClientes/ControlPlatillosClientes">
        <i class="fas fa-drumstick-bite"></i> <span>Elegir platillos</span>
      </a>
    </li>

<!-- ============================== Inicio Modificacion Nacho ======================================== -->
      <!-- Inicio Seccion de Mobiliario -->
  <!--    <li>
        <a href="<?php echo base_url();?>Mobiliario/Mobiliario">
        <i class="fas fa-chair"></i> Mobiliario</a>
      </li>


      <li>
        <a href="<?php echo base_url();?>Clientes/Clientes">
        <i class="fas fa-users"></i> Clientes</a>
      </li>   -->
      <!-- Fin Seccion de Clientes -->



           </ul>
       </section>
   </aside>
