import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Post } from '../_models/index';
import { appConfig } from '../app.config';
@Injectable()
export class PostService {
  apiUrl = appConfig.apiUrl;
  private headers = new Headers(
    { 'Content-Type': 'applicaton/json;charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  constructor(private http: Http) {
    // this.headers.append("Access-Control-Allow-Origin", "*");
  }
  removePostById(id){
    return this.http.delete(`${this.apiUrl}/post/${id}`)
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);
  }
  getAll(): Promise<any> {
    return this.http.get(`${this.apiUrl}/posts`)
      .toPromise()
      .then(this.extracData)
      .catch(this.handleError);
  }
  getPosts(limit, skip): Promise<any>{
    return this.http.get(`${this.apiUrl}/posts/${limit}/${skip}`,  { headers: this.headers })
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);

  }
  getPostsByArea(limit: Number, skip: Number,area_id: String): Promise<any>{
    let data = {
      "skip": skip,
      "limit": limit,
      "area_id": area_id
    };
    return this.http.post(`${this.apiUrl}/posts`,
    data)
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);

  }
  getPostsByUserId(limit: Number, skip: Number,user_id: String): Promise<any>{
    return this.http.get(`${this.apiUrl}/posts_user_id/${limit}/${skip}/${user_id}`,
    {headers:this.headers})
    .toPromise()
    .then(this.extracData)
    .catch(this.handleError);

  }
  getPostById(id): Promise<any> {
    return this.http.get(`${this.apiUrl}/post/${id}`, { headers: this.headers })
      .toPromise()
      .then(this.extracData)
      .catch(this.handleError);
  }
  // addUsers(user):Promise<any>{
  //   console.log('user '+user);
  //   return this.http.post(`${this.apiUrl}/user`, user)
  //   .toPromise()
  //   .then(this.extracData)
  //   .catch(this.handleError);
  // }
  addPost(post) {
    console.log('add_post_service: ' + post);
    //var u = { "first_name":"Hang" };
    var p: Post = new Post();
    p = JSON.parse(post);
    return this.http.post(`${this.apiUrl}/post`, p);

  }
  updatePost(post) {
    return this.http.put(`${this.apiUrl}/post`, post);
  }
  addComment(post){
    return this.http.post(`${this.apiUrl}/add_comment`, post);
  }
  addRyply(post){
    return this.http.post(`${this.apiUrl}/add_reply`, post);
  }
  addApply(post){
    return this.http.post(`${this.apiUrl}/apply`, post);
  }
  unApply(post){
    return this.http.post(`${this.apiUrl}/un_apply`, post);
  }
  countCommentByPostId(post_id: String, skip: Number): Promise<any>{
    console.log(post_id);
    let data = {
        "skip" : skip,
        "post_id": post_id
    };
    return this.http.post(`${this.apiUrl}/count_comment_post_id`, data)
    .toPromise()
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
