import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(loginDetails) {
    if (loginDetails.userid === 'admin@admin.com' && loginDetails.password === 'welcome') {
      sessionStorage.setItem('userid', loginDetails.userid);
      return true;
    }
    return false;
  }

  isLoggedin() {
    const userId = sessionStorage.getItem('userid');
    if (userId) {
      return true;
    }
    return false;
  }

  logout() {

  }

}
