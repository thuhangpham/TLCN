import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PostData } from '../../_models/post_data';

import { PostService } from '../../_services/post.service';
import { VerifyService } from '../../_services/verify.service';
import { AlertService } from '../../_services/alert.service';
import { ApplySocketService } from '../../_socket/apply-socket.service';
@Component({
  selector: 'app-account-post-item',
  templateUrl: './account-post-item.component.html',
  styleUrls: ['./account-post-item.component.css']
})
export class AccountPostItemComponent implements OnInit {
  @Input() p: PostData = new PostData();
  
  constructor() { }

  ngOnInit() {
    // this.p.owner._id
  }
  update(){}
  remove(){}

}
