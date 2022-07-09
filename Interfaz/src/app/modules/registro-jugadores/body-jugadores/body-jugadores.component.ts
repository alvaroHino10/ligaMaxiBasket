import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-services/api-services';
import { RegistroJComponent } from '../registro/registro.component';

@Component({
  selector: 'app-body-jugadores',
  templateUrl: './body-jugadores.component.html',
  styleUrls: ['./body-jugadores.component.css']
})
export class BodyJugadoresComponent implements OnInit {
  listaJugadores : any;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getJugadores();
  }

  getJugadores(){
    this.apiService.getAll('jugadores').subscribe((data: any) => {
      this.listaJugadores = data;
    });
  }

  get equipoSeleccionado(){
    return false;
    //return this.jugadores.formularioRegistroJugador.value.
  }

}
