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
  }

  clickRegistroHome () {
    this.router.navigate(['/registro-delegado']);
  };
  
}
