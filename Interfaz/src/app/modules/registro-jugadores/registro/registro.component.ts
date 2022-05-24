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
  public listaEstadoCivil: any = ["Soltero", "Casado", "Divorciado", "Viudo"];
  public submitted = false;
  categoria = [];
  lista: any = [];
  fileImage: any;
  data: any;

  constructor(public formulario: FormBuilder
    , private apiService: ApiService) {
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
        Validators.pattern("^[0-9]*$"),//'^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{4})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$'),
        Validators.minLength(5),
        Validators.maxLength(15)]),
      nacionJugador: new FormControl('',
        [Validators.required,
        Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),
      estadoCivil: new FormControl('',
        Validators.required),
      fechaNacimiento: new FormControl('',
        Validators.required),

      telefono: new FormControl('',
        [Validators.required,
        Validators.pattern("^[0-9]*$"),//'^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{4})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$'),
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
  }

  get controls() { return this.formularioRegistroJugador.controls; }


  registrarJugador() {
    this.submitted = true;
    if (this.formularioRegistroJugador.invalid) {
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      console.log(this.formularioRegistroJugador.controls);
      return;
    } else {
      this.postServicio();
    }
    alert('Jugador registrado correctamente');
  }


  postServicio() {
    var registroJugador = new FormData();
    registroJugador.append('cod_equi', "2");
    registroJugador.append('nombre_jug',    this.formularioRegistroJugador.value.nombre);
    registroJugador.append('prim_ap_jug',   this.formularioRegistroJugador.value.primerApellido);
    registroJugador.append('seg_ap_jug',    this.formularioRegistroJugador.value.segundoApellido);
    registroJugador.append('correo_jug',    this.formularioRegistroJugador.value.correoElectronico);
    registroJugador.append('num_iden_jug',  this.formularioRegistroJugador.value.numeroIdentidad);
    registroJugador.append('nacion_jug',    this.formularioRegistroJugador.value.paisJugador);
    registroJugador.append('est_civil_jug', this.formularioRegistroJugador.value.estadoCivil);
    registroJugador.append('fecha_nac_jug', this.formularioRegistroJugador.value.fechaNacimiento);
    registroJugador.append('telf_jug',      this.formularioRegistroJugador.value.telefono);
    registroJugador.append('sexo_jug',      this.formularioRegistroJugador.value.sexo);
    registroJugador.append('dom_jug',       this.formularioRegistroJugador.value.domicilio);
    registroJugador.append('num_equi_jug',  this.formularioRegistroJugador.value.numeroJugador);
    registroJugador.append('link_img_jug',  this.fileImage);
    this.apiService.postAndImage('jugador', registroJugador).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
    this.getServicio();
  }


  getServicio() {
    const registro = this.formularioRegistroJugador.value;

    this.apiService.getAll('jugadores').subscribe((data: any) => {
      this.lista = data;
    })
    console.log(this.lista);
  }

  subirImagen(event: any) {
    if (event.target.files.length > 0) {
      this.fileImage = event.target.files[0];
      this.formularioRegistroJugador.value.linkImgComprobante = this.fileImage;
    }
  }
}