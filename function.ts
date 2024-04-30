// name functions
function sum(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

// arrow functions
const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;


console.log(sub(2, 4));

// function expression
const mult = function (n1: number, n2: number): number {
    return n1 * n2;
}

/// 3rd called rest operator
function addarray(num1: number, num2: number, ...numarr: number[]) {
    return num1 + num2 + numarr.reduce((a, b) => a + b, 0);

}

let nu = [1, 2, 3, 4, 5];

console.log(addarray(2, 4, ...nu));


console.log(addarray(2, 4, 3, 4, 5, 6, 6));

//generic function

function getitems<Type>(item: Type[]): Type[] {

    return new Array<Type>().concat(item);
}

let concatstr = getitems<number>([1,2,3,43,5]);

let strcon = getitems<string>(['a','b','c','d']);