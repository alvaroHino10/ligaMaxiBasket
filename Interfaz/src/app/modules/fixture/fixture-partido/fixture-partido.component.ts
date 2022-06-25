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
  listaArbitros: any = [];
  listaApuntadorMesa: any = [];

  listaEquiposfake: any = [this.setRegistro("Cocos", "", "", ""),
  this.setRegistro("Locos", "", "", ""),
  this.setRegistro("Pedros", "", "", ""),
  this.setRegistro("Paules", "", "", ""),
  this.setRegistro("Los pumas azules", "", "", ""),
  this.setRegistro("Gatos verdes", "", "", ""),
  this.setRegistro("Pueblo azul", "", "", "")
  ];
  listaArbitrosfake: any = [this.setRegistro("", "martinez2", "flores", "arbitro"),
  this.setRegistro("", "martinez3", "flores", "arbitro"),
  this.setRegistro("", "martinez4", "flores", "arbitro"),
  this.setRegistro("", "martinez5", "flores", "arbitro"),
  this.setRegistro("", "martinez6", "flores", "arbitro"),
  ];
  listaAMfake: any = [this.setRegistro("", "martinez", "flores0", "mesa"),
  this.setRegistro("", "martinez", "flores1", "mesa"),
  this.setRegistro("", "martinez", "flores2", "mesa"),
  this.setRegistro("", "martinez", "flores3", "mesa"),
  this.setRegistro("", "martinez", "flores4", "mesa"),
  this.setRegistro("", "martinez", "flores5", "mesa"),
  ];

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
      lugarPartido: new FormControl('', [
        Validators.required,
        Validators.minLength(3)]),
      primerJuez: new FormControl('',
        Validators.required),
      segundoJuez: new FormControl('',
        Validators.required),
      apuntadorMesa: new FormControl('',
        Validators.required)
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

  crearPartido() {
    this.submitted = true;
  }

  get equiposIguales(){
    if(this.formPartido.value.equipo1 == "" || this.formPartido.value.equipo2 == ""){
      return false;
    }
    return (this.formPartido.value.equipo1 == this.formPartido.value.equipo2);
  }

  get controls() { return this.formPartido.controls; }

  get arbitrosIguales(){
    if(this.formPartido.value.primerJuez == "" || this.formPartido.value.segundoJuez == ""){
      return false;
    }
    return (this.formPartido.value.primerJuez== this.formPartido.value.segundoJuez);
  }

  //datos fake
  setRegistro(nombreEqui: any, nombre: any, p_Ap: any, rol: any) {
    const registroJugador = {
      nombre_equi: nombreEqui,
      nombre_cp: nombre,
      prim_ap_cp: p_Ap,
      rol_cp: rol,
    };
    return registroJugador;
  }

}