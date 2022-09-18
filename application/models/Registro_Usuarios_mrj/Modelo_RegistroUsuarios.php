<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Modelo_RegistroUsuarios extends CI_Model {


    public function agregar_NuevoUsuarioToMrJob($data){
        return $this->db->insert('usuarios', $data);
      }
    

  } // FIN MODELO
