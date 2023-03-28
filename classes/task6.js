import { Building } from "5-building";
export default class SkyHighBuilding{
    constructor (sqft, floors){
        this._sqft = sqft;
        this._floors = floors;
    }

    get sqft(){
        return this._sqft;
    }

    set sqft(x){
        this._sqft = `${x}`;
    }

    get floors(){
        return this._floors;
    }

    set floors(x){
        this._floors = `${x}`;
    }
}