import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {CommentPageComponent, PostPageComponent} from "./pages";
import {
  CommentComponent,
  CommentDetailsComponent, CommentsComponent,
  HeaderComponent, PostComponent,
  PostDetailsComponent,
  PostsComponent
} from "./components";
import {MainLayoutComponent} from "./layout";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'posts', pathMatch: 'full'},
      {path: 'posts', component: PostPageComponent, children: [
          {path: ':id', component: PostDetailsComponent}
        ]
      },
      {path: 'comments', component: CommentPageComponent, children: [
          {path: ':id', component: CommentPageComponent}
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    PostPageComponent,
    CommentPageComponent
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
