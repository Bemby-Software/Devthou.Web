import { Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
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
  value : string;

  constructor(@Self() @Optional() private control: NgControl) {
    this.control = control;
    this.control.valueAccessor = this;
    this.value = ""
    this.label = "";
    this.type = "text";
    this.isActive = false;
    this.isMouseOver = false;
    this.hasError = false;
    this.hasValue = false;
   }

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
    this.value = (event.target as HTMLInputElement).value;
    this.hasValue = this.value.length > 0;
    this.onChangeCallback(this.value);
    this.checkForError();
  }

  writeValue(value: any): void {
    this.value = value;
    this.inputTextBox.nativeElement.value = this.value;    
    this.hasValue = this.value === null ? false : this.value.length > 0;
    this.checkForError();
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {    
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.inputTextBox.nativeElement.disabled = isDisabled;
  }

  ngOnInit(): void {
  }
}
