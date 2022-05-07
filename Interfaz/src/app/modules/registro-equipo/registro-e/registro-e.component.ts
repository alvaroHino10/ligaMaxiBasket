import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-registro-e',
  templateUrl: './registro-e.component.html',
  styleUrls: ['./registro-e.component.css']
})
export class RegistroEComponent implements OnInit {
  public formularioRegistroEquipo: FormGroup;
  public listaCategoriaEquipo: any = [ "+30", "+40", "+50", "+60"];
  submitted = false;
  categoria = [];

  constructor(public formulario: FormBuilder,
    private apiService:ApiService) {
    
    this.formularioRegistroEquipo = new FormGroup({

      nombreDelEquipo: new FormControl ('',
                    [Validators.required, 
                     Validators.minLength(1),
                     Validators.maxLength(80),
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      categoria: new FormControl ('', 
                     Validators.required),

      paisEquipo: new FormControl ('', 
                    [Validators.required, 
                      Validators.minLength(1),
                      Validators.maxLength(80),
                      Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      colorEquipo: new FormControl ('', 
                    [Validators.required, 
                      Validators.minLength(1),
                      Validators.maxLength(80),
                      Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),
    });

  }

  ngOnInit(): void {
  }

  registrarEquipo(){
    this.submitted = true;
  if (this.formularioRegistroEquipo.invalid) {
    console.log('NO VALIDO');
    alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      return;
    }else{
      console.log(this.formularioRegistroEquipo.value);
      this.getServicio();
    }  
    alert('Equipo registrado correctamente');
  }


  getServicio(){
    const registroEquipo = this.formularioRegistroEquipo.value;
    //this.apiService.post('registroEquipo', registroEquipo).subscribe();

    //this.apiService.getAll('registroEquipo', registroEquipo).subscribe();
  }

  get controls() { return this.formularioRegistroEquipo.controls; }

}
