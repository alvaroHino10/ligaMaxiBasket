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
  public clubPerfil:any;
  public telefonoPerfil:any;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.urlActual = window.location.href;
    console.log(this.urlActual);
    var jugadores = this.apiService.getById('jugadores',1);
    console.log(jugadores);
  }  
}

