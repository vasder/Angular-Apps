import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<boolean> {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  constructor(
    private auth: AuthService,
    private router: Router) {
  }

  // canActivate() {
  //   if (this.auth.isLoggedin) {
  //     return true;
  //   }
  //   this.router.navigate(['/login']);
  //   return false;
  // }

  canActivate(activatedRoute, routerState) {
    if (this.auth.isLoggedin) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canDeactivate() {
    return true;
  }

}
