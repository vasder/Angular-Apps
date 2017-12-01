import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderconfirmationComponent } from './components/orderconfirmation/orderconfirmation.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [OrderconfirmationComponent, DeliveryComponent]
})
export class OrderModule { }
