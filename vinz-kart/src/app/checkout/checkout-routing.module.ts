import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard], // We add multiple guards here
    children: [
      {
        path: 'shipping',
        component: ShippingComponent,
        pathMatch: 'full'
      },
      {
        path: 'payment',
        component: PaymentComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
