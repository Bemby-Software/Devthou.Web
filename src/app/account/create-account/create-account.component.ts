import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './../services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {

  accountDetails = new FormGroup({
    email: new FormControl("", [Validators.required], [this.accountService.EmailValidator()]),
    mobileNumber: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[_!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{8,}$")])
  }, { updateOn: "blur" });

  constructor(private accountService : AccountService) { }

  onSubmit(): void {
    console.log(this.accountDetails.value);
  }

  ngOnInit(): void {
    
  }
}
