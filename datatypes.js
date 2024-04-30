"use strict";
let str = 'dd';
str.toUpperCase();
console.log(str.toUpperCase());
let age;
age = 2.24;
console.log(age);
let isvalid = false;
let numli;
numli = [1, 2, 3, 4, 5];
let rr = numli.filter((num) => num > 2);
// find give only 1 value
let rr1 = numli.find((num) => num > 2);
console.log(rr1);
let sun = numli.reduce((acc, num) => acc + num);
console.log(sun);
let cc = 1 /* color.red */;
let swapN;
function swapNumber(num1, num2) {
    return [num2, num1];
}
swapN = swapNumber(20, 30);
