import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { VerifyService } from '../_services/verify.service';

@Injectable()
export class LogedinGuard implements CanActivate {
  constructor(
    private router: Router,
    private verifyService: VerifyService,
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.verifyService.verify().then(res => {
      console.log(res);
      if (res.result) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    })
      .catch(err => {
        return false;
      });
  }
}
