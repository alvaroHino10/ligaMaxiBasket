import { ControlModalComponent } from './../control-modal/control-modal.component';
import { Component, OnInit , Inject} from '@angular/core';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FixturePartidoComponent } from '../fixture-partido/fixture-partido.component';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api-services/api-services';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-body-fixture',
  templateUrl: './body-fixture.component.html',
  styleUrls: ['./body-fixture.component.css']
})
export class BodyFixtureComponent implements OnInit {
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;
  listaPartidos = [];
  
  partidoNuevo  = {
    fecha_part: '',
    hora_ini_part:	'',
    equipo_1:	'',
    equipo_2: '',
    lugar:'',
    primer_juez: '',
    segundo_juez: '',
    apuntador_mesa: ''
  };

  constructor(private modalService: NgbModal, private apiService : ApiService, private cookieService : CookieService){
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  ngOnInit(): void {
    this.cargarPartidos();
  }

  controldelPartido(): void {
    const modalFixture = this.modalService.open(ControlModalComponent, { centered: true , size: 'xl', scrollable: true });

}

  cargarPartidos(){
    this.apiService.getAll('partido').subscribe((data: any = []) => {
      const response = data;
      this.listaPartidos = (response['data']);
      console.log(this.listaPartidos);
    });
  }

  agregarPartido(): void {
    const modalFixture = this.modalService.open(FixturePartidoComponent, { centered: true , size: 'xl', scrollable: true });
    
    modalFixture.result.then((result) => {
      if (result) {
        this.partidoNuevo = result;
        console.log(this.partidoNuevo);
        /*this.dataPost = data;
        console.log(this.dataPost);
        mensajeResponse = this.dataPost['mensaje'];
        alert(mensajeResponse);*/
        this.partidoNuevo.equipo_1 = this.partidoNuevo['equipo_1']['nombre_equi'];
        this.partidoNuevo.equipo_2 = this.partidoNuevo['equipo_2']['nombre_equi'];
        this.listaPartidos.push(this.partidoNuevo);
        console.log(this.listaPartidos);
      }
    });
  }

  get existeAcceso(){ return this.cookieService.check('token_access');}
}
