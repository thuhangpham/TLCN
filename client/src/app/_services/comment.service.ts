import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Comment } from '../_models/comment';
import { appConfig } from '../app.config';
@Injectable()
export class CommentService {

  apiUrl = appConfig.apiUrl;
  private headers = new Headers(
    { 'Content-Type': 'applicaton/json;charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  constructor(private http: Http) {
    // this.headers.append("Access-Control-Allow-Origin", "*");
  }
  getComments(post_id,limit, skip): Promise<any>{
    return this.http.get(`${this.apiUrl}/comments/${limit}/${skip}/${post_id}`,  { headers: this.headers })
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);

  }
  addComment(cmt): Promise<any>{
    return this.http.post(`${this.apiUrl}/comment`,
    cmt)
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);
  }
  countComment(skip,post_id): Promise<any>{
    let data = {
      "skip": skip,
      "post_id": post_id
    };
    return this.http.post(`${this.apiUrl}/count_comment_post_id`,
    data)
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);
  }
  deleteComment(_id: String){
    return this.http.delete(`${this.apiUrl}/comment/${_id}`).toPromise()
    .then(this.extracData)
    .catch(this.handleError);
  }
  updateComment(_id: String, cmt: Comment){
    let data = {
      "_id": _id,
      "comment": cmt
    }
    return this.http.put(`${this.apiUrl}/comment`, data).toPromise()
    .then(this.extracData)
    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error.message); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  private extracData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
