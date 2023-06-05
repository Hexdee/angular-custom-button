import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() id!: string;
  @Input() displayText!: string;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.buttonClick.emit(this.id);
  }
}
