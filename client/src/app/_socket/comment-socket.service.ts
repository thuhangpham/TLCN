import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
//import * as io from 'socket.io-client';

import { SocketService } from './socket.service';
import { appConfig } from '../app.config';
import * as io from 'socket.io-client';

@Injectable()
export class CommentSocketService {

  private socket = io(appConfig.socket);
  constructor(
    private mSocket: SocketService
  ) {

  }
  addComment(data) {
    console.log('socket add-comment');
    this.socket.emit('add-comment', data);
  }
  addReply(data) {
    this.socket.emit('add-reply', data);
  }
  join(room) {
    console.log('join room ' + room);
    this.socket.emit('join-room', room);
  }
  getCommentMessages() {
    let observable = new Observable(observer => {
      this.socket.on('comment-message', (data) => {
        console.log('comment-message ne '+ data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
  getReplyMessage() {
    let observable = new Observable(observer => {
      this.socket.on('reply-message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
