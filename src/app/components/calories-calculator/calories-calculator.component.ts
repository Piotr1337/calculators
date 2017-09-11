import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/observable/of';
import { Product } from '../../models/product.model';
import { MealComponent } from './meal/meal.component';
import { MealDirective } from '../../directives/meal.directive';

@Component({
  selector: 'app-calories-calculator',
  templateUrl: './calories-calculator.component.html',
  styleUrls: ['./calories-calculator.component.css']
})
export class CaloriesCalculatorComponent implements OnInit {
  @ViewChild(MealDirective) appMeal: MealDirective;

  constructor(db: AngularFireDatabase,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
  }

  onAddMeal() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(MealComponent);
    const ref = this.appMeal.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

}
