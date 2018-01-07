import { Component } from '@angular/core';
import { Users } from './users';
export class Comment {
    _id: String;
    post : String;
    owner: String;
    content: String;
    createdAt: Date;
    updatedAt: Date;
    reply: Reply[] = [];
    constructor() { }
}
export class ReplyData {
    _id: String;
    comment : String;
    owner: Users = new Users();
    content: String;
    createdAt: Date;
    updatedAt: Date;
    constructor() { }
}
export class Reply {
    _id: String;
    comment : String;
    owner: String;
    content: String;
    createdAt: Date;
    updatedAt: Date;
    constructor() { }
}
export class CommentData {
    _id: String;
    post : String;
    owner: Users = new Users();
    content: String;
    createdAt: Date;
    updatedAt: Date;
    reply: ReplyData[] = [];
    constructor() { }
}