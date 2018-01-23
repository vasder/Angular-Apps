import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import {AuthGuard} from './auth-guard.service';

import { GeneralComponent } from './components/general/general.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContentsComponent } from './components/contents/contents.component';

const appRoutes: Routes = [

  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  // {
  //   path: 'contents',
  //   redirectTo: '/contents',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: '/modal',
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
