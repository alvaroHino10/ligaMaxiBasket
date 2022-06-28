import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-registro-cp',
  templateUrl: './registro-cp.component.html',
  styleUrls: ['./registro-cp.component.css']
})
export class RegistroCpComponent implements OnInit {
  public formularioRegistroControlP: FormGroup;
  submitted = false;  
  lista: any = [];
  fileImage: any;
  data: any;
  mensajeError: any;

  constructor(public formulario: FormBuilder
    , private apiService: ApiService) {
    this.formularioRegistroControlP = new FormGroup({
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

    numeroIdentidad: new FormControl('',
        [Validators.required,
        Validators.pattern("^[0-9]*$"),//'^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{4})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$'),
        Validators.minLength(5),
        Validators.maxLength(15)]),
  
    fechaNacimiento: new FormControl('',
        Validators.required),

    telefono: new FormControl('',
        [Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(5),
        Validators.maxLength(15)]),
    rol: new FormControl('',
        Validators.required),

    linkImgJug: new FormControl('',
        Validators.required)
    });
  }

  ngOnInit() {
    this.getControlPartido();
  }

  registrarControl() {
    this.submitted = true;
    if (this.formularioRegistroControlP.invalid) {
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      return;
    } else {
      this.postServicio();
    }    
  }

  postServicio() {
    var registroCP = this.setRegistro();    
    this.apiService.postAndImageNotErrors('control-partido', registroCP).subscribe(res => {
      this.data = res;
      console.log(this.data);
      alert(this.data['mensaje']);
      //this.limpiarFormulario();
    });/*,(error) => {
      this.mensajeError = error;
      console.log(this.mensajeError.error['mensaje']);
    });*/    
  }

  getControlPartido(){
    this.apiService.getAll("control-partido");
    console.log(this.apiService.getAll("control-partido").subscribe( res => {
      var lista = res;
      console.log(lista);
    }));
  }

  subirImagen(event: any) {
    if (event.target.files.length > 0) {
      this.fileImage = event.target.files[0];
      this.formularioRegistroControlP.value.linkImgComprobante = this.fileImage;
    }
  }
  
  setRegistro(){
    var registroCP = new FormData();
    registroCP.append('nombre_contr_part',    this.formularioRegistroControlP.value.nombre.toLowerCase());
    registroCP.append('prim_ap_contr_part',   this.formularioRegistroControlP.value.primerApellido.toLowerCase());
    registroCP.append('seg_ap_contr_part',    this.formularioRegistroControlP.value.segundoApellido.toLowerCase());
    registroCP.append('num_iden_contr_part',  this.formularioRegistroControlP.value.numeroIdentidad);
    registroCP.append('telf_contr_part',      this.formularioRegistroControlP.value.telefono);
    registroCP.append('fecha_nac_contr_part', this.formularioRegistroControlP.value.fechaNacimiento);
    registroCP.append('link_img_contr_part',  this.fileImage);
    registroCP.append('rol_contr_part',       this.formularioRegistroControlP.value.rol);
    return registroCP;
  }

  limpiarFormulario(){
    this.formularioRegistroControlP.reset();
    this.submitted = false;
  }

  get controls() { return this.formularioRegistroControlP.controls; }
}

