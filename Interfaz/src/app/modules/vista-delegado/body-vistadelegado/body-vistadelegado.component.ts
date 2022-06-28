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


}
