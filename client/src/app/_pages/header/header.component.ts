import { Component, OnInit } from '@angular/core';

import { Users } from '../../_models/users';
import { VerifyService } from '../../_services/verify.service';
import { AlertService } from '../../_services/alert.service';
import { DropdownDirective } from '../../_directives/drobdown/dropdown.directive';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogin = false;
  isRouteLogin = false;
  isRouteSignup = false;
  image = '';
  username = '';
  currUser:Users = new Users();
  constructor(private route: Router, private alert: AlertService,
    private verifyService: VerifyService) {

    verifyService.verify().then((res) => {
      if (res.result === 1) {
        this.isLogin = true;
        this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;
      } else {
      }
      // }else alert.error('');
    }).catch(err => { Promise.reject(err||'error') });

    if (window.location.pathname === '/login' || this.route.url === '/login')
      this.isRouteLogin = true;
    if (window.location.pathname === '/signup' || this.route.url === '/signup')
      this.isRouteSignup = true;
    console.log(window.location.pathname);
    console.log('this.route.url ' + this.route.url);
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.route.navigate(['/login']);
  }
  signup() {
    this.route.navigate(['/signup']);
  }
  login() {
    this.route.navigate(['/login']);
  }
}
