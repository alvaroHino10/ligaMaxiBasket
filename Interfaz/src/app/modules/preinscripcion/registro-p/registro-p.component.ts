import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.css']
})
export class RegistroPComponent implements OnInit {
  public formularioRegistroPreinscrip: FormGroup;
  public submitted = false;
  fileImage: any;
  categoria = [];
  public listaCategoria: any = ["+30", "+40", "+50", "+60"];
  listaResponse: any = [];
  mensajeError: any;
  dataPost: any;
  mensajeResponse: any;
  response: any;

  constructor(public formulario: FormBuilder, private apiService: ApiService) {
    this.formularioRegistroPreinscrip = new FormGroup({
      nombreDelegado: new FormControl('',
                    [Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(80),
                    Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),
      apellidoDelegado: new FormControl('',
                    [Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(80),
                    Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      //numeroIdentificacion: new FormControl ('', 
      //              [Validators.required, 
      //                Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      telefono: new FormControl('',
                    [Validators.required,
                    Validators.pattern("^[0-9]*$"),
                    Validators.minLength(5),
                    Validators.maxLength(15)]),
      correoElectronico: new FormControl('',
                    [Validators.required,
                    Validators.email]),

      nombreDelEquipo: new FormControl('',
                    [Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(80),
                    Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      categoria: new FormControl('',
                    Validators.required),

      codigoDeTransaccion: new FormControl('',
                    [Validators.required,
                    Validators.pattern("^[0-9]*$"),
                    Validators.minLength(7),
                    Validators.maxLength(20)]),
      linkImgComprobante: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }
  
  guardarPreinscripcion(): void {
    this.submitted = true;
    if (this.formularioRegistroPreinscrip.invalid) {
      this.formularioRegistroPreinscrip.controls;
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      return;
    } else {
      this.postServicio();
    }
  }
  postServicio() {
    var cod = this.postPreinscripcion();
    const delegadoDatos = {cod_preinscrip: cod,
                          nombre_deleg:   this.formularioRegistroPreinscrip.value.nombreDelegado,
                          ap_deleg:       this.formularioRegistroPreinscrip.value.apellidoDelegado,
                          correo_deleg:   this.formularioRegistroPreinscrip.value.correoElectronico,
                          telf_deleg:     this.formularioRegistroPreinscrip.value.telefono
    }

    this.apiService.post('delegado', delegadoDatos).subscribe((data:any) => {
    this.dataPost = data;
      console.log(this.dataPost);
    });
    /*,(error) => {
      this.mensajeError = error;
      console.log(this.mensajeError);
      console.log(this.mensajeError.error['mensaje']);
    });*/
  }
  
  postPreinscripcion() {
    var cod = 0;
    var formDataPreins = new FormData();
    formDataPreins.append('num_transfer_preinscrip', this.formularioRegistroPreinscrip.value.codigoDeTransaccion);
    formDataPreins.append('costo_preinscrip', '200');
    formDataPreins.append("fecha_preinscrip", "2022-05-05");
    formDataPreins.append('link_img_comprob', this.fileImage, this.fileImage.name);

    this.apiService.postAndImageNE('preinscripcion', formDataPreins).subscribe(res => {
      this.response = res;
      console.log("preinscripcion:",this.response['data']);
      cod = (this.response['data'])['cod_preinscrip'];
      this.mensajeResponse = this.response['mensaje'];
      alert(this.mensajeResponse);
    });
    /*,(error) => {
      this.mensajeError = error;
      console.log(this.mensajeError.error['mensaje']);
    });*/
    return cod;
  }

  getServicio(nombre : string) {
    this.apiService.getAll(nombre).subscribe((data: any) => {
      this.listaResponse = data;
    });
  }

  subirImagen(event: any) {
    if (event.target.files.length > 0) {
      this.fileImage = event.target.files[0];
      this.formularioRegistroPreinscrip.value.linkImgComprobante = this.fileImage;
    }
  }

  get controls() { return this.formularioRegistroPreinscrip.controls;}
}
