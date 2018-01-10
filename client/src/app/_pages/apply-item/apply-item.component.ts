import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PostData } from '../../_models/post_data';

import { PostService } from '../../_services/post.service';
import { VerifyService } from '../../_services/verify.service';
import { AlertService } from '../../_services/alert.service';
import { ApplySocketService } from '../../_socket/apply-socket.service';
@Component({
  selector: 'app-apply-item',
  templateUrl: './apply-item.component.html',
  styleUrls: ['./apply-item.component.css']
})
export class ApplyItemComponent implements OnInit {
  @Input() p: PostData = new PostData();
  @Input() index: any = 0;
  @Output("remove") removed: EventEmitter<any> = new EventEmitter();;
  public startDate: any;
  public endDate: any;
  private currUser: any;
  click: any = false;

  constructor(
    private verifyService: VerifyService,
    private postService: PostService,
    private alertService: AlertService,
    private mApplySocket: ApplySocketService
  ) { }

  ngOnInit() {
    this.verifyService.verify().then((res) => {
      if (res.result === 1) {
        this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;

      } else {
        return;
      }
      // }else alert.error('');
    }).catch(err => { Promise.reject(err || 'error') });

    this.startDate = this.p.info.start_date.toString().substr(0, 10);
    this.endDate = this.p.info.end_date.toString().substr(0, 10);
  }
  remove() {
    this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;
    if (!this.currUser) {
      window.alert('!expire session!');
      return;
    }
    this.click = true;
    let data = {
      user: this.currUser._id,
      _id: this.p._id
    };
    this.postService.unApply(data).then(rs => {
      // console.log(rs);
      if (rs.result == 1) {
        // console.log('removed');
        this.removed.emit({ removed: 1, _id: this.p._id, index: this.index });
      } else this.alertService.error(rs.msg || 'Error while un apply this post!');
    }).catch(err => {
      if (err)
        this.alertService.error('Error while un apply this post!');

      this.click = false;
    });
  }

}
