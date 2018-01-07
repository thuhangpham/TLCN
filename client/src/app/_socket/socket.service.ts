import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { appConfig } from '../app.config';
class MySocket {
  
      private static _instance: any = null;
      static singleton() {
          if (this._instance === null) {
              console.log('Singleton');
              this._instance = io(appConfig.socket);
          }
          return this._instance;
      }
  
      constructor() {
      }
  
  }
@Injectable()
export class SocketService {

  socket: any;
  constructor() { 
    this.socket = MySocket.singleton();
  }
  getSocket(){
    return this.socket;
  }
}
