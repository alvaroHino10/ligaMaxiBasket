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
    this.postPreinscripcion();
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
