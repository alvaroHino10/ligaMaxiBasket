import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-registro-form-delegado',
  templateUrl: './registro-form-delegado.component.html',
  styleUrls: ['./registro-form-delegado.component.css']
})
export class RegistroFormDelegadoComponent implements OnInit {
  
  public formularioDelegado: FormGroup;
  submitted = false;
  dataPost: any;
  listaResponse: any;
  fileImage: any;
  textoContrasenia: boolean;
  constructor(public formulario: FormBuilder, private apiService: ApiService, private router: Router ) {
    this.formularioDelegado = new FormGroup({
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
      numeroIdentificacion: new FormControl ('', 
                    [Validators.required, 
                      Validators.pattern("^[0-9]*$"),
                      Validators.minLength(5),
                      Validators.maxLength(15)]),
      fechaNacimiento: new FormControl('',
                     Validators.required),               
      telefono: new FormControl('',
                    [Validators.required,
                    Validators.pattern("^[0-9]*$"),
                    Validators.minLength(5),
                    Validators.maxLength(15)]),
      sexo:         new FormControl('',
                    Validators.required),
      correoElectronico: new FormControl('',
                    [Validators.required,
                    Validators.email]),              
      password:     new FormControl('',
                    Validators.required),
      imgDelegado: new FormControl('', Validators.required)
      });
  }
 
  mostrarContrasenia() {
    this.textoContrasenia = !this.textoContrasenia;
  }

  ngOnInit(): void {
  }

  guardarDelegado(){
    this.submitted = true;
    if (this.formularioDelegado.invalid) {
      this.formularioDelegado.controls;
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      this.getServicio('delegado');
      return;
    } else {
      this.postServicio();
      
    }
  }

  postServicio() {
    /*const delegadoDatos = {cod_preinscrip:35,
                          nombre_deleg:   this.formularioDelegado.value.nombreDelegado,
                          ap_deleg:       this.formularioDelegado.value.apellidoDelegado,
                          num_iden_deleg: this.formularioDelegado.value.numeroIdentificacion,
                          correo_deleg:   this.formularioDelegado.value.correoElectronico,
                          telf_deleg:     this.formularioDelegado.value.telefono,
                          fecha_nac_deleg:this.formularioDelegado.value.fechaNacimiento,
                          sexo_deleg:     this.formularioDelegado.value.sexoDelegado,
                          link_img_deleg: "imagenDelegado.jpg"
    }
    this.apiService.postAndImage('delegado', delegadoDatos).subscribe((data:any) => {
    this.dataPost = data;
    console.log(this.dataPost);
    this.router.navigate(['/login']); 
    });*/
    /*,(error) => {
    this.mensajeError = error;
    console.log(this.mensajeError);
    console.log(this.mensajeError.error['mensaje']);
    });*/

    //POR PROBAR (Post con imagen de delegado):
    var mensajeResponse;
    var mensajeError;
    var datos = this.setRegistro();
    this.apiService.postAndImageNotErrors('delegado', datos).subscribe(res => {
      this.dataPost = res;
      console.log(this.dataPost);
      mensajeResponse = this.dataPost['mensaje'];
      alert(mensajeResponse);
    });/*, (error) => {
      mensajeError = error;
      console.log(mensajeError.error['mensaje']);
      mensajeResponse = mensajeError.error['mensaje'];
      alert(mensajeResponse);
    });*/
  }

  setRegistro() {
    var delegadoDatos = new FormData
    delegadoDatos.append('nombre_deleg', this.formularioDelegado.value.nombreDelegado);
    delegadoDatos.append('ap_deleg', this.formularioDelegado.value.apellidoDelegado);
    delegadoDatos.append('num_iden_deleg', this.formularioDelegado.value.numeroIdentificacion);
    delegadoDatos.append('fecha_nac_deleg', this.formularioDelegado.value.fechaNacimiento);
    delegadoDatos.append('sexo_deleg', this.formularioDelegado.value.sexo);
    delegadoDatos.append('link_img_jdeleg', this.fileImage);
    delegadoDatos.append('correo_deleg', this.formularioDelegado.value.correoElectronico);
    return delegadoDatos;
  }

  getServicio(nombre : string) {
    this.apiService.getAll(nombre).subscribe((data: any) => {
      this.listaResponse = data;
      console.log(this.listaResponse);
    });
  }

  subirImagen(event: any) {
    if (event.target.files.length > 0) {
      this.fileImage = event.target.files[0];
      this.formularioDelegado.value.imgDelegado = this.fileImage;
    }
  }
  
  get controls() {return this.formularioDelegado.controls}

}
