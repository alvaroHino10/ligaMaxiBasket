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
  roles = ['Arbitro', 'Fiscal', 'Mesa'];
  lista: any = [];
  fileImage: any;
  data: any;

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
        Validators.pattern("^[0-9]*$"),//'^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{4})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$'),
        Validators.minLength(5),
        Validators.maxLength(15)]),
      rol: new FormControl('',
        Validators.required),

      linkImgJug: new FormControl('',
        Validators.required)
    });
  }
  ngOnInit(): void {
  }

  get controls() { return this.formularioRegistroControlP.controls; }


  registrarControl() {
    this.submitted = true;
    if (this.formularioRegistroControlP.invalid) {
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      console.log(this.formularioRegistroControlP.controls);
      return;
    } else {
      this.postServicio();
    }
    alert(this.formularioRegistroControlP.value.rol.concat('registrado correctamente'));
  }


  postServicio() {
    var registroCP = new FormData();
    registroCP.append('cod_equi', "2");
    registroCP.append('nombre_jug',    this.formularioRegistroControlP.value.nombre);
    registroCP.append('prim_ap_jug',   this.formularioRegistroControlP.value.primerApellido);
    registroCP.append('seg_ap_jug',    this.formularioRegistroControlP.value.segundoApellido);
    registroCP.append('correo_jug',    this.formularioRegistroControlP.value.correoElectronico);
    registroCP.append('num_iden_jug',  this.formularioRegistroControlP.value.numeroIdentidad);
    registroCP.append('fecha_nac_jug', this.formularioRegistroControlP.value.fechaNacimiento);
    registroCP.append('telf_jug',      this.formularioRegistroControlP.value.telefono);
    registroCP.append('rol',      this.formularioRegistroControlP.value.rol);
    registroCP.append('link_img_jug',  this.fileImage);
    this.apiService.postAndImage('ControlPartido', registroCP).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
    this.getServicio();
  }


  getServicio() {
    const registro = this.formularioRegistroControlP.value;

    this.apiService.getAll('controlpartido').subscribe((data: any) => {
      this.lista = data;
    })
    console.log(this.lista);
  }

  subirImagen(event: any) {
    if (event.target.files.length > 0) {
      this.fileImage = event.target.files[0];
      this.formularioRegistroControlP.value.linkImgComprobante = this.fileImage;
    }
  }
}

