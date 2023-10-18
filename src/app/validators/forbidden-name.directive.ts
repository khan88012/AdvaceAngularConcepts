import { Directive, Input } from '@angular/core'
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";
import { Observable, of } from 'rxjs';


//The forbiddenNameValidator factory returns the configured validator function.
// That function takes an Angular control object (control : AbstractControl) 
// and returns either null if the control value is valid or a validation error object. 
//The validation error object typically has a property whose name 
//is the validation key, 'forbiddenName', and whose value is an arbitrary dictionary of values
// that you could insert into an error message, {name}.



export function forbiddenNameValidator(nameRe : RegExp) : ValidatorFn {
    return (control : AbstractControl): Observable<ValidationErrors | null> =>{
        const forbidden = nameRe.test(control.value);   //test returns a boolean that indicates whether or not a pattern exists in the searched string
        return of(forbidden ? { forbiddenName : {value : control.value}}: null);
    };
    
}

@Directive({
    selector: '[appForbiddenName]',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
  })

  export class ForbiddenValidatorDirective implements Validator{
    @Input('appForbiddenName') forbiddenName = '';
    validate(control: AbstractControl):  ValidationErrors | null {
        return  this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null; // 'i' flag makes the regular expression case 'insensitive'
    }
    
  }