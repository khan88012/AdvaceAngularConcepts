import { Directive, ElementRef, Input } from '@angular/core';
// The host property is used to define the host element and its corresponding event listeners for a custom directive.
// In Angular, when you create a custom directive using the @Directive decorator, you have the option to define how
//  the directive interacts with the host element. The host property allows you to set up event listeners and behavior on the host element itself.
@Directive({
  selector: '[appHighlight]',
  host:{
    '(click)': 'applyColor()'
  }
})
export class HighlightDirective {
  constructor(private el : ElementRef){}   //getting the refrence for that number sent from custom-directive component

  @Input() NumberToBeHighlighted = 0;
  @Input() DivisibleBy = 1;

  applyColor()
  {
    if(this.NumberToBeHighlighted % this.DivisibleBy === 0)
    {
      if(this.el)
      this.el.nativeElement.style.color = 'yellow';
    }
    else{
      if(this.el)
      this.el.nativeElement.style.color = 'red';


    }
  }

}
