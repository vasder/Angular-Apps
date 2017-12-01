import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { MinicartComponent } from './components/minicart/minicart.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [MinicartComponent, CartComponent]
})
export class CartModule { }
