import { Users, UserData } from './users';
export class Message {
    conversationId: String;
    body: String;
    author: String;
    createdAt: Date;
    updatedAt: Date;
    constructor() { }
}
export class MessageData {
    conversationId: String;
    body: String;
    author: Users = new Users();
    createdAt: Date;
    updatedAt: Date;
    receiver: Users = new Users();
    constructor() { }
}

export class Conversation {
    _id: String;
    participants: String[] = new Array();
    constructor() { }
}

export class ConversationData {
    _id: String;
    participants: Users[] = new Array<Users>();
    constructor() { }
}

export class ConvMess {
    message: MessageData = new MessageData();
    conversation: ConversationData = new ConversationData();
    constructor() { }
}


