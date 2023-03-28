// export default class HolbertonCourse{
//     constructor (name=String, length=int, students=[]){
//         this._name = name;
//         this._length = length;
//         this._students = students;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(x) {
//         this._name = `${x}`;
//     }

//     get length(){
//         return this._length;
//     }

//     set length(x) {
//         this._length = `${x}`;
//     }

//     get students(){
//         return this._students;
//     }

//     set students(x) {
//         this._students = `${x}`;
//     }
// }

export default class HolbertonCourse{
    constructor (name, length, students){
        if(typeof name  !='string'){
            throw TypeError ("Name must be a string");
        }
        if(typeof length  !='number'){
            throw TypeError ("Length must be a number");
        }
        if(typeof students  !='object'){
            throw TypeError ("Length must be an object/array");
        }
        
        this._name = name;
        this._length = length;
        this._students = students;
        
    }

    get name(){
        return this._name;
    }
    
    set name(x){
        this._name =`${x}`
    }
    
    get length(){
        return this._length;
    }
    
    set length(x){
        this._length =`${x}`
    }
    
    get students(){
        return this._students;
    }
    
    set students(x){
        this._students =`${x}`
    }
}