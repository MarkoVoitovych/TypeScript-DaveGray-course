"use strict";
// Type Aliases
// interface PostId = stringOrNumber;
// Literal types
let myName;
// myName = 'John'
let userName;
userName = "Dave";
// userName = 'Rachel'
// Functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hello");
logMessage(add(3, 5));
// logMessage(add(3, "3"));
function substract(c, d) {
    return c - d;
}
substract(3, 2);
// interface mathFunction {
//     (a: number, b: number) : number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(3, 3));
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMessage(sumAll(2, 3, 4));
logMessage(sumAll(2, 3));
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4));
// never
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
