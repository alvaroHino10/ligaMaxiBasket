import { Component, OnInit , Inject} from '@angular/core';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FixturePartidoComponent } from '../fixture-partido/fixture-partido.component';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-body-fixture',
  templateUrl: './body-fixture.component.html',
  styleUrls: ['./body-fixture.component.css']
})
export class BodyFixtureComponent implements OnInit {
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;
  partidoNuevo  = {
    fecha: '',
    hora:	'',
    equipo_1:	'',
    equipo_2: '',
    lugar:'',
    primer_juez: '',
    segundo_juez: '',
    apuntador_mesa: ''
  };
  constructor(private modalService: NgbModal){
      
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
    

  }

  ngOnInit(): void {
  }

  existePartido(){
    return true;
  }
  agregarPartido(): void {
    
    const modalFixture = this.modalService.open(FixturePartidoComponent, { centered: true , size: 'lg', scrollable: true });
    

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
      }
    });


    /*var datosPartido  = {
      fecha: this.formPartido.value.fechaPartido,
      hora:	this.formPartido.value.horaPartido ,
      equipo_1:	this.formPartido.value.equipo1,
      equipo_2: this.formPartido.value.equipo2,
      lugar: this.formPartido.value.lugar,
      primer_juez: this.formPartido.value.primerJuez,
      segundo_juez: this.formPartido.value.segundoJuez,
      apuntador_mesa: this.formPartido.value.apuntadorMesa
    };*/
  }

}
