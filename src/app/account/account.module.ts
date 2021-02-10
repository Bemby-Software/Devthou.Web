import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  exports: [CreateAccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
