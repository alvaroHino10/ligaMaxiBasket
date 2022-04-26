import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.css']
})
export class RegistroPComponent implements OnInit {
  formularioRegistroP:FormGroup;

  constructor(public formulario: FormBuilder) {
    this.formularioRegistroP = this.formulario.group({
      nombreCompleto:[''],
      nombreDelEquipo:[''],
      categoria:[''],
      telefono:[''],
      correoElectronico:[''],
      codigoDeTransaccion:[''],
    });
   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.formularioRegistroP.value);
  }

}
