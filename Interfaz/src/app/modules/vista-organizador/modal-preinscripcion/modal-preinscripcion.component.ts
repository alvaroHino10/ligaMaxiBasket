import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-modal-preinscripcion',
  templateUrl: './modal-preinscripcion.component.html',
  styleUrls: ['./modal-preinscripcion.component.css']
})
export class ModalPreinscripcionComponent implements OnInit {
  preinscripcion : any;
  constructor(private apiService: ApiService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {    
    console.log(this.preinscripcion);
  }

  validar(){ 
    var cod = this.preinscripcion.cod_equi;
    var metodo =  "/aceptado?_method=PUT";
    var direccion = "equipo/"+ cod + metodo;
    this.apiService.post(direccion,this.preinscripcion).subscribe(res =>{
      alert('Validando equipo...');
      this.activeModal.close();
    });
  }
}
