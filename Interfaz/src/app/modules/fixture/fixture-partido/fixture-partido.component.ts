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
  listaFiscales: any = [];
  public datosPartido;
  listaEquiposfake: any ;
  listaArbitrosfake: any ;
  listaAMfake: any ;
  controles : any;

  constructor(public activeModal: NgbActiveModal,
    private apiService: ApiService) {

    this.formPartido = new FormGroup({
      equipoA: new FormControl('',
        Validators.required),
      equipoB: new FormControl('',
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
        Validators.required),
      fiscal: new FormControl('',
        Validators.required)
    });
  }

  ngOnInit() {
    this.getEquipos();
     this.getControlPartido();
  }

  getEquipos() {
    this.apiService.getAll('torneo/1/equipos').subscribe((dataequipo: any = []) => {      
      this.listaEquipos = dataequipo['data'];
      console.log(this.listaEquipos);     
    });
  }

  getControlPartido(){
    this.apiService.getAll('control-partido').subscribe((data: any ) => {
      console.log(data);
      this.listaArbitros = data['arbitros'];
      this.listaApuntadorMesa = data['mesas'];
      this.listaFiscales = data['fiscales'];
    });
  }

  crearPartido() {
    this.submitted = true;
  }

  passBack() {
    this.setDatosPartido();
    this.apiService.post('partido', this.datosPartido).subscribe(res =>{
      var respuesta = res;
      console.log(respuesta);
      alert(respuesta['mensaje']); //Post para equipo con su codigo de partido, otro post para el otro equipo. 
      this.activeModal.close(this.datosPartido); 
    });
  }

  get equiposIguales(){
    if(this.formPartido.value.equipoA == "" || this.formPartido.value.equipoB == ""){
      return false;
    }
    return (this.formPartido.value.equipoA == this.formPartido.value.equipoB);
  }

  get controls() { return this.formPartido.controls; }

  get arbitrosIguales(){
    if(this.formPartido.value.primerJuez == "" || this.formPartido.value.segundoJuez == ""){
      return false;
    }
    return (this.formPartido.value.primerJuez== this.formPartido.value.segundoJuez);
  }

  setDatosPartido(){
    var infoPartido = {
      fecha_part: this.formPartido.value.fechaPartido,
      lugar_part: this.formPartido.value.lugarPartido.toLowerCase(),
      hora_ini_part:	this.formPartido.value.horaPartido,
      hora_fin_part:  this.formPartido.value.horaPartido
    }
    this.datosPartido  = {
      equipo_A:   this.formPartido.value.equipoA.equipo_data.cod_equi_data,
      equipo_B:   this.formPartido.value.equipoB.equipo_data.cod_equi_data,
      arbitro_1: this.formPartido.value.primerJuez.cod_contr_part,
      arbitro_2: this.formPartido.value.segundoJuez.cod_contr_part,
      fiscal:    this.formPartido.value.fiscal.cod_contr_part,
      mesa: this.formPartido.value.apuntadorMesa.cod_contr_part,
      partido: infoPartido
    };
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

  datosFake() {
    this.listaEquiposfake = [this.setRegistro("Cocos", "", "", ""),
    this.setRegistro("Locos", "", "", ""),
    this.setRegistro("Pedros", "", "", ""),
    this.setRegistro("Paules", "", "", ""),
    this.setRegistro("Los pumas azules", "", "", ""),
    this.setRegistro("Gatos verdes", "", "", ""),
    this.setRegistro("Pueblo azul", "", "", "")
    ];
    this.listaArbitrosfake = [this.setRegistro("", "martinez2", "flores", "arbitro"),
    this.setRegistro("", "martinez3", "flores", "arbitro"),
    this.setRegistro("", "martinez4", "flores", "arbitro"),
    this.setRegistro("", "martinez5", "flores", "arbitro"),
    this.setRegistro("", "martinez6", "flores", "arbitro"),
    ];
    this.listaAMfake = [this.setRegistro("", "martinez", "flores0", "mesa"),
    this.setRegistro("", "martinez", "flores1", "mesa"),
    this.setRegistro("", "martinez", "flores2", "mesa"),
    this.setRegistro("", "martinez", "flores3", "mesa"),
    this.setRegistro("", "martinez", "flores4", "mesa"),
    this.setRegistro("", "martinez", "flores5", "mesa"),
    ];
  }

}