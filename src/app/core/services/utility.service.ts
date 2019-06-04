import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private router: Router) { }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  navigateToLogin() {
    this.navigate('/sessions/signin');
  }

  navigateToError() {
    this.navigate('/sessions/404');
  }

  navigateToHome() {
    this.navigate('/dashboard/home');
  }

  reloadPage() {
    window.location.reload();
  }
}
