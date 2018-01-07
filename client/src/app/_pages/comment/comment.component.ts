import { Component, OnInit, ElementRef, ViewChild, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import * as io from "socket.io-client";

import { ReplyService } from '../../_services/reply.service';
import { CommentService } from '../../_services/comment.service';
import { PostService } from '../../_services/post.service';
import { VerifyService } from '../../_services/verify.service';
import { AddReplyListenerService } from '../../_services/add-reply-listener.service';

import { SocketService } from '../../_socket/socket.service';
import { CommentSocketService } from '../../_socket/comment-socket.service';

import { Comment, CommentData, Reply } from '../../_models/comment';
import { PostData, Users, Post } from '../../_models/index';
import { appConfig } from '../../app.config';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @ViewChild('txtComment') txtComment;
  @Input() post: PostData;
  public updatePost: Post = new Post();
  public comments: CommentData[] = new Array();
  public countComments: any = 0;
  public commentVal: string = '';
  public user: Users = new Users();
  public loadingComment: any = false;
  public loadmoreComment: any = false;
  public isCommentRemaining: any = false;
  public commentRemaining: any = 0;
  public isAdding: any = false;
  public isShowComment: boolean = true;
  socket: any;
  // socket = io(appConfig.socket);
  constructor(
    private postService: PostService,
    private verifyService: VerifyService,
    private mSocket: SocketService,
    private mCommentSocket: CommentSocketService,
    private commentService: CommentService,
    private replyService: ReplyService,
    private _addReplyListener: AddReplyListenerService
  ) { }

  ngOnInit() {
    let that = this;
    // this.socket.on('connect', function (data) {
    //   // consolelog("connected");
    // });
    this.mCommentSocket.join(this.post._id);
    this.mCommentSocket.getCommentMessages().subscribe(data => {
      // consolelog('co tin nhan ne ' + JSON.stringify(data));
      let cmt = new CommentData();
      if(cmt.owner._id!=this.user._id)
        
      cmt = JSON.parse(JSON.stringify(data)).data;
      this.comments[this.comments.length] = cmt;
    }, err => {
      // consolelog();
    });
    this.countCommentsByPost(0);
    this.showComment();
    // this.comments = this.post.comments;
    // this.countComments = this.comments.length;
    // this.comments.forEach(e => {
    //   this.countComments += e.reply.length;
    // });
    // listener new reply from item-comment component
    this._addReplyListener.newReplyListtener().subscribe((_idReply) => {
      // this.mCommentSocket.addReply({'room':this.post._id, 'data':this.commentVal});
      this.countCommentsByPost(0);
    });
  }
  countCommentsByPost(skip): any {
    this.postService.countCommentByPostId(this.post._id, skip).catch(err => {
      return 0;
    })
      .then(data => {
        this.countComments = data.data || 0;
        // consolelog('count comment ' + JSON.stringify(data));
        return this.countComments;
      });
  }
  comment() {
    if ((this.txtComment.nativeElement.value + '').trim().length > 0) {
      this.isAdding = true;
      let cmt = new Comment();
      cmt.post = this.post._id;
      // cmt.content = this.txtComment.nativeElement.value;
      cmt.content = (this.txtComment.nativeElement.value + '').trim();
      cmt.owner = this.user._id;
      cmt.createdAt = new Date();

      this.commentService.addComment(cmt).catch(err => {
        window.alert('Server error! (add comment)');
      })
        .then(data => {
          // this.comments[this.comments.length] = data.data;
          this.countCommentsByPost(0);
          // consolelog(data);
          this.txtComment.nativeElement.value = '';
          this.isAdding = false;
          // this.socket.emit('add-comment', { 'room': this.post._id, 'data': cmt });
          this.mCommentSocket.addComment({ 'room': this.post._id, 'data': data.data });
        });
    }
    // consolelog(this.txtComment.nativeElement.value);
  }
  valuechange($event) {
    this.verifyService.verify().catch(err => {

    }).then(data => {
      if (data.result === 1) {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
      }
      else {
        if (window.confirm('Please go to page login!')) {
          window.open(`${appConfig.apiUrl}/login`, '_blank');
          return false;
        }
      }
    });
    return true;
  }
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      //this.comment();
    }
  }
  getComments() {
    this.loadingComment = true;
    this.commentService.getComments(this.post._id,
      appConfig.LIMIT_COMMENT, this.comments.length)
      .catch(err => {
        // consolelog('get comment err ' + err);
      })
      .then(data => {
        let arr: CommentData[] = new Array();
        arr = data.data || [];
        arr.reverse();
        this.comments = [...arr, ...this.comments];

        this.commentRemaining = data.number || 0;
        if (this.commentRemaining > 0)
          this.isCommentRemaining = true;
        else this.isCommentRemaining = false;
        this.loadingComment = false;
        // consolelog(data);
      });
  }
  showComment() {
    this.getComments();
  }
  loadmoreComments() {
    this.getComments();
    // consolelog('load more');
  }
  toggleComment() {
    if (this.isShowComment)
      this.isShowComment = false;
    else this.isShowComment = true;
  }
  editComment(dt) {
    // consolelog('comment.component edit: ' + dt);
    this.commentService.updateComment(dt._id, dt.comment).catch(err => {
      window.alert('An error has occurred!');
    })
      .then(data => {
        if (data.result == 1) {
          this.comments[dt.index].content = dt.comment.content;
          this._addReplyListener.updated(dt._id);
        }
      });
  }
  deleteComment(dt) {
    // // consolelog(JSON.stringify(data));
    if (window.confirm('Are you sure you want to delete this comment?'))
      this.commentService.deleteComment(dt._id).catch(err => {
        window.alert('An error has occurred!');
      })
        .then(data => {
          if (data.result == 1) {
            this.comments.splice(dt.index, 1);
            this.countComments--;
          }
        });
  }
}
