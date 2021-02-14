import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box/text-box.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    TextBoxComponent,
    ButtonComponent
  ],
  exports: [
    TextBoxComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
