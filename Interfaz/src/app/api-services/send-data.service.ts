import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  partido : any;
  equipo : any;

  constructor() { }

  savePartido(partido: any){
    this.partido = partido;
  }

  getPartido(){
    return this.partido;
  }

  saveEquipo(equipo : any){
    this.equipo = equipo;
  }
  getEquipo(){
    return this.equipo;
  }
}
