import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule}from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCardsComponent } from './user-cards/user-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardsComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
