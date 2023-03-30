export default class Building{
    constructor (sqft){
        this._sqft = sqft;
    }

    get sqft(){
        return this._sqft;
    }

    set sqft(x){
        this._sqft = `${x}`;
    }
}

function evacuationWarningMessage(){
    
}