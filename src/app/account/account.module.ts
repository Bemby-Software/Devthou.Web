import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountFormComponent } from './create-account/create-account-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BembyUiModule } from '../bemby-ui/bemby-ui.module';

@NgModule({
  declarations: [
    CreateAccountFormComponent
  ],
  exports: [
    CreateAccountFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BembyUiModule
  ]
})
export class AccountModule { }
