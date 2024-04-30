let str = 'dd';

str.toUpperCase();

console.log(str.toUpperCase());

let age : number;

age = 2.24;
console.log(age);

let isvalid : boolean = false;

let numli : Array<number>;

numli =  [1,2,3,4,5];
let rr = numli.filter((num)=> num>2);

// find give only 1 value
let rr1 = numli.find((num)=> num>2);

console.log(rr1);

let sun = numli.reduce((acc,num)=> acc+num);
console.log(sun);


const enum color {
    blue,
    red,
    black
}

let cc : color = color.red;

let swapN : [number,number];

function swapNumber(num1:number,num2:number):[number,number]{
    return [num2,num1]
}


swapN = swapNumber(20,30);

