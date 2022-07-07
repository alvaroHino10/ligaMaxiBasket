import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api-services/api-services';
import { AuthService } from 'src/app/api-services/auth.service';
import { RegistroDelegadoComponent } from '../../registro-delegado/registro-delegado.component';

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
  codDelegado: any;
  codTorneo : any;

  constructor(public formulario: FormBuilder, 
    private apiService: ApiService, 
    private router: Router,
    private authService: AuthService) {   
    
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
    this.codDelegado = this.authService.getDelegadoID();
    this.codTorneo = this.getCodTorneo();
  }
  
  guardarPreinscripcion(): void {
    this.submitted = true;
    if (this.formularioRegistroPreinscrip.invalid) {
      this.formularioRegistroPreinscrip.controls;
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      this.getServicio('preinscripcion', this.listaResponse);
      return;
    } else {
      this.postServicio();
    }
  }

  postServicio() {
    var cod = 0;
    var formDataPreins = this.setDatos();
    this.apiService.postAndImageNotErrors('preinscripcion', formDataPreins).subscribe(res => {
      this.response = res;
      console.log("preinscripcion:",this.response['data']);
      cod = (this.response['data'])['cod_preinscrip'];
      this.mensajeResponse = this.response['mensaje'];
      this.guardarEquipo(cod);      
    });/*,(error) => {
      this.mensajeError = error;
      console.log(this.mensajeError.error['mensaje']);
      console.log(this.mensajeError.error['message']);
    });
*/
    return cod;
  }

  guardarEquipo(codPreinscrip: any){
    var datosEquipo = {
      cod_torn:       this.codTorneo,
      cod_preinscrip:   codPreinscrip,
      nombre_equi:     this.formularioRegistroPreinscrip.value.nombreDelEquipo,
      categ_equi:      this.formularioRegistroPreinscrip.value.categoria
    }
    this.apiService.postError('equipo', datosEquipo).subscribe((data: any) => {
      this.listaResponse = data;
      alert(this.mensajeResponse);
      this.limpiarFormulario();
      this.router.navigate(['/vista-delegado']);
    });
  }

  getCodTorneo(){
    this.apiService.getAll('torneo').subscribe((data:any) => {
      console.log(data);
      var torneoInf = data['data'];
      this.codTorneo = torneoInf.length;
    });    
  }

  getServicio(nombre : string, valModify: any) {
    this.apiService.getAll(nombre).subscribe((data: any) => {
      valModify = data;
      console.log(valModify);
    });
  }

  subirImagen(event: any) {
    if (event.target.files.length > 0) {
      this.fileImage = event.target.files[0];
      this.formularioRegistroPreinscrip.value.linkImgComprobante = this.fileImage;
    }
  }

  setDatos(){
    var fecha = new Date();
    var fechaActual = fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
    var formDataPreins = new FormData();
    formDataPreins.append('cod_deleg', this.codDelegado);
    formDataPreins.append('num_transfer_preinscrip', this.formularioRegistroPreinscrip.value.codigoDeTransaccion);
    formDataPreins.append('costo_preinscrip', '200');
    formDataPreins.append("fecha_preinscrip", fechaActual);
    formDataPreins.append('link_img_comprob', this.fileImage, this.fileImage.name);
    return formDataPreins;
  }

  limpiarFormulario(){
    this.formularioRegistroPreinscrip.reset();
    this.submitted = false;
  }

  get controls() { return this.formularioRegistroPreinscrip.controls;}
}
