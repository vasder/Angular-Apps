import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddressComponent } from './components/address/address.component';
import { AddressService } from './address.service';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    NavbarComponent,
    AddressComponent,
    DynamicformComponent,
    TemplateformComponent,
    MenubarComponent,
    HeaderComponent,
    FooterComponent
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
