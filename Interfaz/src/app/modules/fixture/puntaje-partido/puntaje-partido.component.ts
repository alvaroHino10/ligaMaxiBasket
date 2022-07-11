import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api-services/api-services';
import { SendDataService } from 'src/app/api-services/send-data.service';

@Component({
  selector: 'app-puntaje-partido',
  templateUrl: './puntaje-partido.component.html',
  styleUrls: ['./puntaje-partido.component.css']
})
export class PuntajePartidoComponent implements OnInit {
  public partido: any;
  equipo_A: any;
  equipo_B: any;
  puntaje_A = 0;
  puntaje_B = 0;
  jugadoresA = [];
  jugadoresB = [];

  anotacionA = false;
  anotacionB = false;
  periodoActual = 0;

  formA: FormGroup;
  formB: FormGroup;

  puntajes: any;
  jugadorActual : any;

  constructor(private dataService: SendDataService,
    private apiService: ApiService,
    private router: Router) {
    this.formA = new FormGroup({
      jugadorA: new FormControl('',
        Validators.required)
    });
    this.formB = new FormGroup({
      jugadorB: new FormControl('',
        Validators.required)
    });
  }

  ngOnInit(): void {
    this.partido = this.dataService.getPartido();
    if (this.partido == null) {
      this.router.navigate(['/fixture']);
    } else {
      this.getEquipos();
      this.getPuntajes();
    }
  }

  getEquipos() {
    this.equipo_A = this.partido.equipos['0'];
    this.equipo_B = this.partido.equipos['1'];
    this.apiService.getById('equipo_data', this.equipo_A.cod_equi).subscribe(res => {
      this.jugadoresA = res.data.jugadores;
      console.log(this.jugadoresA);
    });
    this.apiService.getById('equipo_data', this.equipo_B.cod_equi).subscribe(res => {
      this.jugadoresB = res.data.jugadores;
    });
  }

  canasta(equipo: any, canasta: any) {
    var varUrl = 'partido/' + this.partido.cod_part + '/equipo';
    var periodoText = "puntaje_periodo_" + this.periodoActual;
    var values = this.setAnotacion(equipo, canasta, varUrl, periodoText);
    this.apiService.post(varUrl, values).subscribe(res => {
      console.log(res);
      this.setJugador(canasta);
    });
    this.limpiarFormularios();
  }

  limpiarFormularios() {
    this.formA.reset();
    this.formB.reset();
  }

  setAnotacion(equipo: any, canasta: any, varUrl: any, text: any) {
    var values;
    if (equipo == 0) {
      this.anotacionA = true;
      if (this.controlsA.jugadorA.valid) {
        this.puntaje_A += canasta;
        this.anotacionA = false;
        this.jugadorActual = this.formA.value.jugadorA.cod_jug;
        varUrl = varUrl + this.equipo_A.cod_equi;
        values = {
          'periodo_especifico': text,
          'operacion_canasta': canasta
        }
      }
    } else {
      this.anotacionB = true;
      if (this.controlsB.jugadorB.valid) {
        this.puntaje_B += canasta;
        this.anotacionB = false;
        this.jugadorActual = this.formB.value.jugadorB.cod_jug;
        varUrl = varUrl + this.equipo_B.cod_equi;
        values = {
          'periodo_especifico': text,
          'operacion_canasta': canasta
        }
      }
    }
    return values;
  }

  setJugador(canasta: any) {
    var valueCanasta;
    if (canasta == 1) {
      valueCanasta = 'canasta_simple';
    } else {
      if (canasta == 2) {
        valueCanasta = 'canasta_doble';
      } else {
        valueCanasta = 'canasta_triple';
      }
    }
    var url = 'jugador/' + this.jugadorActual + valueCanasta;
    this.apiService.post(url,this.jugadorActual);

  }

  getPuntajes() {
    this.apiService.getAll('partido/' + this.partido.cod_part + '/puntajes').subscribe(res => {
      this.puntajes = res;
      console.log(this.puntajes);
    });
  }
  cambiarPeriodo(value: any) {
    this.periodoActual = value;
    /*if (this.periodoActual == 1) {

    } else {
      if (this.periodoActual == 2) {

      } else {
        if (this.periodoActual == 3) {

        } else {
          if (this.periodoActual == 4) {

          } else {

          }
        }
      }
    }*/
  }

  finalizarPartido() {
    this.router.navigate(['/fixture']);
    var equipoGanador = this.getGanador();
    this.getPuntajes();
    alert(equipoGanador.nombre_equi);
  }

  getGanador() {
    var equipoGanador;
    if (this.puntaje_A == this.puntaje_B) {
      equipoGanador = { nombre_equi: 'Empate' };
    } else {
      if (this.puntaje_A > this.puntaje_B) {
        equipoGanador = this.equipo_A;
      } else {
        equipoGanador = this.equipo_B;
      }
    }
    return equipoGanador;
  }

  get controlsA() { return this.formA.controls; }
  get controlsB() { return this.formB.controls; }

}
