import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PostData } from '../../_models/index'
import { appConfig } from '../../app.config';
import { PostService } from '../../_services/post.service';
import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-post',
  templateUrl: './account-post.component.html',
  styleUrls: ['./account-post.component.css']
})
export class AccountPostComponent implements OnInit {
  private currUser: any;
  public postDatas: PostData[] = [];
  // public displayedColumns = ['title', 'location', 'start_date', 'end_date', 'apply', 'list_apply', 'edit', 'remove'];
  public displayedColumns = ['title', 'location','apply', 'list_apply', 'edit', 'remove', 'status']; 
  public dataSource: any;
  public post: PostData = new PostData();
  loading: any = false;
  constructor(
    private alertService: AlertService,
    private postService: PostService,
    private route: Router
  ) {

  }

  checkAuth(): boolean {
    if (!JSON.parse(localStorage.getItem('currentUser'))) {
      this.alertService.error('Please login to continuos!');
      return false;
    } else
      return true;
  }
  ngOnInit() {
    
    if (this.checkAuth()) {
      this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;
      this.loadPosts();
    } else {

      return;
    }
  }
  loadPosts() {
    if (!this.checkAuth())
      return;
    this.postService.getPostsByUserId(appConfig.LIMIT, 0, this.currUser._id)
      .catch(err => {
        console.log(err || 'Server error!');
        window.alert(err || 'Server error!');
      })
      .then(data => {
        console.log(data);
        // this.postDatas = data.data;
        data.data.forEach(e => {
          e.applies = e.apply.length;
          e.info.start = e.info.start_date.toString().substring(0, 10);
          e.info.end = e.info.end_date.toString().substring(0, 10);
          this.postDatas.push(e);
          this.dataSource = new MatTableDataSource<PostData>(this.postDatas);
        })

      });
  }
  viewApply(e) {
    this.post = e;
    console.log(e);
  }
  edit(id) {
    window.open(`${appConfig.WEB_SITE}/post/update/${id}`, '_blank');
    // this.route.navigate(['/post', {id:id}]);
    console.log(id)
  }
  remove(e) {
    this.loading = true;
    this.postService.removePostById(e._id).catch(err => {
      window.alert('An error occurred while removing!');
    })
      .then(data => {
        if (data.result == 1) {
          this.postDatas.forEach((el, i) => {
            if (el._id == e._id) {
              
              if(this.post._id==e._id)
                this.post = new PostData();
              this.postDatas.splice(i, 1);
              console.log('Xoa!');
              this.dataSource = new MatTableDataSource<PostData>(this.postDatas);
              this.loading = false;
              return;
            }
          });

        }
      });
  }
  close(e: PostData){
    console.log(e)
    this.loading = true;
    let data ='0';
    if(e.info.close_post != '1')
      data = '1';
      console.log(data);
    this.postService.closePost(e._id,data).catch(err=>{
      console.log(err);
      this.loading = false;
    })
    .then(dt=>{
      if(dt.result==1){
        let i = this.postDatas.indexOf(e)
        e.info.close_post = data;
        console.log('index ',i);
        this.postDatas[i] = e;
      }
      else console.log(dt.msg);
      this.loading = false;
      })  
  }
}

