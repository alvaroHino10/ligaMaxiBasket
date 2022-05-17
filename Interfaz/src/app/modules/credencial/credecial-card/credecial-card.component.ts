import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credecial-card',
  templateUrl: './credecial-card.component.html',
  styleUrls: ['./credecial-card.component.css']
})
export class CredecialCardComponent implements OnInit {
  public urlActual:any;
  constructor() { }

  ngOnInit(): void {
    this.urlActual = window.location.href;
    console.log(this.urlActual)
  }

}

