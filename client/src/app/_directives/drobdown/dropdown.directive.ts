import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') get opened(){
        return this.isOpened;
    }

    @HostListener('click') open(){
      this.isOpened = true;
    }

    @HostListener('mouseleave') close(){
      this.isOpened = false;
    }

    private isOpened = false;
}
