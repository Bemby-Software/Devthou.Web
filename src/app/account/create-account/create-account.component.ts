import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateAccountDto } from '../dtos/CreateAccountDto';
import { AccountService } from './../services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {

  accountDetails = new FormGroup({
    email: new FormControl("", [Validators.required], [this.accountService.EmailValidator()]),
    mobileNumber: new FormControl("", [Validators.required], [this.accountService.MobileNumberValidator()]),
    password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[_!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{8,}$")])
  });

  constructor(private accountService : AccountService) { }

  async onSubmit(): Promise<void> {
    const result = await this.accountService.CreateAccount(new CreateAccountDto(this.accountDetails.value.email, this.accountDetails.value.mobileNumber, this.accountDetails.value.password));
  }

  ngOnInit(): void {
    
  }
}
