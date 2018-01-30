import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBR_U8cGcmX4hYBXXrQowjKPma2tAc25X4",
    authDomain: "fitness-app-3da67.firebaseapp.com",
    databaseURL: "https://fitness-app-3da67.firebaseio.com",
    projectId: "fitness-app-3da67",
    storageBucket: "fitness-app-3da67.appspot.com",
    messagingSenderId: "435325683141"
  };
*/