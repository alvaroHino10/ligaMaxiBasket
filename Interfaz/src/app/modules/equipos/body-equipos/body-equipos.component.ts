import { ModalEquipoComponent } from './../modal-equipo/modal-equipo.component';
import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-body-equipos',
  templateUrl: './body-equipos.component.html',
  styleUrls: ['./body-equipos.component.css']
})
export class BodyEquiposComponent implements OnInit {
  listaEquipos = [];
  equipos = [];
  modalOptions:NgbModalOptions;
  constructor(private modalService: NgbModal, 
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  informacionEquipo(equipoJugadores: any): void {
    const modalJugadores = this.modalService.open(ModalEquipoComponent,
      { centered: true , size: 'lg', scrollable: true });
    modalJugadores.componentInstance.equipo = equipoJugadores;
  }

  getEquipos() {
    this.apiService.getAll('torneo/1/equipos').subscribe((dataequipo: any = []) => {
      this.equipos = dataequipo.data;
      console.log(this.listaEquipos);
      this.equiposConData();
    });    
  }

  equiposConData(){
    this.equipos.forEach(element => {
      if(element.equipo_data != null){
        this.listaEquipos.push(element);
      }      
    });    
  }
}
