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
  public submitted = false;
  categoria = [];
  lista : any = [];
  mensajeError: any;
  dataPost: any;

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
                    Validators.required),

      colorEquipo: new FormControl ('', 
                    [Validators.required, 
                      Validators.minLength(3),
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
    this.getServicio();  
    return;
    }else{
      this.postServicio();
      return;
    }  
  }
  postServicio() {
  const registroEquipo = {cod_torn: 1,
                            cod_preinscrip: 1,
                            nombre_equi: this.formularioRegistroEquipo.value.nombreDelEquipo,
                            categ_equi: this.formularioRegistroEquipo.value.categoria,
                            pais_equi:this.formularioRegistroEquipo.value.paisEquipo,
                            discip_equi: "Basket", 
                            color_equi: this.formularioRegistroEquipo.value.colorEquipo
                          }                          
  this.apiService.post('equipo',registroEquipo).subscribe((data:any) => {
    this.dataPost = data;
      console.log(this.dataPost);
    },(error) => {
      this.mensajeError = error;
      console.log(this.mensajeError.error['mensaje']);
    });
  alert('Equipo registrado correctamente');
  }


  getServicio(){
    const registro = this.formularioRegistroEquipo.value;
    this.apiService.getAll('equipo').subscribe((data:any) => {
      this.lista = data;
    })
    console.log(this.lista);
  }

  get controls() { return this.formularioRegistroEquipo.controls; }

}
