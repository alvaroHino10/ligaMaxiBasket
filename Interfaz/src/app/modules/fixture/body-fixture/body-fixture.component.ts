import { ControlModalComponent } from './../control-modal/control-modal.component';
import { Component, OnInit, Inject } from '@angular/core';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FixturePartidoComponent } from '../fixture-partido/fixture-partido.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api-services/api-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-fixture',
  templateUrl: './body-fixture.component.html',
  styleUrls: ['./body-fixture.component.css']
})
export class BodyFixtureComponent implements OnInit {
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;
  listaPartidos = [];

  partidoNuevo = {
    fecha_part: '',
    hora_ini_part: '',
    equipo_1: '',
    equipo_2: '',
    lugar: '',
    primer_juez: '',
    segundo_juez: '',
    apuntador_mesa: ''
  };

  constructor(private modalService: NgbModal, private apiService: ApiService,
    private router:Router) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'light-blue-backdrop',
      centered: true, 
      size: 'xl',
      scrollable: true 
    }
  }

  ngOnInit(): void {
    this.cargarPartidos();
  }

  cargarPartidos() {
    this.apiService.getAll('torneo/1/partidos').subscribe((data: any = []) => {
      const response = data;
      console.log(data);
      this.listaPartidos = (response['data']);
    });
  }

  agregarPartido(): void {
    const modalFixture = this.modalService.open(FixturePartidoComponent, this.modalOptions );
    modalFixture.result.then((result) => {
      if (result) {
      }
    });
  }

  controlDelPartido(partidoActual: any): void {
    const modalFixture = this.modalService.open(ControlModalComponent, { centered: true, size: 'xl', scrollable: true });    
    modalFixture.componentInstance.partido = partidoActual;
    this.modalService.activeInstances.subscribe()
  }

  registrarPuntajePartido(){
    var partido = {};
    this.router.navigate(['/fixture/puntaje']);
  }

  getEquipos(partidoActual: any){
    return partidoActual.equipos;
  }

}
