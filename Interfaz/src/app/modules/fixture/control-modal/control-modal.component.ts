import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-modal',
  templateUrl: './control-modal.component.html',
  styleUrls: ['./control-modal.component.css']
})
export class ControlModalComponent implements OnInit {

  @Input() public partido;

  puntaje_A: number = 0;
  puntaje_B: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.partido);
  }

  accion_p_a(valor: number) {
    if (valor >= 1) {
      this.puntaje_A += valor;
    }
  }
  accion_p_b(valor: number) {
    if (valor >= 1) {
      this.puntaje_A += valor;
    }
  }
}
