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
  listaEquipos : any ;
  mensajeError: any;
  dataPost: any;

  constructor(public formulario: FormBuilder,
    private apiService:ApiService) {
    
    this.formularioRegistroEquipo = new FormGroup({

      nombreDelEquipo: new FormControl ('',
                    Validators.required),

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
    //this.getServicio(); 
    this.datosFake();
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
  var mensajeResponse;
  var registroEquipo = this.setRegistro();  

  this.apiService.post('equipo',registroEquipo).subscribe((data:any) => {
      this.dataPost = data;
      console.log(this.dataPost);
      mensajeResponse = this.dataPost['mensaje'];
      alert(mensajeResponse);

    },(error) => {      
      this.mensajeError = error;
      console.log(this.mensajeError.error['mensaje']);
      mensajeResponse = this.mensajeError.error['mensaje'];
      alert(mensajeResponse);
    });
  }

  getServicio(){
    this.apiService.getAll('equipo').subscribe((data:any) => {
      this.listaEquipos = data;
      console.log(this.listaEquipos);
    })
  }
  
  setRegistro(){
    const registroEquipo = {cod_torn:1,
                            cod_preinscrip: 1,
                            nombre_equi:      this.formularioRegistroEquipo.value.nombreDelEquipo,
                            categ_equi:       this.formularioRegistroEquipo.value.categoria,
                            pais_equi:        this.formularioRegistroEquipo.value.paisEquipo,
                            discip_equi:      "Basket", 
                            color_equi:       this.formularioRegistroEquipo.value.colorEquipo
    }        
    return registroEquipo;
  }
  get controls() { return this.formularioRegistroEquipo.controls; }
  get equipoSeleccionado(){ return this.formularioRegistroEquipo.value.nombreDelEquipo}

  //datos fake
  setRegistroF(nombre: any, categoria: any) {
    const registroJugador = {
      nombre_equi: nombre,
      categ_equi: categoria,
    };
    return registroJugador;
  }

  datosFake() {
    this.listaEquipos = [this.setRegistroF("1paul", "+30"),
    this.setRegistroF("2paul", "+40"),
    this.setRegistroF("3paul", "+50"),
    this.setRegistroF("4paul", "+30"),
    this.setRegistroF("2paul", "+40"),
    this.setRegistroF("3paul", "+50"),
    this.setRegistroF("4paul", "+30"),
    ];
  }
}
