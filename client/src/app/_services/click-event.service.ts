import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class ClickEventService {
  private _subject = new Subject<any>();
  constructor() { }
  click(_id: String){
    console.log('click'+_id);
    this._subject.next(_id);
  }
  onClick(): Observable<any>{
    console.log('on click');
    return this._subject.asObservable();
  }
}
