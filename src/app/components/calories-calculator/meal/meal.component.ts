import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Product } from '../../../models/product.model';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  displayedColumns = ['PRODUKT', 'ILOŚĆ', 'KCAL', 'BIAŁKO'];
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  items: FirebaseListObservable<Product[]>;
  foods = [];
  _ref: any;

  dataSource;
  constructor(db: AngularFireDatabase) {
      db.list('/products').subscribe(x => {
      this.foods = x;
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : []);
  }

  filter(val: string): string[] {
    if (val.length >= 3) {
      return this.foods.filter(option =>
        option.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
  }

  onMealRemove(event) {
    this._ref.destroy();
  }
}

export class ProductsDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  data;
  constructor(data) {
    super();
    this.data = data;
  }

  connect(): Observable<Element[]> {
    return Observable.of(this.data);
  }

  disconnect() {}
}

