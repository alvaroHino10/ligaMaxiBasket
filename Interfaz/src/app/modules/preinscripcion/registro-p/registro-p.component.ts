import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.css']
})
export class RegistroPComponent implements OnInit {
  public formularioRegistroP: FormGroup;
  public listaCategoria: any = [ "+30", "+40", "+50", "+60"];
  public submited = false;
  categoria = [];
  listaPreinscripcion:any = [];

  constructor(public formulario: FormBuilder
     ,private apiService:ApiService) {
    //) {
    this.formularioRegistroP = new FormGroup({
      nombreCompleto: new FormControl ('',
                    [Validators.required, 
                     Validators.minLength(5),
                     Validators.maxLength(80),
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      nombreDelEquipo: new FormControl ('',
                    [Validators.required, 
                     Validators.minLength(1),
                     Validators.maxLength(80),
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      categoria: new FormControl ('', 
                     Validators.required),

      telefono: new FormControl ('', 
                    [Validators.required, 
                     Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{2})(?: *x(\\d+))?\\s*$')]),

      correoElectronico: new FormControl ('', 
                    [Validators.required, 
                     Validators.email]),

      codigoDeTransaccion: new FormControl ('', 
                    [Validators.required, 
                     Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$')]),
    });

  }

  ngOnInit() {
    
  }
  get controls() { return this.formularioRegistroP.controls; }
  

  guardarPreinscripcion(): void {  
    this.submited = true; 
    if (this.formularioRegistroP.invalid) {
      this.formularioRegistroP.controls;
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      return;
    }else{
      console.log(this.formularioRegistroP.value);
      this.getServicio();
    }  
    alert('Preinscripcion registrada correctamente');
  }
  putServicio() {
    
  }


  getServicio(){
    const registroPreinscripcion = this.formularioRegistroP.value;
    this.apiService.getPreinscripcion().subscribe((data:any) => {
      this.listaPreinscripcion = data;
    })
    //this.apiService.post('preinscripcion', registroPreinscripcion).subscribe();
    //this.apiService.getAll('preinscripcion').subscribe();
  }


  api(){
    /*let formObj = this.formularioRegistroP.getRawValue();
    formObj.nombreCompleto
    this.apiService.getById("nombreCompleto", this.formularioRegistroP.getRawValue().nombreCompleto);*/
    /*let formObj = this.formularioRegistroP.getRawValue();
      let serializedForm = JSON.stringify(formObj);
      console.log(serializedForm);
      this.apiService.post( "registro", this.formularioRegistroP.value).subscribe();
      this.apiService.getById("nombreCompleto", this.formularioRegistroP.getRawValue().nombreCompleto);*/
    /*this.http.post("www.domain.com/api", serializedForm)
        .subscribe(
            data => console.log("success!", data),
            error => console.error("couldn't post because", error)
        );*/
  }


}
