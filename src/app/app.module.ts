import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CaloriesCalculatorComponent } from './components/calories-calculator/calories-calculator.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule, } from '@angular/material';
import { MealComponent } from './components/calories-calculator/meal/meal.component';
import { MealDirective } from './directives/meal.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CaloriesCalculatorComponent,
    HomeComponent,
    MealComponent,
    MealDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'calories',
        component: CaloriesCalculatorComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MealComponent]
})
export class AppModule { }
