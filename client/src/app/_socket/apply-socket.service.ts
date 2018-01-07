import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
//import * as io from 'socket.io-client';

import { SocketService } from './socket.service';
import { appConfig } from '../app.config';

@Injectable()
export class ApplySocketService {
  private socket;
  constructor(
    private mSocket: SocketService
  ) {
    this.socket = this.mSocket.getSocket();
  }
  remove(data) {
    this.socket.emit('remove-apply', data);
  }
  apply(data) {
    this.socket.emit('apply', data);
  }
  join(room) {
    this.socket.emit('join-room', room);
  }
  getAppyMessages() {
    let observable = new Observable(observer => {
      this.socket.on('apply-message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
  getUnApplyMessage() {
    let observable = new Observable(observer => {
      this.socket.on('remove-apply-message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
