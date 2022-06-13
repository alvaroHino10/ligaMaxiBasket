import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.css']
})
export class BodyLoginComponent implements OnInit {
  siteKey:string;
  constructor() {
    this.siteKey = "6LcDfWYgAAAAAH7Szfje8-QZYkeV_waxOb1-4NXA";
   }

  ngOnInit(): void {
    
}

}

