import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Comment, CommentData, ReplyData, Reply } from '../../_models/comment';
import { Users } from '../../_models/index';

import { ReplyService } from '../../_services/reply.service';
import { SocketService } from '../../_socket/socket.service';
import { CommentSocketService } from '../../_socket/comment-socket.service';
import { VerifyService } from '../../_services/verify.service';
import { AddReplyListenerService } from '../../_services/add-reply-listener.service';

import { appConfig } from '../../app.config';
import { utils } from '../../app.utils';

@Component({
  selector: 'app-item-comment',
  templateUrl: './item-comment.component.html',
  styleUrls: ['./item-comment.component.css']
})
export class ItemCommentComponent implements OnInit {

  public isReply: any = false;
  @Input() comment: CommentData = new CommentData();
  @Input() index: Number = new Number();
  @Output('deleteComment') deleteCmt: EventEmitter<any> = new EventEmitter();
  @Output('editComment') editCmt: EventEmitter<any> = new EventEmitter();

  // @Output('outReply') outReply: EventEmitter<any> = new EventEmitter();
  // @Output('changeReply') changeReply: EventEmitter<any> = new EventEmitter();
  public repliesList: ReplyData[] = new Array();
  private repComment: Comment = new Comment();
  public replyVal: any;
  public create_at: any;
  public isReplyRemaining: any = false;
  public loadingReply: any = false;
  public countReplyRemaining: any = 0;
  public user: Users = new Users();
  public isAdding: any = false;
  public isShowUpdate: boolean = false;
  public isEditComment: boolean = false;
  editCmtModel: string;
  socket: any;
  constructor(
    private replyService: ReplyService,
    private mSocket: CommentSocketService,
    private verifyService: VerifyService,
    private _addReplyListener: AddReplyListenerService
  ) { 
    this.user._id = '';
    this.valuechange(event);

  }
  valuechange($event) {
    this.verifyService.verify().catch(err => {

    }).then(data => {
      if (data.result === 1) {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
      }
      else {
        // if (window.confirm('Please go to page login!')) {
        //   this.isReply = false;
        //   // window.open(`${appConfig.WEB_SITE}/login`, '_blank');
        //   return false;
        // }
        return false;
      }
    });
    return true;
  }
  addReply() {
    if (this.valuechange(event) && this.replyVal) {
      this.user = JSON.parse(localStorage.getItem('currentUser')).user;
      if (!this.user)
        return;
      this.isAdding = true;
      let myReply: Reply = new Reply();
      myReply.content = this.replyVal;
      myReply.owner = this.user._id;
      myReply.comment = this.comment._id;

      this.replyService.addReply(myReply).then(data => {
        // this.repliesList[this.repliesList.length] = data.data;
        this.replyVal = '';
        this.isReply = false;
        this.isAdding = false;
        // this._addReplyListener.newReply(myReply._id);
        this.mSocket.addReply({ 'room': this.comment._id, 'data': data.data });
      }).catch(err => {
        console.log(err || 'error');
      });
    }
  }
  ngOnInit() {
    this.mSocket.join(this.comment._id);
    var d = new Date(this.comment.createdAt);
    this.create_at = utils.fomartDateTimeForComment(d);
    this.getReplies(appConfig.LIMIT_REPLY);
    this.editCmtModel = this.comment.content + '';
    this.mSocket.getReplyMessage().subscribe(data=>{
      console.log('co tin nhan add reply na cha!' );
      let rl = new ReplyData();
      rl = JSON.parse(JSON.stringify(data)).data;
      if(rl.comment == this.comment._id)
        this.repliesList[this.repliesList.length] = rl;
    },err=>{
      console.log('err from socket add reply ' + err);
    });
  }
  reply() {
    if (this.valuechange(event)) {
      if (!this.isReply) {
        this.isReply = true;
        console.log('ad reply click');
      }
      else this.isReply = false;
    }
  }
  change() {
    // console.log('Enter');
    // this.outReply.emit({ "click": true });
  }
  submitReply() {
    this.addReply()
  }
  getReplies(limit) {
    this.loadingReply = true;
    this.replyService.getReplies(this.comment._id, limit,
      this.repliesList.length)
      .catch(err => {
        console.log(`get reply err${err}`);
      })
      .then(data => {
        let arr: ReplyData[] = new Array();
        arr = data.data || [];
        arr.reverse();
        this.repliesList = [...arr, ...this.repliesList];
        if ((data.number || 0) > 0)
          this.isReplyRemaining = true;
        else this.isReplyRemaining = false;
        this.loadingReply = false;
        // console.log(data);
      });
  }
  loadmoreReplies() {
    this.getReplies(appConfig.LIMIT_REPLY + 2);
  }
  onHovering($event) {
    if (this.user._id==this.comment.owner._id)
      this.isShowUpdate = true;
  }
  onUnovering($event) {
    this.isShowUpdate = false;
  }
  editCmtExcute() {
    if (this.editCmtModel.trim().length == 0)
      return;
    this.comment.content = this.editCmtModel;
    this.editCmt.emit({ 'index': this.index + '', '_id': this.comment._id, 'comment': this.comment });
    this._addReplyListener.updatedListener().subscribe(_id => {
      if (_id == this.comment._id) {
        this.isEditComment = false;
      }
    });
  }
  editComment() {
    if (!this.isEditComment) {
      this.isEditComment = true;
    }
  }
  deleteComment() {
    console.log('item-cmment: ' + this.index);
    this.deleteCmt.emit({ 'index': this.index + '', '_id': this.comment._id });
  }
  editReply(dt) {
    console.log('comment.component edit: ' + dt);
    this.replyService.updateReply(dt._id, dt.reply).catch(err => {
      window.alert('An error has occurred!');
      console.log('error ' + err);
    })
      .then(data => {
        if (data.result == 1) {
          this.repliesList[dt.index].content = dt.reply.content;
          this._addReplyListener.updated(dt._id);
        }
      });
  }
  deleteReply(dt) {
    // console.log(JSON.stringify(data));
    if (window.confirm('Are you sure you want to delete this comment?'))
      this.replyService.deleteReply(dt._id).catch(err => {
        window.alert('An error has occurred!');
      })
        .then(data => {
          if (data.result == 1) {
            this.repliesList.splice(dt.index, 1);
            this._addReplyListener.updated(dt._id);
          }
        });
  }

}