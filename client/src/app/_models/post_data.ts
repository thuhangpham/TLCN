import { Component } from '@angular/core';
import { Comment, CommentData } from './comment';
import { Data } from './area-ex';
import { AreaExpertiseDetail } from './area-ex-detail';
import { Users } from './users';
class Info {
    title: String;
    desciption: String;
    start_date: Date;
    end_date: Date;
    number: number;
    areas_expertise: Data;
    areas_expertise_detail: AreaExpertiseDetail;
    address: String;
    latitude: String;
    longitude: String;
    start: String;
    end: String;
    close_post: String='1';
    constructor() { };
}
class Content {
    tasks: String;
    objective: String;
    requirement: String;
    comment: String;
    constructor() { };
}
class Contact{
    address: String;
    phone: String;
    email: String
}
export class PostData {
    _id: String;
    owner: Users;
    info: Info = new Info();
    content: Content = new Content();
    contact: Contact = new Contact();
    comments: [CommentData];
    createdAt: Date;
    updatedAt: Date;
    apply: [Users];
    applies: any;
    show: boolean;
    constructor() { };
}