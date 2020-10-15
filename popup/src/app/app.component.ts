import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  message: string;

  @Input() testArray: any[];

  @Output() myClick = new EventEmitter<string>();

  clickEvent() {
    this.myClick.emit('test element event');
  }
}
