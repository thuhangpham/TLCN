import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ListenerService {
  private _subject = new Subject<any>();
  private _logout = new Subject<any>();
  // private _comment = new Subject<any>();

  constructor() { }
  event(data: any){
    console.log('event');
    this._subject.next(data);
  }
  onListener(): Observable<any>{
    console.log('on listener');
    return this._subject.asObservable();
  }
  newMessage(data){
    this._logout.next(data);
  }
  onNewMessage(): Observable<any>{
    return this._logout.asObservable();
  }
  // newComment(post_id, user_id){
  //   this._comment.next({post_id:post_id, user_id:user_id});
  // }
  // onNewComment(): Observable<any>{
  //  return this._comment.asObservable();
  // }

}
