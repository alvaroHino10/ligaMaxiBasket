import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api-services/api-services';
import { SendDataService } from 'src/app/api-services/send-data.service';

@Component({
  selector: 'app-puntaje-partido',
  templateUrl: './puntaje-partido.component.html',
  styleUrls: ['./puntaje-partido.component.css']
})
export class PuntajePartidoComponent implements OnInit {
  public partido : any;
  equipo_A : any;
  equipo_B : any;
  puntaje_A = 0;
  puntaje_B = 0;
  jugadoresA = [];
  jugadoresB = [];


  jugadorA ;
  

  anotacionA = false;
  anotacionB = false;
  periodoActual = 0;

  formA :FormGroup;
  formB :FormGroup;


  constructor(private dataService: SendDataService, 
    private apiService: ApiService,
    private router: Router) { 
      this.formA = new FormGroup({
        jugadorA: new FormControl('',
        Validators.required)
      });
      this.formB = new FormGroup({
        jugadorB: new FormControl('',
        Validators.required)
      });      
  }

  ngOnInit(): void {
    this.partido = this.dataService.getPartido(); 
    if(this.partido == null){
      this.router.navigate(['/fixture']);
    }else{
      this.getEquipos();
    }
  }

  getEquipos(){
    this.equipo_A = this.partido.equipos['0'];
    this.equipo_B = this.partido.equipos['1'];
    console.log(this.equipo_A,this.equipo_B);
    this.apiService.getById('equipo_data',this.equipo_A.cod_equi).subscribe(res =>{
      this.jugadoresA = res.data.jugadores;
      console.log(this.jugadoresA);
    });
    this.apiService.getById('equipo_data',this.equipo_B.cod_equi).subscribe(res =>{
      this.jugadoresB = res.data.jugadores;
    });
  }

  canasta(equipo: any, canasta: any){
    if(equipo == 0){
      this.anotacionA = true;
      if(this.controlsA.jugadorA.valid){
        this.puntaje_A +=canasta;
        this.anotacionA = false;
      }          
    }else{
      this.anotacionB = true;
      if(this.controlsB.jugadorB.valid){
        this.puntaje_B +=canasta;
        this.anotacionB = false;
      }   
    }    
    this.limpiarFormularios();
  }
  limpiarFormularios() {
    this.formA.reset();
    this.formB.reset();
  }

  cambiarPeriodo(value:any){
    this.periodoActual = value;
  }

  finalizarPartido(){
    this.router.navigate(['/fixture']);
    var equipoGanador ;
    if(this.puntaje_A == this.puntaje_B){
      equipoGanador = {nombre_equi: 'Empate'};      
    }else{
      if(this.puntaje_A > this.puntaje_B){
        equipoGanador = this.equipo_A;
      }else{
        equipoGanador = this.equipo_B;
      }      
    }
    alert('Ganador:'+ equipoGanador.nombre_equi);
  }

  get controlsA(){ return this.formA.controls;}
  get controlsB(){ return this.formB.controls;}

}
