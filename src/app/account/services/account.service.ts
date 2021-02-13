import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { CreateAccountDto } from '../dtos/CreateAccountDto';
import { AccountCreatedDto } from '../dtos/AccountCreatedDto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  async CreateAccount(accountDetails : CreateAccountDto) : Promise<AccountCreatedDto>
  {
    console.log(accountDetails);
    return Promise.resolve(new AccountCreatedDto("email"));
  }

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

  IsMobileNumberValid(mobileNumber: string): Promise<ValidationErrors | null> {
    if (mobileNumber.endsWith("9"))
    {
      return Promise.resolve(null);
    }
    
    return Promise.resolve({ invalid : `The mobile number ${mobileNumber} is invalid.` });
  }

  EmailValidator() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return from(this.IsEmailValid(control.value));
    }
  }
  
  MobileNumberValidator() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return from(this.IsMobileNumberValid(control.value));
    }
  }
}
