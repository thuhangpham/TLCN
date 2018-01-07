import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Reply } from '../_models/comment';
import { appConfig } from '../app.config';
@Injectable()
export class ReplyService {

  apiUrl = appConfig.apiUrl;

  private headers = new Headers(
    { 'Content-Type': 'applicaton/json;charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  constructor(private http: Http) {
    // this.headers.append("Access-Control-Allow-Origin", "*");
  }
  getReplies(cmt_id,limit, skip): Promise<any>{
    return this.http.get(`${this.apiUrl}/replies/${limit}/${skip}/${cmt_id}`,  { headers: this.headers })
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);

  }
  deleteReply(_id: String){
    return this.http.delete(`${this.apiUrl}/reply/${_id}`).toPromise()
    .then(this.extracData)
    .catch(this.handleError);
  }
  updateReply(_id: String, re: Reply){
    let data = {
      "_id": _id,
      "reply": re
    }
    console.log(JSON.stringify(data.reply));
    return this.http.put(`${this.apiUrl}/reply`, data).toPromise()
    .then(this.extracData)
    .catch(this.handleError);
  }
  countCommentByPostId(cmt_id, skip): Promise<any>{
    let data = {
        "skip" : skip,
        "cmt_id": cmt_id
    }
    return this.http.post(`${this.apiUrl}/count_reply_comment_id`, 
    data, {headers:this.headers})
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);
  }
  addReply(cmt): Promise<any>{
    return this.http.post(`${this.apiUrl}/reply`,
    cmt)
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);
  }
  countReply(skip,post_id): Promise<any>{
    let data = {
      "skip": skip,
      "post_id": post_id
    };
    return this.http.post(`${this.apiUrl}/count_reply_comment_id`,
    data)
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log('An error occurred '+ error.message); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  private extracData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
