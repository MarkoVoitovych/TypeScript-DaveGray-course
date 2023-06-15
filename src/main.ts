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
let bands: string[] = [];
bands.push("Van Halen");
// bands.push(3);

// Tuple

let myTuple: [string, number, boolean] = ["Dave", 23, true];

let mixed = ["John ", 2, false];

mixed = myTuple;
// myTuple = mixed;

// myTuple[3] = undefined;

// Objects

let myObj: object;
myObj = [];
console.log(typeof myObj);

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

// exampleObj.prop1 = 34;

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "1993"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "1993"],
};

// evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase()}`;
};

console.log(greetGuitarist(jp));

// enum

enum Grade {
  U = 3,
  D,
  C,
  B,
  A,
}

console.log(Grade.B);
