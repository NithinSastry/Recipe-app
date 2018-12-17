import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class AppDropDownDirective {
  @HostBinding('class.open')
  isOpen = false;

  @HostListener('click')
  toggleOpen(){
    this.isOpen=!this.isOpen;
  }
  constructor() { }

}
