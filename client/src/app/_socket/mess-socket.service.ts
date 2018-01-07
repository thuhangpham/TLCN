import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
//import * as io from 'socket.io-client';

import { SocketService } from './socket.service';
import { appConfig } from '../app.config';
@Injectable()
export class MessSocketService {

  private socket;
  constructor(
    private mSocket: SocketService
  ) 
  {
    this.socket = this.mSocket.getSocket();
  }
  join(room) {
    this.socket.emit('join-room', room);
  }
  leave(room){
    this.socket.emit('leave-room', room);
  }
  guiTinNhan(data){
    this.socket.emit('toi-gui-tin-nhan',data);
  }
  tinNhanMoi() {
    let observable = new Observable(observer => {
      this.socket.on('tin-nhan-moi', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
  dangNhapTinNhan() {
    let observable = new Observable(observer => {
      this.socket.on('ai-do-dang-nhap-tin-nhan', (data) => {
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
  khongNhapTinNhan() {
    let observable = new Observable(observer => {
      this.socket.on('ai-do-khong-nhap-tin-nhan', (data) => {
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
  toiDangNhapTinNhan(data){
    this.socket.emit('toi-dang-nhap-tin-nhan', data);
  }
  toiKhongNhapTinNhan(data){
    this.socket.emit('toi-khong-nhap-tin-nhan', data);
  }
  themNguoiTrucTuyen(){
    let observable = new Observable(observer=>{
      this.socket.on('them-nguoi-truc-tuyen', (data)=>{
        observer.next();
      });
    });
    return observable;
  }
  toiDangTrucTuyen(data){
    this.socket.emit('toi-dang-truc-tuyen', data);
  }
}
