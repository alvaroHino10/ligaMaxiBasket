import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-registro-delegado',
  templateUrl: './registro-delegado.component.html',
  styleUrls: ['./registro-delegado.component.css']
})
export class RegistroDelegadoComponent implements OnInit {
  public formularioDelegado: FormGroup;

  constructor(public formulario: FormBuilder, private apiService: ApiService) {
    this.formularioDelegado = new FormGroup({
      nombreDelegado: new FormControl('',
                    [Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(80),
                    Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),
      apellidoDelegado: new FormControl('',
                    [Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(80),
                    Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      numeroIdentificacion: new FormControl ('', 
                    [Validators.required, 
                      Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')]),

      telefono: new FormControl('',
                    [Validators.required,
                    Validators.pattern("^[0-9]*$"),
                    Validators.minLength(5),
                    Validators.maxLength(15)]),
      correoElectronico: new FormControl('',
                    [Validators.required,
                    Validators.email]),
      });
  }

  ngOnInit(): void {
  }

}
