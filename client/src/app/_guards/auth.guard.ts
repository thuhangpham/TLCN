import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { VerifyService } from '../_services/verify.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private verifyService: VerifyService) { }
  canActivate() {
    return this.verifyService.verify().then(res => {
      console.log(res);
      if (res.result) {
        return true;
      } else {
        this.route.navigate(['/login']);
        return false;
      }
    })
      .catch(err => {
        return false;
      });
  }
}
