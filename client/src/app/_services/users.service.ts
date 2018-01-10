import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Users } from '../_models/index';
import 'rxjs/add/operator/toPromise';
import { appConfig } from '../app.config';

@Injectable()
export class UsersService {
  apiUrl = appConfig.apiUrl;
  private headers = new Headers(
    { 'Content-Type': 'applicaton/json;charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  constructor(private http: Http) {
    // this.headers.append("Access-Control-Allow-Origin", "*");
  }
  getUserLocal(){
    if(localStorage.getItem('currentUser'))
      return JSON.parse(localStorage.getItem('currentUser')).user
    else return undefined;
  }
  getAll(): Promise<any> {
    return this.http.get(`${this.apiUrl}/users`, { headers: this.headers })
      .toPromise()
      .then(this.extracData)
      .catch(this.handleError);
  }
  getUsersById(id): Promise<any> {
    return this.http.get(`${this.apiUrl}/user_id/${id}`, { headers: this.headers })
      .toPromise()
      .then(this.extracData)
      .catch(this.handleError);
  }
  addUsers(user: Users) {
    console.log('user ' + user);
    //var u = { "first_name":"Hang" };
    // var u: Users = new Users();
    // u = JSON.parse(JSON.stringify(user));
    return this.http.post(`${this.apiUrl}/user`, user);

  }
  updateUser(user) {
    return this.http.put(`${this.apiUrl}/user`, user);
  }
  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error.message); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  private extracData(res: Response) {
    let body = res.json();
    return body || {};
  }
  updatePassword(pwd, email): Promise<any>{
    let body = {
      'email': email,
      'password': pwd
    }
    return this.http.put(`${this.apiUrl}/update_pass/`, body)
    .toPromise()
    .catch(this.handleError)
    .then(this.extracData);
  }
  changePassword(id,password, password1): Promise<any>{
    let body ={
      old_pass: password,
      password: password1
    };
   return this.http.put(`${this.apiUrl}/change_pass/${id}`, body)
   .toPromise()
   .catch(this.handleError)
   .then(this.extracData);
  }
  getUserByIdApply(id) : Promise<any>{
    return this.http.get(`${this.apiUrl}/user_apply/${id}`,{ headers: this.headers })
    .toPromise()
    .catch(this.handleError)
    .then(this.extracData);
  }
  updateLocal(data, token) {
    if (!token)
      token = JSON.parse(localStorage.getItem('currentUser')).token;
    if (data || token) {
      let u = {
        contact: {
          email: data.contact.email
        },
        info: {
          first_name: data.info.first_name,
          last_name: data.info.last_name,
          full_name: data.info.first_name + " " + data.info.last_name
        },
        _id: data._id,
        image: data.image
      };
      localStorage.setItem('currentUser', JSON.stringify({ user: u, token: token }));
    }
  }
  checkLoginFB(id,provider, email){
    return this.http.get(`${this.apiUrl}/ckeck_login_fb/${id}/${provider}/${email}`,{ headers: this.headers })
    .toPromise()
    .catch(this.handleError)
    .then(this.extracData); 
  }
  loginWithFB(email){
    return this.http.post(`${this.apiUrl}/login_fb`,{"email":email})
    .toPromise()
    .catch(this.handleError)
    .then(this.extracData); 
  }
}
