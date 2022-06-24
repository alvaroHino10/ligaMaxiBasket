import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.css']
})
export class BodyLoginComponent implements OnInit {

  siteKey: string;

  constructor() {
    this.siteKey='6Lf-yJcgAAAAAHxzd7sG7Y0dEZo_avSBaU7RaG5-';
   }

  ngOnInit(): void {
  }

}
