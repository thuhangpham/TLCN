import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../_services/alert.service';
import { UsersService } from '../../_services/users.service';
import { PostService } from '../../_services/post.service';
import { ApplySocketService } from '../../_socket/apply-socket.service';

import { Users, PostData } from '../../_models/index';



@Component({
  selector: 'app-account-apply',
  templateUrl: './account-apply.component.html',
  styleUrls: ['./account-apply.component.css']
})
export class AccountApplyComponent implements OnInit {
  public postDatas: PostData[] = [];
  private user: Users = new Users();
  loading: any = true;

  constructor(
    private userService: UsersService,
    private alertService: AlertService,
    private mApplySocket: ApplySocketService,
    private postService: PostService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser') === null) {
      this.alertService.error('Please login to continuos!');
      return;
    }
    this.loadUsersApply();
  }
  loadUsersApply() {
    let id = JSON.parse(localStorage.getItem('currentUser')).user._id;

    this.mApplySocket.join(id);
    this.mApplySocket.getAppyMessages().subscribe(msg => {
      console.log('co tin nhan apply');
      this.postDatas[this.postDatas.length] = JSON.parse(JSON.stringify(msg)).data;
      this.alertService.success('#' + this.postDatas.length);
    });

    this.mApplySocket.getUnApplyMessage().subscribe(msg => {
      console.log('co tin nhan un-apply');
      let id = JSON.parse(JSON.stringify(msg)).data._id;
      this.postDatas.forEach((e, i) => {
        if (e._id == id) {
          this.postDatas.splice(i, 1);
          return;
        }
      });
      this.alertService.success('#' + this.postDatas.length);
      if (this.postDatas.length == 0)
        this.alertService.success('No item');
    });

    this.userService.getUserByIdApply(id).catch(err => {
      this.alertService.error('An error occured while get applies!');
      this.loading = false;
    }).then(data => {
      if (data.result == 1) {
        this.user = data.data;

        this.user.apply.forEach(a => {
          let p = new PostData();
          p = JSON.parse(JSON.stringify(a));
          this.postDatas[this.postDatas.length] = p;
          this.loading = false;
          // console.log(' postdata '+this.postDatas);
        });
        this.alertService.success('#' + this.postDatas.length);
        if (this.user.apply.length == 0) {
          this.alertService.success('No item');
          this.loading = false;
        }
      }
    });

  }
  remove(val) {
    // console.log(val);
    // console.log(val._id+" " + val.removed);
    // this.mApplySocket.remove({ room: this.user._id, data: this.postDatas[val.index] });
    this.mApplySocket.remove({ room: this.user._id, data: this.postDatas[val.index]});
    this.postDatas.splice(val.index,1);
    console.log('remove acount apply');    
    this.alertService.success(this.postDatas.length+'');
    if (this.postDatas.length == 0) {
      this.alertService.success('No item');
    }
  }
}
