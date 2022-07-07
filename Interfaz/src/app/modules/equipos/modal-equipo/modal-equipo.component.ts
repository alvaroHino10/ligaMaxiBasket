import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-modal-equipo',
  templateUrl: './modal-equipo.component.html',
  styleUrls: ['./modal-equipo.component.css']
})
export class ModalEquipoComponent implements OnInit {
  @Input() public equipo;
  listaJugadores : any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.equipo);
    this.getJugadores();
  }

  getJugadores(){
    var codEquiData = this.equipo.equipo_data.cod_equi;
    this.apiService.getById('equipo_data', codEquiData).subscribe(res => {
      this.listaJugadores = res.data.jugadores;
      console.log(this.listaJugadores);
    });    
  }

}
