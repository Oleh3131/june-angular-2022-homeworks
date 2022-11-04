import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
