import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.css']
})
export class RegistroPComponent implements OnInit {
  public formularioRegistroP: FormGroup;
  public listaCategoria: any = [ "+30", "+40", "+50", "+60"];
  submitted = false;
  categoria = [];

  constructor(public formulario: FormBuilder) {
    this.formularioRegistroP = new FormGroup({
      nombreCompleto: new FormControl ('',
                    [Validators.required, 
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                     Validators.minLength(5),
                     Validators.maxLength(80)]),

      nombreDelEquipo: new FormControl ('',
                    [Validators.required, 
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                     Validators.minLength(1),
                     Validators.maxLength(80)]),

      categoria: new FormControl ('', 
                     Validators.required),

      telefono: new FormControl ('', 
                    [Validators.required, 
                     Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$')]),

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


  enviarDatos(): void {
    
    
    if (this.formularioRegistroP.invalid) {
      console.log('NO VALIDO');
      return;
    }else{
      console.log(this.formularioRegistroP.value);
    }
    
    alert('Preinscripcion registrada correctamente');
    //console.log(this.formularioRegistroP.value);
  }

  get controls() { return this.formularioRegistroP.controls; }

}
