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
  data: any;
  categoria = [];
  public listaCategoria: any = ["+30", "+40", "+50", "+60"];
  listaPreinscripcion: any = [];
  listaDelegados: any = [];

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
  get controls() { return this.formularioRegistroPreinscrip.controls; }


  guardarPreinscripcion(): void {
    this.submitted = true;
    if (this.formularioRegistroPreinscrip.invalid) {
      this.formularioRegistroPreinscrip.controls;
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      return;
    } else {
      this.postServicio();
    }
    alert('Preinscripcion registrada correctamente');
  }
  postServicio() {
    var myFormData = new FormData();

    myFormData.append('num_transfer_preinscrip', this.formularioRegistroPreinscrip.value.codigoDeTransaccion);
    myFormData.append('costo_preinscrip', '200');
    myFormData.append("fecha_preinscrip", "2022-05-05");
    myFormData.append('link_img_comprob', this.fileImage, this.fileImage.name);

    const delegadoDatos = {cod_preinscrip: 10,
                          nombre_deleg:   this.formularioRegistroPreinscrip.value.nombreDelegado,
                          ap_deleg:       this.formularioRegistroPreinscrip.value.apellidoDelegado,
                          correo_deleg:   this.formularioRegistroPreinscrip.value.correoElectronico,
                          telf_deleg:     this.formularioRegistroPreinscrip.value.telefono
    }

    this.apiService.postAndImage('preinscripcion', myFormData).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
    this.apiService.post('delegado', delegadoDatos).subscribe();
    this.getServicio();
  }

  getServicio() {
    this.apiService.getPreinscripcion().subscribe((data: any) => {
      this.listaPreinscripcion = data;
    })
    console.log(this.listaPreinscripcion);

    this.apiService.getDelegados().subscribe((data: any) => {
      this.listaDelegados = data;
    })
    console.log(this.listaDelegados);
  }

  subirImagen(event: any) {
    if (event.target.files.length > 0) {
      this.fileImage = event.target.files[0];
      this.formularioRegistroPreinscrip.value.linkImgComprobante = this.fileImage;
    }
  }
}
