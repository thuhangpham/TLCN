export class EmploySituation {
    result: Number;
    msg: string;
    data:DataArea = new DataArea();
    createdAt: Date;
    updatedAt: Date;
    constructor() { }
}
export class DataArea{
    _id: String;
    name: String = '';
    description: String;
    createdAt: Date;
    updatedAt: Date;
    constructor() { }
}