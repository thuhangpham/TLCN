import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Users, Gender } from '../../_models/users';

import { AuthenService } from '../../_services/authen.service';
import { UsersService } from '../../_services/users.service';
import { AlertService } from '../../_services/alert.service';
import { VerifyService } from '../../_services/verify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // login with options
  options: LoginOptions = {
    scope: 'public_profile,email,pages_show_list,publish_actions,user_birthday,user_location',
    return_scopes: true,
    enable_profile_selector: true
  };
  public isLoginFB: any = false;
  public email: any;
  public password: any;
  public password1: any;
  public password2: any;
  public loading = false;
  isRouteHome = false;
  isNotEmail: any = false;
  public emailFB: any;
  private mGender: Gender = new Gender();

  constructor(private authen: AuthenService,
    private alert: AlertService, private router: Router,
    private verifyService: VerifyService,
    private titleService: Title,
    private userService: UsersService,
    private fbService: FacebookService) {

    verifyService.verify().then(res => {
      if (res.result === 1) {
        this.router.navigate(['/']);
      }
    }).catch(err => { Promise.reject(err || ''); });
  }
  ngOnInit() {
    this.fbInit();
    this.titleService.setTitle('Volunteer | Login');
  }
  login(value: any) {
    let that = this;
    if (value) {
      this.loading = true;
      this.authen.login(this.email, this.password).then((data) => {
        this.loading = false;
        if (data.result === 1) {
          if (data.data || data.token) {
            
            that.userService.updateLocal(data.data, data.token);
          }
          this.router.navigate(['/home']); 
        }
        else this.alert.error(data.msg);
      }).catch(err => {
        this.loading = false;
        this.alert.error(err);
        // console.log(err);
      });
    }
  }
  fbInit() {
    let initParams: InitParams = {
      appId: '172610086812672',
      xfbml: true,
      version: 'v2.8',
      status: true, // check login status
      cookie: true, // enable cookies to allow the server to access the session
    };
    this.fbService.init(initParams).catch(err => {
      // console.log(err);
    })
      .then(data => {
        // console.log(data);
      });
  }
  loginWithFB() {
    this.fbService.api('/me?fields=id,email')
      .then(res => {
        this.userService.loginWithFB(res.email).then(data => {
          // console.log(data);
          if (data.result == 1) {
            this.userService.updateLocal(data.data, data.token);
            // window.open('/');
            this.router.navigate(['/']);
          }
        }).catch(
          err => {
            // console.log(err);
          });
        // console.log(res);
      });
  }
  loginWithFacebook(): void {
    this.loading = true;
    this.fbService.login(this.options)
      .then((response: LoginResponse) => {
        // console.log(response);
        if (response.status == 'connected') {
          
          this.fbService.api('/me?fields=id,email')
          .then(res => {
            this.userService.checkLoginFB(response.authResponse.userID, 'FACEBOOK', res.email) // da co tai khoang chua?
            .then(data => {
              // console.log('check fb '+JSON.stringify(data));
              if (data.result == 1) {
                this.loginWithFB(); // LOGIN with fb
                this.loading = false;
              }
              else{ // Tao tai khoan moi
                this.isLoginFB = true;
                this.loading = false;
                if(!res.email){
                  this.isNotEmail = true;
                }
              }
            })
            .catch(err => {
                console.log(err);
            });
            // console.log(res);
          });
        }
      })
      .catch((error: any) => console.error(error));
  }
  loginFB(value) {
    if (value) {
      this.loading = true;
      this.fbService.api('/me?fields=id,name,email,permissions,first_name,last_name,birthday,location,gender')
        .then(res => {
          let u = new Users();
          u.info.name = res.name;
          u.provider = 'FACEBOOK';
          u.image = `https://graph.facebook.com/${res.id}/picture?type=large`;
          u.password = this.password1;
          u.id = res.id;
          u.info.first_name = res.first_name;
          u.info.last_name = res.last_name;

          u.info.gender = this.mGender.compare(res.gender);          
          u.contact.email = res.email;
          if(this.isNotEmail)
            u.contact.email = this.emailFB;
          u.address_residence.address = '';
          if(res.location)
            u.address_residence.address =(res.location.name + '') || '';
        
          u.address_residence.longitude = 0;
          u.address_residence.latitude = 0;
          u.info.dob = new Date(res.birthday+'');
          this.userService.addUsers(u).subscribe(data => {
            // console.log(data);
            if (data.json().result == 1) {
              this.userService.updateLocal(data.json().data, data.json().token);
              this.router.navigate(['/']);
            }
            this.loading = false;
          },
            err => {
              // console.log(err);
            });
          // console.log(res);
        });
    }
  }
}

