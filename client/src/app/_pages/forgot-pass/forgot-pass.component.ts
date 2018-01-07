import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmailService } from '../../_services/email.service';
import { UsersService } from '../../_services/users.service';
import { AlertService } from '../../_services/alert.service';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  public email: any = '';
  loading: any = false;
  isConfirm: any = false;
  code: any;
  codeReceived: any = -1;
  isReset: any = false;
  password1: any;
  password2: any;
  constructor(
    private sendEmail: EmailService,
    private userService: UsersService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  send(){
    this.loading = true;
    this.sendEmail.sendEMail(this.email)
    .catch(err=>{
      this.loading = false;
      console.log('send mail error ' + err);
    })
    .then(data=>{
      this.loading = false;
      if(data.result==1){
        this.alertService.success('Enter your code');
        this.isConfirm = true;
        this.codeReceived = data.data;
      }
      else{
        this.alertService.error(data.msg || 'An error occoured while send code!');
      }
      // console.log(JSON.stringify(data));
    });
  }
  confirm(){
    if(this.code==this.codeReceived){
      console.log('Confirmed!');
      this.isReset = true;
      this.alertService.success('Enter your new password');
    }
  }
  resetPass(){
    this.loading = true;
    this.userService.updatePassword(this.password1, this.email)
    .then(data=>{
      if(data.result==1){
        window.alert('Reset password successful!');
        this.router.navigate(['/login']);
        // console.log('rs OK ' + JSON.stringify(data));
      }
      else{
        this.alertService.error('An error occoured while reseting your password!');
        this.loading = false;
      }
    })
    .catch(err=>{
      this.loading = false;
      console.log('update pqss error ' + err);
    })
    console.log('Reset pass!');
  }
}
