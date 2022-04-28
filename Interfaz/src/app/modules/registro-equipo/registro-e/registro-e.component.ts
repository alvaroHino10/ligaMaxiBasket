import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-e',
  templateUrl: './registro-e.component.html',
  styleUrls: ['./registro-e.component.css']
})
export class RegistroEComponent implements OnInit {
  public formRegistroEquipo: FormGroup;
  public listaCategoria: any = [ "+30", "+40", "+50", "+60"];
  submitted = false;
  categoria = [];

  constructor(public formulario: FormBuilder) {
    this.formRegistroEquipo = new FormGroup({

      nombreDelEquipo: new FormControl ('',
                    [Validators.required, 
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                     Validators.minLength(1),
                     Validators.maxLength(80)]),

      categoria: new FormControl ('', 
                     Validators.required),

      pais: new FormControl ('', 
                    [Validators.required, 
                      Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                      Validators.minLength(1),
                      Validators.maxLength(80)]),

      colorEquipo: new FormControl ('', 
                    [Validators.required, 
                      Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                      Validators.minLength(1),
                      Validators.maxLength(80)]),

    });

  }

  ngOnInit(): void {
  }

registrarEquipo(){
  if (this.formRegistroEquipo.invalid) {
    console.log('NO VALIDO');
    return;
  }else{
    console.log(this.formRegistroEquipo.value);
  }
  
  alert('Preinscripcion registrada correctamente');
  //console.log(this.formRegistroEquipo.value);
}

get controls() { return this.formRegistroEquipo.controls; }

}
