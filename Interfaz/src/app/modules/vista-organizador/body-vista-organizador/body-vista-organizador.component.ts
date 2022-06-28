import { Component, OnInit } from '@angular/core';
import { ModalVistaequiposregistradoseneltorneoComponent } from '../modal-vistaequiposregistradoseneltorneo/modal-vistaequiposregistradoseneltorneo.component';
import { ModalVistaequipospreinscritosComponent } from '../modal-vistaequipospreinscritos/modal-vistaequipospreinscritos.component';

import { Router } from '@angular/router';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api-services/api-services';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-body-vista-organizador',
  templateUrl: './body-vista-organizador.component.html',
  styleUrls: ['./body-vista-organizador.component.css']
})
export class BodyVistaOrganizadorComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal, private apiService : ApiService, private cookieService : CookieService) { }

  ngOnInit(): void {
  }
  creartorneo(){
    this.router.navigate(['registro-preinscripcion'])
  }
  equipospreinscritos(): void {
    const modalFixture = this.modalService.open(ModalVistaequipospreinscritosComponent,
      { centered: true , size: 'lg', scrollable: true });
  }
  equiposregistrados(): void {
    const modalFixture = this.modalService.open(ModalVistaequiposregistradoseneltorneoComponent,
      { centered: true , size: 'lg', scrollable: true });
  }
  crearpartido(){
    this.router.navigate(['credencial'])
  }
}
