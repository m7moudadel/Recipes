import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

@HostBinding('class.open') isOpen =false
@HostListener('click') toggleOpen(){
  this.isOpen= !this.isOpen
}
  constructor(private _ElementRef:ElementRef ,private  _Renderer2:Renderer2) { }

 }
