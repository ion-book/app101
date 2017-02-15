import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[my-highlight]' // Attribute selector
})
export class MyHighlightDirective {

  constructor(public element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
