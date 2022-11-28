import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewNewsComponent } from './view-news/view-news.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const myRoute:Routes=[
 {
  path:"",
  component:AddnewsComponent,
  },
  {
    path:"view",
    component:ViewNewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddnewsComponent,
    ViewNewsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
