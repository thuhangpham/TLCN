import {PostData} from './post_data';
import { MessageData } from './message';
import { DataArea } from './employ-situation';
import { Data } from './area-ex';
export class UserMess {
    user: Users = new Users();
    lastMess: MessageData = new MessageData();
    conversation: String;
    constructor() { };
}
export class Users {
    _id: String;
    info: Info = new Info();
    address_residence: AddressResidence = new AddressResidence();
    contact: Contact = new Contact();
    password: String;
    image: String;
    createdAt: Date;
    updatedAt: Date;
    apply: [PostData];
    provider:String;
    id:String;
    constructor() { };
}
export class UserData {
    _id: String;
    info: InfoData = new InfoData();
    address_residence: AddressResidence = new AddressResidence();
    contact: Contact = new Contact();
    password: String;
    image: String;
    createdAt: Date;
    updatedAt: Date;
    apply: [PostData];
    provider:String;
    id:String;
    constructor() { };
}
class InfoData {
    name: String;
    first_name: String;
    last_name: String;
    full_name: String;
    gender: String;
    dob: Date;
    employment_sitution: Data = new Data();
    areas_expertise: DataArea = new DataArea();
    intro: String;
    constructor(){}
}
class Info {
    name: String;
    first_name: String;
    last_name: String;
    full_name: String;
    gender: String;
    dob: Date;
    employment_sitution: String;
    areas_expertise: String;
    intro: String;
    constructor(){}
}
class AddressResidence {
    address: String;
    latitude: number;
    longitude: number;
    city: String;
    district: String;
    ward: String;
    constructor(){}
}
class Contact {
    email: String;
    phone: String;
    web_page: String;
    constructor(){}
}

export class Gender{
    Female: any = 0;
    Male: any = 1;
    Other: any = 2;
    arr: [String] = ['female', 'male', 'other'];
    compare(g: String): String{
            return this.arr.indexOf(g.toLocaleLowerCase())+'';
    }
    getGender(index:any): String{
        return this.arr[index];
    }
    constructor(){};
}