import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api-services/api-services';
import { AuthService } from 'src/app/api-services/auth.service';

@Component({
  selector: 'app-registro-form-delegado',
  templateUrl: './registro-form-delegado.component.html',
  styleUrls: ['./registro-form-delegado.component.css']
})
export class RegistroFormDelegadoComponent implements OnInit {
  public formularioDelegado: FormGroup;
  submitted = false;
  dataPost: any;
  dataSign: any;
  listaResponse: any;
  fileImage: any;
  textoContrasenia: boolean;
  textoContraseniaConf: boolean;
  token: any;
  codigoDelegadoActual :any;
  
  constructor(public formulario: FormBuilder, 
    private apiService: ApiService, 
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private route: ActivatedRoute
    ) {
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
      passwordConf:     new FormControl('',
                    Validators.required),                  
      imgDelegado: new FormControl('', Validators.required)
      });
  }

  ngOnInit(): void {
  }

  guardarDelegado(){
    this.submitted = true;
    if(!this.confirmacion){
      alert('Porfavor revise los datos ingresados');
      return;
    }else
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
    var datos = this.setRegistro();
    this.apiService.postAndImageNotErrors('delegado', datos).subscribe(res => {
      this.dataPost = res;
      console.log(this.dataPost);
      this.postDatosSign();      
    });
  }
  
  setRegistro() {
    var delegadoDatos = new FormData
    delegadoDatos.append('nombre_deleg', this.formularioDelegado.value.nombreDelegado.toLowerCase());
    delegadoDatos.append('ap_deleg', this.formularioDelegado.value.apellidoDelegado.toLowerCase());
    delegadoDatos.append('num_iden_deleg', this.formularioDelegado.value.numeroIdentificacion);
    delegadoDatos.append('fecha_nac_deleg', this.formularioDelegado.value.fechaNacimiento);
    delegadoDatos.append('sexo_deleg', this.formularioDelegado.value.sexo);
    delegadoDatos.append('telf_deleg', this.formularioDelegado.value.telefono);
    delegadoDatos.append('link_img_deleg', this.fileImage);
    delegadoDatos.append('correo_deleg', this.formularioDelegado.value.correoElectronico);
    return delegadoDatos;
  }

  postDatosSign(){
    this.codigoDelegadoActual =  this.dataPost['data']['cod_deleg'];
    const delegadoSignUp = {cod_deleg: this.codigoDelegadoActual,
      email:                    this.formularioDelegado.value.correoElectronico,
      password:                 this.formularioDelegado.value.password,
      password_confirmation:    this.formularioDelegado.value.passwordConf
    } 
    var mensajeResponse;
    this.authService.signUp(delegadoSignUp).subscribe( signDatos => {
      this.dataSign = signDatos;
      console.log(this.dataSign);      
      this.limpiarFormulario();
      mensajeResponse = this.dataPost['mensaje'];
      alert(mensajeResponse);
      this.router.navigate(['/login'],{state: {codDelegadoActual:this.codigoDelegadoActual}});
    });
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

  limpiarFormulario(){
    this.formularioDelegado.reset();
    this.submitted = false;
  }
  
  mostrarContrasenia(val: boolean) {
    val? this.textoContrasenia = !this.textoContrasenia:
     this.textoContraseniaConf = !this.textoContraseniaConf;
  }

  get controls() {return this.formularioDelegado.controls;}

  get confirmacion(){
    var pass = this.formularioDelegado.value.password;
    var passConf = this.formularioDelegado.value.passwordConf;
    if(pass.length == passConf.length){
      if(pass == passConf){
        return true;
      }
    }
    return false;   
  }
}
