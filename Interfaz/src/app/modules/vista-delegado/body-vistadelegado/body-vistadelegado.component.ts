import { ModalCredencialDelegadoComponent } from './../modal-credencial-delegado/modal-credencial-delegado.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api-services/api-services';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-body-vistadelegado',
  templateUrl: './body-vistadelegado.component.html',
  styleUrls: ['./body-vistadelegado.component.css']
})
export class BodyVistadelegadoComponent implements OnInit {
  listaEquipos : any = [];
  constructor(private modalService: NgbModal, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getListaEquipos();
  }

  getListaEquipos(){
    this.apiService.getAll('torneo/1/equipos').subscribe(res => {
      this.listaEquipos = res.data;
      console.log(this.listaEquipos);
    });
  }

  registroPreinscripcion(){
    this.router.navigate(['/preinscripcion']);
  }
  registroEquipo(){
    this.router.navigate(['/registro-equipo']);
  }
  registrojugadores(){
    this.router.navigate(['/registro-jugadores']);
  }
  credencial(){
    this.router.navigate(['/credencial']);
  }

  generarcredencial(): void {
    const modalFixture = this.modalService.open(ModalCredencialDelegadoComponent, { centered: true, size: 'lg', scrollable: false });    
  }
}
