"use strict";
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Start", 4356, "Union"];
let mixedData = ["EVN", 2342, true];
stringArr[0] = "3";
stringArr.push("34");
guitars[0] = 2344;
// guitars.unshift(true);
// stringArr = guitars;
guitars = stringArr;
mixedData = guitars;
// guitars = mixedData;
let test = [];
let bands = [];
bands.push("Van Halen");
// bands.push(3);
// Tuple
let myTuple = ["Dave", 23, true];
let mixed = ["John ", 2, false];
mixed = myTuple;
// myTuple = mixed;
// myTuple[3] = undefined;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "1993"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "1993"],
};
// evh = jp
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
console.log(greetGuitarist(jp));
// enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 3] = "U";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["C"] = 5] = "C";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["A"] = 7] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
