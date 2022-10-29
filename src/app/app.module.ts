import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {MainLayoutComponent} from "./layout";
import {CardPageComponent, ProductPageComponent} from "./pages";
import {
  CardComponent,
  CardDetailsComponent,
  CardsComponent,
  HeaderComponent,
  NotFoundPageComponent, ProductComponent, ProductDetailsComponent, ProductsComponent
} from "./components";


const routes: Routes = [

  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: 'products', component: ProductPageComponent},
      {path: 'products/:id', component: ProductDetailsComponent},
      {path: 'cards', component: CardPageComponent},
      {path: 'cards/:id', component: CardDetailsComponent},
    ]
  },
  {path: '**', component: NotFoundPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProductPageComponent,
    CardPageComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    CardsComponent,
    CardComponent,
    CardDetailsComponent,
    HeaderComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
