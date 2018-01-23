import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import {AuthGuard} from './auth-guard.service';

import { GeneralComponent } from './components/general/general.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const appRoutes: Routes = [

  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: '',
    redirectTo: '/general',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
