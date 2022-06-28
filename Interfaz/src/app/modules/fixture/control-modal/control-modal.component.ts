import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-modal',
  templateUrl: './control-modal.component.html',
  styleUrls: ['./control-modal.component.css']
})
export class ControlModalComponent implements OnInit {
  

  constructor() { }
  numeroEquipo1:number = 0;
  numeroEquipo2:number = 0;

  /***Funcion Sumar y Restar */
  
/**fin  */


  //espera un numero como respuesta
  accionOperacion( valor:number ){
    this.numeroEquipo1 +=valor;
    
  }
  accionOperacion2( valor:number ){
    this.numeroEquipo2 +=valor;
    
  }

  ngOnInit(): void {
  }

}
