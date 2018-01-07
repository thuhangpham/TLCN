import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Users, UserData, PostData, Gender } from '../../_models/index';

import { AlertService } from '../../_services/alert.service';
import { UsersService } from '../../_services/users.service';
import { PostService } from '../../_services/post.service';
import { appConfig } from '../../app.config';
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  id: number;
  private sub: any;
  user: UserData = new UserData();
  postCount: any = 0;
  public postDatas: PostData[] = [];
  dob: any = '';
  isEmpl: any = false;
  isArea: any = false;
  constructor(
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UsersService,
     private alertService: AlertService
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      // this.id = +params['id']; // (+) converts string 'id' to a number
      this.id = params['id']; // (+) converts string 'id' to a number
      this.getUserbyId();
      // In a real app: dispatch action to load the details here.
    });
    this.loadPosts();
    console.log(this.id);

  }
  loadPosts() {
    this.postService.getPostsByUserId(appConfig.LIMIT, 0, this.id+'')
      .catch(err => {
        console.log(err || 'Server error!');
        window.alert(err || 'Server error!');
      })
      .then(data => {
        // console.log(data);
        // this.postDatas = data.data;
        data.data.forEach(e => {
          e.applies = e.apply.length;
          e.info.start = e.info.start_date.toString().substring(0, 10);
          e.info.end = e.info.end_date.toString().substring(0, 10);
          this.postDatas.push(e);
          this.postCount = this.postDatas.length;  
        });
    
      });
  }
  getUserbyId(){
    this.userService.getUsersById(this.id).catch(err => { console.log(err) })
    .then(data => {
      if (data.result === 1) {
        // console.log(data);
        this.user = data.data;

        this.dob = (this.user.info.dob + '').substring(0, 10);
        appConfig
        let g: Gender =new Gender();
        this.user.info.gender = g.getGender(this.user.info.gender);
        if(this.user.info.employment_sitution)
          this.isEmpl = true;
          if(this.user.info.areas_expertise)
          this.isArea = true;
        // console.log(this.user.info);
        // this.last_name = this.user.info.last_name;
        // this.first_name = this.user.info.first_name;
        // this.gender = this.user.info.gender;
        // this.load = false;
        // this.message = '';
      }
    });
  }

}
