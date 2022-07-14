import { ModalCredencialDelegadoComponent } from './../modal-credencial-delegado/modal-credencial-delegado.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api-services/api-services';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SendDataService } from 'src/app/api-services/send-data.service';
import { AuthService } from 'src/app/api-services/auth.service';
@Component({
  selector: 'app-body-vistadelegado',
  templateUrl: './body-vistadelegado.component.html',
  styleUrls: ['./body-vistadelegado.component.css']
})
export class BodyVistadelegadoComponent implements OnInit {
  equiposPreins : any = [];
  equiposRegistrados : any = [];
  equipos : any = [];
  constructor(private modalService: NgbModal, 
    private router: Router, 
    private data:SendDataService,
    private authService: AuthService,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos() {
    this.apiService.getAll('torneo/1/equipos').subscribe((dataequipo: any = []) => {
      this.equipos = dataequipo.data;
      console.log(dataequipo);
      this.equiposConData();
    });
  }

  equiposConData(){
    this.equipos.forEach(element => {
      if(element.equipo_data != null){
        this.equiposRegistrados.push(element);
      }else{
        this.equiposPreins.push(element);
      }      
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

  credencial(): void {
    const modalFixture = this.modalService.open(ModalCredencialDelegadoComponent, { centered: true, size: 'lg', scrollable: false });    
  }

  credencialEquipo(equipo: any){
    this.data.saveEquipo(equipo);
    this.router.navigate(['/credencial']);
  }
}
