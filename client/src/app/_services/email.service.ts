import { Injectable } from '@angular/core';
import { appConfig } from '../../app/app.config';
import { Http, Response } from '@angular/http';
@Injectable()
export class EmailService {

  constructor(
    private http: Http
  ) { }
  sendEMail(email): Promise<any>{
    return this.http.get(`${appConfig.apiUrl}/send_email_reset_pass/${email}`)
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
