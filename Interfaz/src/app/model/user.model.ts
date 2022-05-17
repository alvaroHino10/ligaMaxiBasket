export interface Preinscripcion{
    cod_preinscrip : string;
    num_transfer_preinscrip: string;
    costo_preinscrip: string;
    fecha_preinscrip: string;
    link_img_comprob: string;
}

export interface DelegadoPreinscrip {
    cod_deleg : string,
    cod_preinscrip : string;
    nombre_deleg: string;
    ap_deleg: string;
    correo_deleg: string;
    telf_deleg: string;

}
export interface RegistroEquipo{
    nombreDelEquio: string;
    categoria: string;
    pais: string;
    colorEquipo: string;
}

export interface RegistroJugador{
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    correoElectronico: string;
    numeroIdentidad: string;
    nacion: string;
    estadoCivil: string;
    telefono: string;
    sexo: string;
    domicilio: string;
    numeroJugador: string;
    linkimg: string;
}

export interface Jugador{
    cod_jug: string;
    cod_equi: string;
    nombre_jug: string;
    prim_ap_jug: string;
    seg_ap_jug: string;
    correo_jug: string;
    num_iden_jug: string;
    nacion_jug: string;
    est_civil_jug: string;
    fecha_nac_jug: string;
    telf_jug: string;
    sexo_jug: string;
    dom_jug: string;
    num_equi_jug: string;
    link_img_jug: string;
}



/*
export interface Credentials {
    user_name: string;
    password: string;
  }
  


  export interface Request {
      name: string;
      last_name: string;
      phone: string;
      email: string;
      birthday: string;
      answer_what: string;
      answer_why: string;
      operation: string;
      id_request: string;
      update_field: string;
      id_url_status: string;
  }
  
  export interface PersonalData {
    name: string;
    last_name: string;
    phone: string;
    email: string;
    birthday: string;
    user_name: string;
    password: string;
  }
  
  export interface Account {
    id: string;
    username: string;
    password: string;
    id_rol: string;
    id_data: string;
  }
  */