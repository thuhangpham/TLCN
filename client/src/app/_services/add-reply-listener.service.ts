import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
 

@Injectable()
export class AddReplyListenerService {
  private _subject = new Subject<any>();
  constructor() { }

  newReply(_id: String){
    this._subject.next(_id);
  }
  newReplyListtener(): Observable<any>{
    return this._subject.asObservable();
  }
  updated(_id){
   this._subject.next(_id);
  }
  updatedListener(): Observable<any>{
    return this._subject.asObservable();
  }

}
