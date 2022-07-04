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
  torneoActual : any;
  codTorneo: any;

  constructor(public formulario: FormBuilder,
    private apiService:ApiService) {
    
    this.formularioRegistroEquipo = new FormGroup({

      nombreDelEquipo: new FormControl ('',
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
    this.getCodTorneo();
  }

  registrarEquipo(){
    this.submitted = true;
  if (this.formularioRegistroEquipo.invalid) {
    alert('Por favor ingrese datos validos, correspondientes a todos los campos');
    return;
    }else{
      this.postServicio();
      return;
    }  
  }

  getCodTorneo(){
    this.apiService.getAll('torneo').subscribe((data:any) => {
      this.torneoActual = data['data'];
      this.codTorneo = this.torneoActual.length;      
      this.getServicio();
    });    
  }

  getServicio(){
    this.apiService.getAll('torneo/' + this.codTorneo ).subscribe((data:any) => {
      this.listaEquipos = data.data['equipos'];    
      console.log(this.listaEquipos);  
    });
  }
  
  postServicio() {
    var mensajeResponse;
    var registroEquipo = this.setRegistro();
    this.apiService.post('equipo_data', registroEquipo).subscribe((data: any) => {
      this.dataPost = data;
      console.log(this.dataPost);
      mensajeResponse = this.dataPost['mensaje'];
      alert(mensajeResponse);
      this.limpiarFormulario();
    }, (error) => {
      this.mensajeError = error;
      console.log(this.mensajeError.error['mensaje']);
      mensajeResponse = this.mensajeError.error['mensaje'];
      alert(mensajeResponse);
      this.limpiarFormulario();
    });
  }

  setRegistro(){
    /*const registroEquipo = {cod_torn:         this.codTorneo,
                            cod_preinscrip:   this.formularioRegistroEquipo.value.nombreDelEquipo.cod_preinscrip,
                            nombre_equi:      this.formularioRegistroEquipo.value.nombreDelEquipo.nombre_equi,
                            categ_equi:       this.formularioRegistroEquipo.value.nombreDelEquipo.categ_equi,
                            pais_equi:        this.formularioRegistroEquipo.value.paisEquipo,
                            discip_equi:      "Basquet", 
                            color_equi:       this.formularioRegistroEquipo.value.colorEquipo
    }*/
    const registroEquipo = {
      cod_equi:         this.formularioRegistroEquipo.value.nombreDelEquipo.cod_equi,
      pais_equi:        this.formularioRegistroEquipo.value.paisEquipo,
      discip_equi:      "Basquet", 
      color_equi:       this.formularioRegistroEquipo.value.colorEquipo
    }      
    return registroEquipo;
  }

  limpiarFormulario(){
    this.formularioRegistroEquipo.reset();
    this.submitted = false;
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
