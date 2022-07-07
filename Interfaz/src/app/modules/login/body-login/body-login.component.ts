import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api-services/auth.service';

@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.css']
})
export class BodyLoginComponent implements OnInit {
  public datosLogin : FormGroup;
  siteKey: string;
  textoContrasenia: boolean;
  delegadoActual: any;

  constructor(private apiService: ApiService, private router: Router, 
    //private cookieService: CookieService,
    private authService: AuthService) {

    this.siteKey='6Lf-yJcgAAAAAHxzd7sG7Y0dEZo_avSBaU7RaG5-';
    this.datosLogin = new FormGroup({
      correoElectronico: new FormControl('',
            [Validators.required,
            Validators.email]),
      password: new FormControl('',
            Validators.required),
      captcha: new FormControl('',
            Validators.required)
    });
   }

  ngOnInit(): void {
  }

  iniciarSesion(){
    var mensajeError;
    var mensajeResponse;
    var signSesion = this.setDatos();

    this.authService.singIn(signSesion).subscribe((res: any = []) => {
      console.log(res);
      this.setToken(res);
      this.router.navigate(['/vista-delegado']);
    });
  }

  setDatos(){
    var datos = {
      email: this.datosLogin.value.correoElectronico,
      password: this.datosLogin.value.password,
    }
    return datos;
  }

  mostrarContrasenia() {
    this.textoContrasenia = !this.textoContrasenia;
  }
  get controls(){ return this.datosLogin.controls}

  setToken(res: any){ 
    sessionStorage.setItem('token', res.token);
    sessionStorage.setItem('delegadoActual', res.data.cod_deleg);
  }
}
