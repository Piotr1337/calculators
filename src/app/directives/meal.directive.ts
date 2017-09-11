import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMeal]',
})
export class MealDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
