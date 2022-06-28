import { ModalVistaequiposregistradoseneltorneoComponent } from './../modal-vistaequiposregistradoseneltorneo/modal-vistaequiposregistradoseneltorneo.component';
import { ModalVistaequipospreinscritosComponent } from './../modal-vistaequipospreinscritos/modal-vistaequipospreinscritos.component';
import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api-services/api-services';
@Component({
  selector: 'app-boby-vistadelorganizador',
  templateUrl: './boby-vistadelorganizador.component.html',
  styleUrls: ['./boby-vistadelorganizador.component.css']
})
export class BobyVistadelorganizadorComponent implements OnInit {

  constructor(private modalService: NgbModal, 
    private apiService: ApiService) { }

  ngOnInit(): void {
  }
  equipospreinscritos(): void {
    const modalFixture = this.modalService.open(ModalVistaequipospreinscritosComponent,
      { centered: true , size: 'lg', scrollable: true });
  }
  equiposregistrados(): void {
    const modalFixture = this.modalService.open(ModalVistaequiposregistradoseneltorneoComponent,
      { centered: true , size: 'lg', scrollable: true });
  }
}
