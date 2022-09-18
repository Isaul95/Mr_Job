<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Iniciar_Sesion extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model("Usuarios_model");
	}
	public function index()
	{
		if ($this->session->userdata("login")) {
			redirect(base_url()."dashboard");
		}
		else{
	// $this->load->view('layouts/header_sin_aside'); //header encabezdado azul
	 $this->load->view("admin/login");
	 $this->load->view('layouts/footer');  // tiene k llamarse el footer para hacer uso del .js
		}


	}

	public function login_user(){
		$username = $this->input->post("username");
		$password = $this->input->post("password");

		$res = $this->Usuarios_model->login($username, $password);

		if (!$res) {
			$this->session->set_flashdata("error","El usuario y/o contraseña son incorrectos");
			redirect(base_url()."Login/Iniciar_Sesion");
		}
		else{
			$data  = array(
				'id' => $res->id,
				'nombres' => $res->nombres,
				'rol' => $res->rol_id,
				'username' => $res->username,
				'login' => TRUE
			);
			$this->session->set_userdata($data);
			redirect(base_url()."dashboard");
		}
	}

	public function logout(){
		$this->session->sess_destroy();
		redirect(base_url());
	}
}
