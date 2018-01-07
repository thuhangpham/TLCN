import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { appConfig } from '.././app.config';
@Injectable()
export class AreaExperService {
  private api: any;
  private headers = new Headers(
    { 'Content-Type': 'applicaton/json;charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  constructor(private http: Http) {
    this.api = appConfig.apiUrl;
  }  

  getAreaEx(): Observable<any> {
    return this.http.get(`${this.api}/areaexs`,{headers:this.headers})
      .map(this.extracData)
      .catch(this.handleError);
  }
  getAreaExById(id): Observable<any> {
    return this.http.get(`${this.api}/areaex/${id}`,{headers:this.headers}).
      map(this.extracData)
      .catch(this.handleError);
  }
  countPostByAreaEx(){
    return this.http.get(`${this.api}/count_post_by_area_ex`,{headers:this.headers})
    .map(this.extracData)
    .catch(this.handleError);
  }
  private handleError(err: any) {
    return Observable.throw(err.json().error || 'Server error!');
  }
  private extracData(res: Response) {
    let body = res.json();
    return body || {};
  }

}
