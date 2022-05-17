import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-credecial-card',
  templateUrl: './credecial-card.component.html',
  styleUrls: ['./credecial-card.component.css']
})
export class CredecialCardComponent implements OnInit {
  public urlActual:any;
  public nombrePerfil:any;
  public fechaNaciminetoPerfil:any ;
  public numeroIdentificacionPerfil:any;
  public equipoPerfil:any;
  public telefonoPerfil:any;
  data:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.urlActual = window.location.href;
    console.log(this.urlActual);
    var jugadores = this.apiService.getById('jugadores',1);
    //var jugadores = this.apiService.getJSON(0);
    this.nombrePerfil = this.apiService.infoJson.nombre_jug;
    this.fechaNaciminetoPerfil = this.apiService.infoJson.fecha_nac_jug;
    this.numeroIdentificacionPerfil = this.apiService.infoJson.num_iden_jug;
    this.equipoPerfil = this.apiService.infoJson.nombre_equi;
    this.telefonoPerfil = this.apiService.infoJson.telf_jug;
    console.log(jugadores);
  }  

  getJsonContent(){
    this.apiService.getJugadores().subscribe(this.data);
  }
}

