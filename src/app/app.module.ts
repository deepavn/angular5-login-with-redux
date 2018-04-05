import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
/* Routing Modules */
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

/* NGRX State Management Modules */
import { StoreModule } from '@ngrx/store';
import { LoginReducer } from './login/login.reducer';

let RootReducer = {
  TheUser: LoginReducer 
}

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , LoginModule
    , StoreModule.forRoot(RootReducer)
    , RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
