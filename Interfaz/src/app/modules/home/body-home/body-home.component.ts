import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.css']
})
export class BodyHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.fecha),
    console.log(this.añoActual),
    console.log(this.hoy),
    console.log(this.mesActual)
  }

  clickRegistroHome () {
    this.router.navigate(['/registro-delegado']);
  };
  
  fecha = new Date();
  añoActual = this.fecha.getFullYear();
   hoy = this.fecha.getDate();
  mesActual = this.fecha.getMonth() + 1; 

}
