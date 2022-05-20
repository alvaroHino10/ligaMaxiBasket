import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-credecial-card',
  templateUrl: './credecial-card.component.html',
  styleUrls: ['./credecial-card.component.css']
})
export class CredecialCardComponent implements OnInit {
  public urlActual: any;
  public credencial: FormGroup;
  jugador: any = [];
  listaEquipos: any = [];
  listaJugadores: any=[];
  codEquipo = -1;
  //equipoJugador: any;

  constructor(private apiService: ApiService) {
    this.urlActual = window.location.href;
    console.log(this.urlActual);

    this.credencial = new FormGroup({
      equipos: new FormControl('',
        Validators.required),
      jugadores: new FormControl('',
        Validators.required), 
    });
  }

  ngOnInit(): void {
    this.getJsonContent();
  }

  actualizarCredencial(){
    this.codEquipo = this.credencial.value.equipos.cod_equi;
    this.getJsonContent();
  }
  
  get controls() { return this.credencial.controls; }
  get equipoJugador(){ return this.credencial.value.equipos;}

  getJsonContent() {
    this.apiService.getAll('equipo').subscribe((data: any = []) => {
      this.listaEquipos = data;
    });
    //Dado el codEquipo generar los jugadores de ese equipo
    this.apiService.getJSON('jugador', 2).subscribe((data: any = []) => {
      this.jugador = data['jugador'];
      console.log(this.jugador)
    });    
  }
}

