import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntaje-partido',
  templateUrl: './puntaje-partido.component.html',
  styleUrls: ['./puntaje-partido.component.css']
})
export class PuntajePartidoComponent implements OnInit {
  puntaje_A = 0;
  puntaje_B = 0;

  listaJugadoresA = ['pepe','juan', 'pedro']

  periodoActual = 1;

  constructor() { }

  ngOnInit(): void {
    console.log(this.listaJugadoresA);
  }

}
