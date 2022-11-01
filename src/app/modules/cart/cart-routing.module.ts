import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {CartsComponent} from "./components/carts/carts.component";
import {CartDetailsComponent} from "./components/cart-details/cart-details.component";


const routes:Routes=[
  {path:'',component:CartsComponent},
  {path:':id',component:CartDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CartRoutingModule { }
