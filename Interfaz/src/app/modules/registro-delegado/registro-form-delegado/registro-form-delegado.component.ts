import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(public formulario: FormBuilder, private apiService: ApiService) {
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
                      Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      telefono: new FormControl('',
                    [Validators.required,
                    Validators.pattern("^[0-9]*$"),
                    Validators.minLength(5),
                    Validators.maxLength(15)]),
      correoElectronico: new FormControl('',
                    [Validators.required,
                    Validators.email]),
      });
  }

  ngOnInit(): void {
  }

  guardarDelegado(){
    this.submitted = true;
    if (this.formularioDelegado.invalid) {
      this.formularioDelegado.controls;
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      return;
    } else {
      this.postServicio();
    }
  }

  postServicio() {
  //var cod = this.postPreinscripcion();
    const delegadoDatos = {//cod_preinscrip: cod,
                          nombre_deleg:   this.formularioDelegado.value.nombreDelegado,
                          ap_deleg:       this.formularioDelegado.value.apellidoDelegado,
                          correo_deleg:   this.formularioDelegado.value.correoElectronico,
                          telf_deleg:     this.formularioDelegado.value.telefono
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

  getServicio(nombre : string) {
    this.apiService.getAll(nombre).subscribe((data: any) => {
      this.listaResponse = data;
    });
  }
  
  get controls() {return this.formularioDelegado.controls}

}
