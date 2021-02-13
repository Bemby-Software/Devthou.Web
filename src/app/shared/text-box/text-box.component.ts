import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input() label : string;
  isActive : boolean;
  isMouseOver : boolean;
  hasValue : boolean;

  onInputFocused() {
    this.isActive = true;
  }

  onInputBlurred() {
    this.isActive = false;
  }

  onMouseOver() {
    this.isMouseOver = true;
  }

  onMouseOut() {
    this.isMouseOver = false;
  }

  constructor() {
    this.label = "";
    this.isActive = false;
    this.isMouseOver = false;
    this.hasValue = false;
   }

  ngOnInit(): void {
  }
}
