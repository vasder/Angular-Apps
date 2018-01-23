import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralComponent } from './components/general/general.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { ModalDirective } from './directives/modal.directive';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ContentsComponent } from './components/contents/contents.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    NotificationsComponent,
    ModalDirective,
    HeaderComponent,
    NavbarComponent,
    NavLeftComponent,
    NotfoundComponent,
    DatepickerComponent,
    ModalWindowComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
