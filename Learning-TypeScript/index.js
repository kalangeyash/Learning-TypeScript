"use strict";
function greet(x) {
    console.log("hello" + x);
}
function sum(a, b) {
    return a + b;
}
const fname = " Yash <3";
greet(fname);
const a = 7000;
const b = 7;
const c = sum(a, b);
console.log(c);
function isAdult(age) {
    if (age >= 18) {
        console.log("iS 18 + ");
        return true;
    }
    else {
        console.log("not ");
        return false;
    }
}
const myAge = 17;
const legal = isAdult(myAge);
console.log(legal);
function checkLegalAfterOneSec(isAdult) {
    setTimeout(() => {
        isAdult();
    }, 5000);
}
checkLegalAfterOneSec(isAdult);
