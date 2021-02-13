import { Component, ElementRef, forwardRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit, ControlValueAccessor {
  @ViewChild('inputTextBox', {static: true}) inputTextBox!: ElementRef;
  @Input() label : string;
  @Input() type : string;
  
  isActive : boolean;
  isMouseOver : boolean;
  hasError : boolean | null;
  hasValue : boolean;
  onChangeCallback : any;
  onTouched : any;

  checkForError() {
    this.hasError = this.control.invalid && this.control.touched;
  }

  onInputFocused() {
    this.isActive = true;
    this.checkForError();
  }

  onInputBlurred() {
    this.isActive = false;
    this.onTouched();
    this.checkForError();
  }

  onMouseOver() {
    this.isMouseOver = true;
    this.checkForError();
  }

  onMouseOut() {
    this.isMouseOver = false;
    this.checkForError();
  }

  onChange(event : Event) {
    const value = (event.target as HTMLInputElement).value;
    this.hasValue = value.length > 0;
    this.onChangeCallback(value);
    this.checkForError();
  }

  constructor(@Self() @Optional() private control: NgControl) {
    this.control = control;
    this.control.valueAccessor = this;
    this.label = "";
    this.isActive = false;
    this.isMouseOver = false;
    this.hasError = false;
    this.hasValue = false;
   }

  writeValue(value: any): void {
    this.inputTextBox.nativeElement.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {    
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }
}
