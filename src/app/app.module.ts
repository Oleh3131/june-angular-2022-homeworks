import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import {UserResolver} from "./services/resolvers/user.resolver";
import {UserDetailsResolver} from "./services/resolvers/user-details.resolver";



let routes:Routes=[
  {path:'',component:MainLayoutComponent,children:[
      {path:'users',component:UsersComponent,resolve:{users:UserResolver}},
      {path:'users/:id',component:UserDetailsComponent,resolve:{user:UserDetailsResolver}}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
