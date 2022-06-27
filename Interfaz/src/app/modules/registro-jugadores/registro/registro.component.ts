import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroJComponent implements OnInit {
  public formularioRegistroJugador: FormGroup;
  listaEstadoCivil: any = ["Soltero", "Casado", "Divorciado", "Viudo"];
  listaEquipos: any;
  submitted = false;
  categoria = [];
  listaJugadores: any = [];
  fileImage: any;
  dataPost: any;
  mensajeError: any;

  constructor(public formulario: FormBuilder,
    private apiService: ApiService) {
    this.formularioRegistroJugador = new FormGroup({
      nombre: new FormControl('',
            [Validators.required,
            Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
            Validators.minLength(2),
            Validators.maxLength(80)]),
      primerApellido: new FormControl('',
            [Validators.required,
            Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
            Validators.minLength(1),
            Validators.maxLength(80)]),
      segundoApellido: new FormControl('',
            [Validators.required,
            Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
            Validators.minLength(1),
            Validators.maxLength(80)]),
      correoElectronico: new FormControl('',
            [Validators.required,
            Validators.email]),
      numeroIdentidad: new FormControl('',
            [Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(5),
            Validators.maxLength(15)]),
      equipo: new FormControl('',
            Validators.required),
      nacionJugador: new FormControl('',
            [Validators.required,
            Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),
      estadoCivil: new FormControl('',
            Validators.required),
      fechaNacimiento: new FormControl('',
            Validators.required),
      telefono: new FormControl('',
            [Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(5),
            Validators.maxLength(15)]),
      sexo: new FormControl('',
            Validators.required),
      domicilio: new FormControl('',
            [Validators.required,
            Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
            Validators.minLength(1),
            Validators.maxLength(80)]),
      numeroJugador: new FormControl('',
            [Validators.required,
            Validators.min(1),
            Validators.max(80)]),
      linkImgJug: new FormControl('',
            Validators.required)
    });
  }
  ngOnInit(): void {
      this.getEquipos();
  }

  getEquipos() {
    this.apiService.getAll('equipo').subscribe((dataequipo: any = []) => {
      this.listaEquipos = dataequipo['data'];
      console.log(this.listaEquipos);
    });
  }

  registrarJugador() {
    this.submitted = true;
    if (this.formularioRegistroJugador.invalid) {
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      console.log(this.formularioRegistroJugador.controls.invalid);
      return;
    } else {
      this.validarCategoria();
      this.postServicio();
    }
  }

  validarCategoria() {
    const valorStr = this.formularioRegistroJugador.value.equipo.categ_equi;
    var categEqui = parseInt(valorStr.substring(1));
    if (categEqui == this.categoriaJugador) {
      return true;
    }
    alert('La categoria del jugador no corresponde a la categoria de su equipo');
    return false;
  }

  subirImagen(event: any) {
    if (event.target.files.length > 0) {
      this.fileImage = event.target.files[0];
      this.formularioRegistroJugador.value.linkImgComprobante = this.fileImage;
    }
  }

  postServicio() {
    var registroJugador = this.setRegistro();
    var mensajeResponse;

    this.apiService.postAndImage('jugador', registroJugador).subscribe(res => {
      this.dataPost = res;
      console.log(this.dataPost);
      mensajeResponse = this.dataPost['mensaje'];
      alert(mensajeResponse);
    }, (error) => {
      this.mensajeError = error;
      console.log(this.mensajeError.error['mensaje']);
      mensajeResponse = this.mensajeError.error['mensaje'];
      alert(mensajeResponse);
    });
    this.getServicio();
  }

  getServicio() {
    const registro = this.formularioRegistroJugador.value;
    this.apiService.getAll('jugadores').subscribe((data: any) => {
      this.listaJugadores = data;
    })
    console.log(this.listaJugadores);
  }


  setRegistro() {
    var registroJugador = new FormData();
    registroJugador.append('cod_equi', this.formularioRegistroJugador.value.equipo.cod_equi);
    registroJugador.append('nombre_jug', this.formularioRegistroJugador.value.nombre.toLowerCase());
    registroJugador.append('prim_ap_jug', this.formularioRegistroJugador.value.primerApellido.toLowerCase());
    registroJugador.append('seg_ap_jug', this.formularioRegistroJugador.value.segundoApellido.toLowerCase());
    registroJugador.append('correo_jug', this.formularioRegistroJugador.value.correoElectronico);
    registroJugador.append('num_iden_jug', this.formularioRegistroJugador.value.numeroIdentidad);
    //registroJugador.append('equipo_jug', this.formularioRegistroJugador.value.equipo);
    registroJugador.append('nacion_jug', this.formularioRegistroJugador.value.paisJugador);
    registroJugador.append('est_civil_jug', this.formularioRegistroJugador.value.estadoCivil);
    registroJugador.append('fecha_nac_jug', this.formularioRegistroJugador.value.fechaNacimiento);
    registroJugador.append('telf_jug', this.formularioRegistroJugador.value.telefono);
    registroJugador.append('sexo_jug', this.formularioRegistroJugador.value.sexo);
    registroJugador.append('dom_jug', this.formularioRegistroJugador.value.domicilio);
    registroJugador.append('num_equi_jug', this.formularioRegistroJugador.value.numeroJugador);
    registroJugador.append('link_img_jug', this.fileImage);
    console.log("codEqui:", this.formularioRegistroJugador.value.equipo.cod_equi);
    return registroJugador;
  }

  get controls() { return this.formularioRegistroJugador.controls; }

  get categoriaJugador() {
    const fechaNacJug = new Date(this.formularioRegistroJugador.value.fechaNacimiento);
    const tiempo = Math.abs(Date.now() - fechaNacJug.getTime());
    const edadJug = Math.floor((tiempo / (3600 * 24000)) / 365);
    var catJug = 0;
    if (edadJug >= 30 && edadJug <= 70) {
      if (edadJug < 40) {
        catJug = 30;
      } else {
        if (edadJug < 50) {
          catJug = 40;
        } else {
          catJug = (edadJug < 60) ? 50 : 60;
        }
      }
      return catJug;
    } else {
      alert('Fecha de nacimiento no valida');
      return -1;
    }
  }
}

