import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-jugadores',
  templateUrl: './registro-jugadores.component.html',
  styleUrls: ['./registro-jugadores.component.css']
})
export class RegistroJugadoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('RegistroJugadoresComponent')
  }

}
