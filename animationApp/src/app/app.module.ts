import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SwapimgComponent } from './swapimg/swapimg.component';
import { MoveimageComponent } from './moveimage/moveimage.component';
import { RotateimageComponent } from './rotateimage/rotateimage.component';


@NgModule({
  declarations: [
    AppComponent,
    SwapimgComponent,
    MoveimageComponent,
    RotateimageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
