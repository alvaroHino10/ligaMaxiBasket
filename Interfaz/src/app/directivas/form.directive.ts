import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { formValidator } from '../validaciones/validaciones';

@Directive({
  selector: '[appForm]'
})
export class FormDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null{
    return formValidator()(control);
  }
}
