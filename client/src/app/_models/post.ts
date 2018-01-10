import { Component } from '@angular/core';
import { Comment } from './comment';
import { AreaExpertise } from './area-ex';

class Info {
    title: String;
    desciption: String;
    start_date: Date;
    end_date: Date;
    number: number;
    areas_expertise: String;
    areas_expertise_detail: String;
    address: String = '';
    latitude: String;
    longitude: String;
    close_post: String = '1';
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
export class Post {
    _id: String;
    owner: String;
    info: Info = new Info();
    content: Content = new Content();
    contact: Contact = new Contact();
    comments: Comment[] = [];
    createdAt: Date;
    updatedAt: Date;
    apply: String[] = [];
    show: boolean;
   
    constructor() { };
}