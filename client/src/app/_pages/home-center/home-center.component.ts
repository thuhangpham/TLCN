import { Component, OnInit, ElementRef, Input,ViewChild } from '@angular/core';
import { MatIcon} from '@angular/material';
import { VerifyService } from '../../_services/verify.service';
import { PostService } from '../../_services/post.service';
import { PostData } from '../../_models/post_data';
import { ApplySocketService } from '../../_socket/apply-socket.service';
import { appConfig } from '../../app.config';
import { utils } from '../../app.utils';
import { FacebookService, InitParams, FBShareComponent, UIParams, UIResponse } from 'ngx-facebook';
@Component({
  selector: 'app-home-center',
  templateUrl: './home-center.component.html',
  styleUrls: ['./home-center.component.css']
})
export class HomeCenterComponent implements OnInit {
  private currUser: any;
  public image: any;
  public show: any = false;
  public comments: any = 0;
  public startDate: any;
  public endDate: any;
  public txtReadMore: any = 'Read more...';
  private applies = [];
  public apply: any = 0;
  public txtApply: any = 'Apply';
  public isApply: any = false;
  @Input() post: PostData;
  createAt: any = '';

  constructor(private verifyService: VerifyService,
    private myElement: ElementRef,
    private postService: PostService,
    private fbService: FacebookService,
    private mApplySocket: ApplySocketService) {

  }

  ngOnInit() {
    this.startDate = this.post.info.start_date.toString().substr(0, 10);
    this.endDate = this.post.info.end_date.toString().substr(0, 10);
    this.createAt = utils.fomartDateTimeForComment(new Date(this.post.createdAt));

    this.post.owner.info.full_name = this.post.owner.info.first_name + ' ' + this.post.owner.info.last_name;
    this.applies = this.post.apply;
    this.apply = this.applies.length;

    this.verifyService.verify().then((res) => {
      if (res.result === 1) {
        this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;
        this.mApplySocket.join(this.currUser._id);
        this.image = this.currUser.image;

        this.post.apply.forEach(e => {
          console.log(e);
          if (this.currUser._id == e) {
            this.txtApply = 'Un Apply';
            this.isApply = true;
            return;
          }
        });


        this.mApplySocket.getUnApplyMessage().subscribe(msg => {
          if (JSON.parse(JSON.stringify(msg)).data._id == this.post._id) {
            console.log('co tin nhan un apply');
            this.txtApply = 'Apply';
            this.isApply = false;
            this.applies.splice(this.applies.indexOf(this.currUser._id), 1);
            this.apply = this.applies.length;
          }
        });

      } else {
      }
      // }else alert.error('');
    }).catch(err => { Promise.reject(err || 'error') });
  }
  readMore() {
    if (this.show) {
      this.show = false;
      this.txtReadMore = 'Read more...';
    }
    else {
      this.show = true;
      this.txtReadMore = 'Hide...';
    }
  }
  addReply() {
    this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;
    if (!this.currUser)
      return;
    let data = {
      user: this.currUser._id,
      _id: this.post._id
    };
    if (!this.isApply) {
      this.isApply = true;
      this.postService.addApply(data).subscribe(rs => {
        console.log(rs);
        this.applies[this.applies.length] = this.currUser._id;
        this.apply = this.applies.length;
        this.txtApply = 'Un Apply';
        console.log(this.post.owner._id);
        this.mApplySocket.apply({ room: this.currUser._id, data: this.post });
      }, err => {
        if (err)
          console.log(err || 'apply err');
      });
    } else {
      this.isApply = false;
      this.postService.unApply(data).subscribe(rs => {
        console.log(rs);
        this.applies.splice(this.applies.indexOf(this.currUser._id), 1);
        this.apply = this.applies.length;
        this.txtApply = 'Apply';
        this.mApplySocket.remove({ room:  this.currUser._id, data: this.post });
      }, err => {
        if (err)
          console.log(err || 'un apply err');
      });
    }
  }
  applySubmit() {
    this.verifyService.verify().then((res) => {
      if (res.result === 1) {
        this.addReply();
      } else {
        if (window.confirm('Please go to page login!')) {
          console.log('login');
          window.open(`${appConfig.WEB_SITE}/login`, '_blank');
          return false;
        }
      }
    }).catch(err => { Promise.reject(err || 'error') });
  }
  share(){
    // this.fbService.ui({
    //   method: 'share',
    //   href: 'https://developers.facebook.com/docs/',
    // }, function(response){});
 
    let params: UIParams = {
      // action_properties: JSON.stringify({
      //   // object:`${appConfig.WEB_SITE}`,
      //   object:'http://tlcn-mean.herokuapp.com/post_detail/'+this.post._id+''
      // }),
      // method: 'share_open_graph',
      href :'http://tlcn-mean.herokuapp.com/post_detail/'+this.post._id+'',
      quote: this.post.info.title + '',
      hashtag: '#'+this.post.info.areas_expertise.name,
      message: this.post.info.title + '',
      
      method: 'share',
      // action_type: 'og.likes',
    };
   
    this.fbService.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }
}
