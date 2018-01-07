import { Component, OnInit } from '@angular/core';
import { Users } from '../../_models/index';
import { Route } from '@angular/router';
import { FormControl } from '@angular/forms';

import { AlertService } from '../../_services/alert.service';
import { UsersService } from '../../_services/users.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  user: Users = new Users();
  password: String;
  password1: String;
  password2: string;
  loading: any = false;
  constructor(private userService: UsersService, private alertService: AlertService) {
    // const id = JSON.parse(localStorage.getItem('currentUser')).user._id;
    // this.userService.getUsersById(id).catch(err => { console.log(err) })
    //   .then(data => {
    //     if (data.result === 1) {
    //       console.log(data);
    //     }
    //   });
  }

  ngOnInit() {
  }
  changePass(val: any) {
    if (val) {
      this.loading = true;
      let id;
      if (localStorage.getItem('currentUser')) {
        id = JSON.parse(localStorage.getItem('currentUser')).user._id;
        this.userService.changePassword(id, this.password, this.password1).catch(err => {
          this.loading = false;
          this.alertService.success('Updated failed!');
        })
          .then(res => {
            this.loading = false;
            if(res.result==1){              
              this.alertService.success(res.msg || 'Updated successful!');
            }
            else this.alertService.error(res.msg || 'Updated failed!');
            console.log(res);
          });
      }
    }
  }
}
