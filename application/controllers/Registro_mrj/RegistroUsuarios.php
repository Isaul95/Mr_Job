<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class RegistroUsuarios extends CI_Controller {

		 // private $permisos;
	   public function __construct(){
	 	 parent::__construct();
		 $this->load->helper(array('form', 'url'));
	 	 $this->load->library(array('session', 'form_validation'));
		 // $this->permisos = $this->backend_lib->control();
	 	 $this->load->model("Registro_Usuarios_mrj/Modelo_RegistroUsuarios");
	 }


	public function index(){
					// $data = array(
					// 	'permisos' => $this->permisos,
					// 	'username' => $this->session->userdata('username'),
					// );
		$this->load->view('layouts/header_sin_aside');
		// $this->load->view('layouts/header');
		// $this->load->view('layouts/aside');
		$this->load->view('admin/ViewRegistro/VistaResgistroUsuario');  // ,$data
		// $this->load->view('layouts/footer');
	}




	public function insert_registroUsuario(){
		$unique_id = rand(time(), 100000000); // identificador randon
			$ajax_data = $this->input->post();
			$ajax_data['unico_id'] = $unique_id;
			if ($this->Modelo_RegistroUsuarios->agregar_NuevoUsuarioToMrJob($ajax_data)) {
				$data = array('responce' => 'success', 'message' => 'Nuevo usuario agregado exitosamente...!');
			} else {
				$data = array('responce' => 'error', 'message' => 'Fallo al agregar nuevo usuario...!');
			}
			echo json_encode($data);
		}



}  // Fin del controller
