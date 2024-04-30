export interface IUser {
    name: string;
    // make optional property
    age?: number;
    id: number;
    email: string;
}

let user: IUser = { name: 'user1 name', id: 1, email: '' }


interface IEmp extends IUser {

    salary: number;
}

// object destructuring
let { name:userName,email : userEmail} : IUser = {name:'ddf',email:'dd',id:3}

let employee: IEmp = { name: 'de', id: 2, email: '', salary: 333 }

export interface ILogin {
    Login(): IUser;

}