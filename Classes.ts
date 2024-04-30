import { ILogin,IUser } from './interface';

// second method to import where UserLogin use as alicase
// import * as UserLogin from './interface';

class Emp implements ILogin{
    // # is symbol for private property
    #id :number;
    // protected can use by class and extended child class but cant access in class inten.
   protected name:string;
    address:string

     constructor(id:number,name:string,address:string){
        this.#id = id;
        this.name = name;
        this.address = address;
     } 

    Login(): IUser {
        return { name: 'user1 name', id: 1, email: '' };
    }

        get empId() : number{
            return this.#id;
        }

        set emoId(num:number){
            this.#id = num;
        }
     getuserDetails() :string{
        return `${this.name} ${this.address}`;
     }

     static getUN () :number{
        return 50;
     }
}


let emp1=  new Emp(2,'user2','india 23');
emp1.emoId = 12
emp1.emoId;

class Manager extends Emp{
    constructor(id:number,name:string,address:string){
        super(id,name,address)
    }

    getnameandaddess() : string {
        return `${this.name} at manager of ${this.address}`;
    }
}
// emp1.id=1;
// emp1.name = 'user1';
// emp1.address = 'india';

let add = emp1.getuserDetails();

console.log(emp1);

let mike = new Manager(2,'Mike','driver');

console.log(mike);