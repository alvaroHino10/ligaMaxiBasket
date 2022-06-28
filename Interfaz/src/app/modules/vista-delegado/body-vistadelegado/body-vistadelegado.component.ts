import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-vistadelegado',
  templateUrl: './body-vistadelegado.component.html',
  styleUrls: ['./body-vistadelegado.component.css']
})
export class BodyVistadelegadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registroPreinscripcion(){
    this.router.navigate(['registro-preinscripcion'])
  }
  registroEquipo(){
    this.router.navigate(['registro-equipo'])
  }
  registrojugadores(){
    this.router.navigate(['registro-jugadores'])
  }
  credencial(){
    this.router.navigate(['credencial'])
  }
}
