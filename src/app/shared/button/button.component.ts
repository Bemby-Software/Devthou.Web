import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() disabled : boolean;
  @Input() type : string;
  @Output() onClick : EventEmitter<string> = new EventEmitter();

  clickHandler(e : MouseEvent) {
    this.onClick.emit('btn')
  }

  constructor() { 
    this.disabled = false;
    this.type = "button";
  }

  ngOnInit(): void {
  }
}
