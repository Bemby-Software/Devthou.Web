import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountCreatedDto } from '../dtos/AccountCreatedDto';
import { CreateAccountDto } from '../dtos/CreateAccountDto';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'account-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css'],
})
export class CreateAccountFormComponent implements OnInit {
  accountDetails = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required], [this.accountService.EmailValidator()]),
    mobileNumber: new FormControl("", [Validators.required], [this.accountService.MobileNumberValidator()]),
    password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[_!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{8,}$")])
  });

  @Output() onAccountCreated = new EventEmitter<AccountCreatedDto>(true);

  constructor(private accountService : AccountService) { }

  async onSubmit(): Promise<void> {
    const result = await this.accountService.CreateAccount(new CreateAccountDto(this.accountDetails.value.firstName, this.accountDetails.value.lastName, this.accountDetails.value.email, this.accountDetails.value.mobileNumber, this.accountDetails.value.password));
    this.onAccountCreated.emit(result);
    this.accountDetails.reset();
  }

  ngOnInit(): void {
    
  }
}
