import { Injectable } from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
import { Message, MessageData, Conversation, ConversationData } from '../_models/index';
import { appConfig } from '../../app/app.config';
@Injectable()
export class MessageService {
  private headers = new Headers(
    { 'Content-Type': 'applicaton/json;charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  constructor(
    private http: Http
  ) { }
  getConversation(_id): Promise<any>{
    return this.http.get(`${appConfig.apiUrl}/conversation/${_id}`, {headers:this.headers}).
    toPromise()
    .catch(this.handleError)
    .then(this.extracData);
  }
  getConversations(_id): Promise<any>{
    return this.http.get(`${appConfig.apiUrl}/conversations/${_id}`,{headers:this.headers}).
    toPromise()
    .catch(this.handleError)
    .then(this.extracData);
  }
  newConversation(conver): Promise<any>{
    return this.http.post(`${appConfig.apiUrl}/conversation`,conver).
    toPromise()
    .catch(this.handleError)
    .then(this.extracData);
  }
  deleteConversation(_id,conversationId): Promise<any>{
    return this.http.delete(`${appConfig.apiUrl}/delete_conversation/${_id}/${conversationId}`).
    toPromise()
    .catch(this.handleError)
    .then(this.extracData);
  }
  updateMessage(messageId, _id,composedMessage): Promise<any>{
    let body = {
      messageId : messageId,
      _id: _id,
      composedMessage: composedMessage
    };
    return this.http.put(`${appConfig.apiUrl}/update_message/`, body).
    toPromise()
    .catch(this.handleError)
    .then(this.extracData);
  }
  checkConversation(body): Promise<any>{
    return this.http.post(`${appConfig.apiUrl}/check_conversation/`, body).
    toPromise()
    .catch(this.handleError)
    .then(this.extracData);
  }
  sendReply(conversationId,composedMessage,_id): Promise<any>{
    let body = {
      _id: _id,
      conversationId: conversationId,
      composedMessage: composedMessage
    }
    return this.http.post(`${appConfig.apiUrl}/send_message/`, body).
    toPromise()
    .catch(this.handleError)
    .then(this.extracData);
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
