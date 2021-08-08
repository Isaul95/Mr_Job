<div class="content-wrapper colorfondo"> <!-- STAR ALL CONTENT -->
  <style type="text/css">
  textarea{
    resize: none;
  }
  </style>
  <!-- Main content -->
  <section class="content">
    <!-- Default box -->
    <div class="box box-solid colorfondo">
      <div class="box-body">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mt-5">
              <h1 class="text-center">
                <strong><font color="#D34787">Banquetes</font></strong>
              </h1>
              <hr style="background-color: black; color: black; height: 1px;">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12">
                  <?php if($permisos->insert == 1):?>
                    <div class="d-flex flex-row">
                      <a type="button" class="btn btn-primary btn-float" data-toggle="modal" data-target="#modal_add_banquete"> <span class="fa fa-plus"></span> Nuevo Banquete</a>
                    </div>
                <?php endif;?>
              </div>
            </div>
            <hr> <!-- Le da una linea sombreada para ver la divicion -->

            <div class="row my-4">
              <div class="col-md-12 mx-auto">

                <table id="tbl_banquetes" class="table table-striped table-bordered dt-responsive nowrap table-hover table-condensed" cellspacing="0" style="background:white!important">
                  <thead class="text-center bg-primary">
                    <tr>
                      <th width="3%" type="hidden">#</th>
                      <th>Nombre</th>
                      <th width="7%">Precio por persona</th>
                      <th>Descripcion</th>
                      <th width="8%">Imagen</th>
                      <th class="text-center" width="7%">Acciones</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <!-- Modal Agregar nuevo registro -->
            <div class="modal fade" id="modal_add_banquete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header bg-primary text-center">
                    <strong class="modal-title" id="exampleModalLabel">Agregar Banquete</strong>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form id="addbanquete">
                      <div class="form-group">
                        <label for="">Nombre</label>
                        <input type="text" class="form-control" id="nombre_banquete" placeholder="Nombre">
                      </div>
                      <div class="form-group">
                        <label for="">Precio</label>
                        <input type="text" class="form-control" id="precio_banquete" placeholder="Precio">
                      </div>
                      <div class="form-group">
                        <label for="">Descripción</label>
                        <textarea class="form-control" id="descripcion_banquete" placeholder="Descripcion" rows="3"></textarea>
                      </div>
                      <div class="form-group" class="form-control-file">
                        <label>Seleccionar imagen...</label>
                        <input type="file" class="custom-file-input" name="imagen_banquete" id="imagen_banquete" />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    <!-- Insert Button -->
                    <button type="button" class="btn btn-primary" id="btnaddbanquete">Agregar</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal preparado para editar datos y file -->
            <div class="modal fade" id="modaleditbanquete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header bg-primary text-center">
                    <strong class="modal-title" id="exampleModalLabel">Editar Banquete</strong>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="row text-center">
                        <div class="col-md-12 my-3">
                          <div id="show_img"></div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <form id="formeditarbanquete">
                            <!-- Inputs para editar  -->
                            <input type="hidden" id="id_banquete_update">
                            <div class="form-group">
                              <label for="">Nombre</label>
                              <input type="text" class="form-control" id="nombre_banquete_new">
                            </div>
                            <div class="form-group">
                              <label for="">Precio</label>
                              <input type="text" class="form-control" id="precio_banquete_new" />
                            </div>
                            <div class="form-group">
                              <label for="">Descripción</label>
                              <textarea class="form-control" id="descripcion_banquete_new" rows="3"></textarea>
                            </div>
                            <div id="MostrarImagenActualBanquetes" style="text-align: center;"></div>
                            <div class="form-group">
                              <label>Seleccionar imagen...</label>
                              <input type="file" class="form-control-file" id="imagen_banquete_new" />
                              <input type="hidden" id="uploaded_image_ban">
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" id="update_banquete">Actualizar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div><!-- /.box-body -->
    </div><!-- /.box -->
  </section><!-- / MAIN content -->
</div> <!-- /END ALL CONTENT -->
