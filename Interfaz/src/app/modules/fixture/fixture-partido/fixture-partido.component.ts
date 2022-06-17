import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';


import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-fixture-partido',
  templateUrl: './fixture-partido.component.html',
  styleUrls: ['./fixture-partido.component.css']
})
export class FixturePartidoComponent implements OnInit {
  public formPartido: FormGroup;
  submitted = false;
  listaEquipos: any = [];
  time: NgbTimepicker;

  constructor(public activeModal: NgbActiveModal,
    private apiService: ApiService) {

    this.formPartido = new FormGroup({
      equipo1: new FormControl('',
        Validators.required),
      equipo2: new FormControl('',
        Validators.required), 
      fechaPartido: new FormControl('',
        Validators.required),
      horaPartido: new FormControl('',
        Validators.required),
      lugarPartido: new FormControl('',[
        Validators.required,
        Validators.minLength(3)])
    });
  }

  ngOnInit() {
    this.getEquipos();
  }

  getEquipos() {
    this.apiService.getAll('equipo').subscribe((dataequipo: any = []) => {
      const response = dataequipo;
      this.listaEquipos = (response['data']);
      console.log(this.listaEquipos);
    });
  }

  crearPartido(){
    this.submitted = true;
  }

  get controls() { return this.formPartido.controls; }
}