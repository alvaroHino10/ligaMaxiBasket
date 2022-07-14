import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-delegado',
  templateUrl: './body-delegado.component.html',
  styleUrls: ['./body-delegado.component.css']
})
export class BodyDelegadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  omitir(){
    this.router.navigate(['/login']); 
  }

}
