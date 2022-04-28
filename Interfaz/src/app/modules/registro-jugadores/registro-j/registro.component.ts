import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroJComponent implements OnInit {
  public formRegistroJugador: FormGroup;
  public listaCategoria: any = [ "+30", "+40", "+50", "+60"];
  submitted = false;
  categoria = [];

  constructor(public formulario: FormBuilder) {
    this.formRegistroJugador = new FormGroup({
      nombre: new FormControl ('',
                    [Validators.required, 
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                     Validators.minLength(5),
                     Validators.maxLength(80)]),
      primerApellido:new FormControl ('',
                      [Validators.required, 
                      Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                      Validators.minLength(5),
                      Validators.maxLength(80)]),
      segundoApellido:new FormControl ('',
                      [Validators.required, 
                      Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                      Validators.minLength(5),
                      Validators.maxLength(80)]),
      correoElectronico: new FormControl ('', 
                    [Validators.required, 
                     Validators.email]),
      numeroIdentidad:  new FormControl ('', 
                    [Validators.required, 
                    Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$')]),
      nacion:new FormControl ('',
                    [Validators.required, 
                    Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                    Validators.minLength(5),
                    Validators.maxLength(80)]),
      telefono: new FormControl ('', 
                    [Validators.required, 
                     Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$')]),
      domicilio:new FormControl ('',
                     [Validators.required, 
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                     Validators.minLength(5),
                     Validators.maxLength(80)]),
      numeroJugador: new FormControl ('', 
                     [Validators.required, 
                      Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$')]),

    }
                     );
}
  ngOnInit(): void {
  }

  get controls() { return this.formRegistroJugador.controls; }

  registrarJugador(){

  }
}
