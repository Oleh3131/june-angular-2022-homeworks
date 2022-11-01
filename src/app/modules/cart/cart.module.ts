import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CartsComponent} from './components/carts/carts.component';
import {CartComponent} from './components/cart/cart.component';
import {CartDetailsComponent} from './components/cart-details/cart-details.component';
import {CartService} from "./services";
import {CartRoutingModule} from "./cart-routing.module";


@NgModule({
  declarations: [
    CartsComponent,
    CartComponent,
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule
  ],
  providers: [
    CartService
  ]
})
export class CartModule {
}
