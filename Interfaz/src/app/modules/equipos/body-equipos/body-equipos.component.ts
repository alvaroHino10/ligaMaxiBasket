import { ModalEquipoComponent } from './../modal-equipo/modal-equipo.component';
import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body-equipos',
  templateUrl: './body-equipos.component.html',
  styleUrls: ['./body-equipos.component.css']
})
export class BodyEquiposComponent implements OnInit {
  listaPartidos = [];
  modalOptions:NgbModalOptions;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  informacionPartido(): void {
    const modalFixture = this.modalService.open(ModalEquipoComponent, { centered: true , size: 'lg', scrollable: true });

}
}
