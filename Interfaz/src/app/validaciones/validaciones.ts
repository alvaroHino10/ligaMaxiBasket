import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function formValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>{
        const value = control.value;

        if(!value){
            return null;
        }
        //return !appForm ? {formDirective:true} : null;
        return null;
    }
    
}