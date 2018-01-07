import { AreaExpertiseDetail } from "./area-ex-detail";
export class AreaExpertise {
    result: Number;
    msg: string;
    data: Data = new Data();   
    constructor() { }
}
export class Data{
    _id: String ;
    name: String = '';
    description: String;
    createdAt: Date;
    updatedAt: Date;
    areas_ex_details: [AreaExpertiseDetail]
    constructor() { }
}

export class AreaExpertiseCount {
    count: Number;
    area_ex: AreaExpertise = new AreaExpertise();
    constructor() { }
}