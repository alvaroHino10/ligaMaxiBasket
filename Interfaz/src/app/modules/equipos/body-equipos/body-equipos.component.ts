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
  modalOptions:NgbModalOptions;
  constructor(private modalService: NgbModal, 
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  informacionEquipo(): void {
    const modalFixture = this.modalService.open(ModalEquipoComponent,
      { centered: true , size: 'lg', scrollable: true });
  }

  getEquipos() {
    this.apiService.getAll('equipo').subscribe((dataequipo: any = []) => {
      const response = dataequipo;
      this.listaEquipos = (response['data']);
      console.log(this.listaEquipos);
    });
  }
}
