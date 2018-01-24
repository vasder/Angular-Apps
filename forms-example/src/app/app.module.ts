import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddressComponent } from './components/address/address.component';
import { AddressService } from './address.service';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    NavbarComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
