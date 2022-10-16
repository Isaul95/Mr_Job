<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pagina_03 extends CI_Controller {

		 private $permisos;
	   public function __construct(){
	 	 parent::__construct();
		 //$this->load->helper(array('form', 'url'));
	 	 //$this->load->library(array('session', 'form_validation'));
		 //$this->permisos = $this->backend_lib->control();
	 	 //$this->load->model("Modelo_Utensilios");
	 }


	public function index(){
		/*$data = array(
			'permisos' => $this->permisos,
		);*/
		//$this->load->view('layouts/header');
		//$this->load->view('layouts/aside');
		$this->load->view('admin/PaginasFrontViews/VistaPagina03'); // ,$data
		//$this->load->view('layouts/footer');
	}







}  // Fin del controller
