import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-control-modal',
  templateUrl: './control-modal.component.html',
  styleUrls: ['./control-modal.component.css']
})
export class ControlModalComponent implements OnInit {

  @Input() public partido;
  equipo_A: any;
  equipo_B: any;
  puntaje_A: number = 0;
  puntaje_B: number = 0;
  varUrl: string;

  constructor(private apiService: ApiService, public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log(this.partido);
    this.equipo_A = this.partido.equipos['0'];
    this.equipo_B = this.partido.equipos['1'];
  }

  accion_p_a(valor: number) {
    if (this.puntaje_A + valor >= 0 && this.puntaje_A + valor<1000 ) {
      this.puntaje_A += valor;
      this.varUrl = this.varUrl + this.equipo_A.cod_equi + "?_method=PUT";
      this.canasta(valor);
    }
  }
  accion_p_b(valor: number) {
    if (this.puntaje_B + valor >= 0 && this.puntaje_B + valor<1000) {
      this.puntaje_B += valor;
      this.varUrl = this.varUrl + this.equipo_B.cod_equi + "?_method=PUT";
      this.canasta(valor);
    }
  }

  canasta(canasta: any) {
    var numero = 1;
    this.varUrl = 'partido/' + this.partido.cod_part + '/equipo/';
    var periodoText = "puntaje_periodo_" + numero;
    var values = this.setAnotacion(canasta, periodoText);
    this.apiService.post(this.varUrl, values).subscribe();
  }
  setAnotacion(canasta: any, text: any) {
    var values = {
      'periodo_especifico': text,
      'operacion_canasta': canasta
    }
    return values;
  }

  finalizarPuntaje(){
    this.apiService.getAll('partido/' + this.partido.cod_part + '/puntajes').subscribe();
    console.log('pepe');
    this.activeModal.close('Close click');
  }
  
}
