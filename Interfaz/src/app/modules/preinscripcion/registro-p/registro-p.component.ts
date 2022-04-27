import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.css']
})
export class RegistroPComponent implements OnInit {
  private emailPattern: any = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
  public formularioRegistroP!: FormGroup;

  submitted = false;

  constructor(public formulario: FormBuilder) {
  }

  ngOnInit() {
    this.formularioRegistroP = this.formulario.group({
      nombreCompleto: ['', [Validators.required, Validators.pattern('/^[a-zA-Z ]+$/'), Validators.minLength(5), Validators.maxLength(80)]],
      nombreDelEquipo: ['', [Validators.required, Validators.pattern('/^[a-zA-Z ]+$/'), Validators.minLength(5), Validators.maxLength(80)]],
      categoria: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('/^[0-9]*$/')]],
      correoElectronico: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      codigoDeTransaccion: ['', [Validators.required, Validators.pattern('/^[0-9]\d*$/')]],
    });
  }


  enviarDatos(): void {
    this.submitted = true;
    if (this.formularioRegistroP.invalid) {
      console.log('NO VALIDO');
      return;
    }
    alert('Preinscripcion registrada correctamente');
    //console.log(this.formularioRegistroP.value);
  }

  get controls() { return this.formularioRegistroP.controls; }

}
