import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  partido : any;

  constructor() { }

  savePartido(partido: any){
    this.partido = partido;
  }

  getPartido(){
    return this.partido;
  }
}
