import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api-services/api-services';
import { ModalPreinscripcionComponent } from '../modal-preinscripcion/modal-preinscripcion.component';

@Component({
  selector: 'app-tabla-preins',
  templateUrl: './tabla-preins.component.html',
  styleUrls: ['./tabla-preins.component.css']
})
export class TablaPreinsComponent implements OnInit {
  listaEquipos : any = [];
  modalOptions: NgbModalOptions;
  
  constructor(private modalService: NgbModal, private apiService: ApiService) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'light-blue-backdrop',
      centered: true, 
      size: 'xl',
      scrollable: true 
    }
   }

  ngOnInit(): void {
    this.getListaEquipos();
  }

  getListaEquipos(){
    this.apiService.getAll('torneo/1/equiposPreInscritos').subscribe(res => {
      this.listaEquipos = res.data;
      console.log(this.listaEquipos);
    });
  }
  
  validar(equipoPreins: any){
    const modalPreinscripcion = this.modalService.open(ModalPreinscripcionComponent, { centered: true, size: 'xl', scrollable: true });    
    modalPreinscripcion.componentInstance.preinscripcion = equipoPreins;
    this.modalService.activeInstances.subscribe()
  }

}
