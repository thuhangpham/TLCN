import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Users, PostData } from '../../_models/index';

import { AlertService } from '../../_services/alert.service';
import { UsersService } from '../../_services/users.service';
import { PostService } from '../../_services/post.service';
import { appConfig } from '../../app.config';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  id: number;
  private sub: any;
  post: PostData = new PostData();



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
      this.loadPost();  
      // In a real app: dispatch action to load the details here.
    });
    
    console.log(this.id);
  }
  loadPost(){
    this.postService.getPostById(this.id).catch(err=>{
      window.alert('An error has occured when load post!');
    })
    .then(data=>{
      this.post = data.data;       
    });
  }
  

}
