import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  async IsEmailValid(email : string) : Promise<ValidationErrors | null> {
    if (email.startsWith("rob"))
    {
      return Promise.resolve({ inUse : `The email address ${email} is already in use.` });
    }
    else if (email.endsWith(".com"))
    {
      return Promise.resolve(null);
    }
    
    return Promise.resolve({ invalid : `The email address ${email} is invalid.` });
  }

  EmailValidator() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return from(this.IsEmailValid(control.value));
    }
  }
}
