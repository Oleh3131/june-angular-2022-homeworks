import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";


const routes:Routes =[

  {path:'',component:MainLayoutComponent,children:[
      {path:'products',loadChildren:()=>import('./modules/product/product.module').then(value =>value.ProductModule)},
      {path:'carts',loadChildren:()=>import('./modules/cart/cart.module').then(value =>value.CartModule )},
      {path:'users',loadChildren:()=>import('./modules/user/user.module').then(value =>value.UserModule)}
    ]}

] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
