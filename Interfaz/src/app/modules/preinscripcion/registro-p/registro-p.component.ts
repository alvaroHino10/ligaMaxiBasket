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
  files:any;
  categoria=[];
  public listaCategoria: any = [ "+30", "+40", "+50", "+60"];
  listaPreinscripcion:any = [];
  listaDelegados:any =[];

  constructor(public formulario: FormBuilder
     ,private apiService:ApiService) {
    //) {
    this.formularioRegistroPreinscrip = new FormGroup({
      nombreDelegado: new FormControl ('',
                    [Validators.required, 
                     Validators.minLength(3),
                     Validators.maxLength(80),
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),
      apellidoDelegado: new FormControl ('',
                    [Validators.required, 
                     Validators.minLength(3),
                     Validators.maxLength(80),
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      /*numeroIdentificacion: new FormControl ('', 
                    [Validators.required, 
                      Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{2})(?: *x(\\d+))?\\s*$')]),*/

      telefono: new FormControl ('', 
                    [Validators.required,
                     Validators.min(1000000),
                     Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{2})(?: *x(\\d+))?\\s*$')]),

      correoElectronico: new FormControl ('', 
                    [Validators.required, 
                     Validators.email]),

      nombreDelEquipo: new FormControl ('',
                    [Validators.required, 
                     Validators.minLength(1),
                     Validators.maxLength(80),
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      categoria: new FormControl ('', 
                     Validators.required),

      codigoDeTransaccion: new FormControl ('', 
                    [Validators.required, 
                     Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{2})[-. )]*(\\d{2})[-. ]*(\\d{2})(?: *x(\\d+))?\\s*$')]),
      linkImgComprobante: new FormControl ('', 
                     Validators.required),
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
      //this.getServicio();
      return;
    }else{
      //console.log(this.formularioRegistroPreinscrip.value);
      this.postServicio();
    }  
    alert('Preinscripcion registrada correctamente');
  }
  postServicio() {
    const cod = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    const registroPreinscripcion = {cod_preinscrip : cod,
                                  num_transfer_preinscrip:this.formularioRegistroPreinscrip.value.codigoDeTransaccion,
                                  costo_preinscrip: 200, //costoPreins
                                  fecha_preinscrip: "2022-05-13", //fecha
                                  link_img_comprob: "http://localhost.img" //linkImg
                                }

    const codDel = Math.floor((Math.random() * (100 - 1 + 1)) + 1);                     
    const delegadoDatos = { cod_deleg: codDel, 
                          cod_preinscrip: cod,
                          nombre_deleg: this.formularioRegistroPreinscrip.value.nombreDelegado, 
                          ap_deleg: this.formularioRegistroPreinscrip.value.apellidoDelegado,
                          correo_deleg: this.formularioRegistroPreinscrip.value.correoElectronico,
                          telf_deleg: this.formularioRegistroPreinscrip.value.telefono
                        }
    console.log(registroPreinscripcion);
    console.log(delegadoDatos);

    this.apiService.postPreinscripcion(registroPreinscripcion).subscribe();
    this.apiService.postDelegado(delegadoDatos).subscribe();
    this.getServicio();
  }


  getServicio(){
    //const registroPreinscripcion = this.formularioRegistroPreinscrip.value;
    this.apiService.getPreinscripcion().subscribe((data:any) => {
      this.listaPreinscripcion = data;
    })
    console.log(this.listaPreinscripcion);
    
    this.apiService.getDelegados().subscribe((data:any) => {
      this.listaDelegados = data;
    })
    console.log(this.listaDelegados);
  }

  subirImagen(event: Event){
    const target = event.target as HTMLInputElement;
    const fileList = target.files as FileList;
    this.files = fileList.item(0);
    console.log(this.files);
  }
}
