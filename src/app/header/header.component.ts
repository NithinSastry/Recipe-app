import { Component, Output, EventEmitter } from '@angular/core';

@Component({
     selector: 'app-header',
     templateUrl: './header.component.html',
     styleUrls: ['./header.component.css']
})
export class HeaderComponent {
     @Output("headerSelected")
     headerSelect: EventEmitter<string> = new EventEmitter<string>();

     constructor() {

     }

     onSelect(optionSelected: string) {
          console.log(optionSelected);
          this.headerSelect.emit(optionSelected);
     }
}