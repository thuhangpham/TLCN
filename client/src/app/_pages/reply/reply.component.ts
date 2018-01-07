import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ReplyData } from '../../_models/comment';
import { Users } from '../../_models/index';


import { ReplyService } from '../../_services/reply.service';
import { SocketService } from '../../_socket/socket.service';
import { CommentSocketService } from '../../_socket/comment-socket.service';
import { VerifyService } from '../../_services/verify.service';
import { AddReplyListenerService } from '../../_services/add-reply-listener.service';

import { appConfig } from '../../app.config';
import { utils } from '../../app.utils';
@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  public isReply: any = false;
  public replyVal: any;
  public create_at: any;
  public isShowUpdate: boolean = false;
  public isEditComment: boolean = false;
  public user: Users = new Users();
  editCmtModel: string;

  @Input() index: Number = new Number();
  @Output('deleteReply') deleteCmt: EventEmitter<any> = new EventEmitter();
  @Output('editReply') editCmt: EventEmitter<any> = new EventEmitter();

  @Input() reply: ReplyData = new ReplyData();

  constructor(
    private replyService: ReplyService,
    private mSocket: SocketService,
    private verifyService: VerifyService,
    private _addReplyService: AddReplyListenerService
  ) { }

  ngOnInit() {
    var d = new Date(this.reply.createdAt);
    this.create_at = utils.fomartDateTimeForComment(d);
    this.editCmtModel = this.reply.content + '';
    this.valuechange(event);
  }
  submitReply() {
    // this.outReply.emit({"id":this.comment._id,val:this.replyVal, create_at:this.comment.create_at});
    this.isReply = false;
    this.replyVal = '';
  }
  subReply() {
    if (!this.isReply) {
      this.isReply = true;
      console.log('ad reply click');
      // this.outReply.emit({"click":true});
    }
    else this.isReply = false;
  }
  valuechange($event) {
    this.verifyService.verify().catch(err => {

    }).then(data => {
      if (data.result === 1) {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
      }
      else {
        if (window.confirm('Please go to page login!')) {
          this.isReply = false;
          window.open(`${appConfig.WEB_SITE}/login`, '_blank');
          return false;
        }
      }
    });
    return true;
  }
  onHovering($event) {
    if (this.user._id == this.reply.owner._id)
      this.isShowUpdate = true;
  }
  onUnovering($event) {
    this.isShowUpdate = false;
  }
  editReplyExcute() {
    if (this.editCmtModel.trim().length == 0)
      return;
    console.log('edit reply');
    this.reply.content = this.editCmtModel;
    this.editCmt.emit({ 'index': this.index + '', '_id': this.reply._id, 'reply': this.reply });
    this._addReplyService.updatedListener().subscribe(_id => {
      if (_id == this.reply._id) {
        this.isEditComment = false;
      }
    });
  }
  change() {
    this.valuechange(event);
  }
  editReply() {
    if (!this.isEditComment) {
      this.isEditComment = true;
    }
    // var e = document.getElementById('content-cmt');
    // var input = document.createElement('input');
    // var button = document.createElement('button');
    // input.className = 'form-control';
    // input.value = this.comment.content+'';
    // input.style.borderRadius = '10px 0 0 10px';
    // input.style.height = '28px';
    // input.style.width = '80%';
    // input.style.fontSize = '13px';
    // input.style.marginLeft = '35px'
    // e.parentNode.replaceChild(input, e);
    //this.editCmt.emit({'index': this.index+'','_id': this.comment._id, 'comment':this.comment});
  }
  deleteReply() {
    console.log('item-cmment: ' + this.index);
    this.deleteCmt.emit({ 'index': this.index + '', '_id': this.reply._id });
  }
}
