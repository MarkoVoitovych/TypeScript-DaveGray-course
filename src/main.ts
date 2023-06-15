// Type Aliases

type stringOrNumberArray = (string | number)[];

type stringOrNumber = string | number;

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface PostId = stringOrNumber;

// Literal types

let myName: "Dave";

// myName = 'John'

let userName: "Dave" | "John" | "Amy";

userName = "Dave";
// userName = 'Rachel'

// Functions

const add = (a: number, b: number): number => {
  return a + b;
};

const logMessage = (message: any): void => {
  console.log(message);
};

logMessage("Hello");
logMessage(add(3, 5));
// logMessage(add(3, "3"));

function substract(c: number, d: number): number {
  return c - d;
}

substract(3, 2);

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//     (a: number, b: number) : number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMessage(multiply(3, 3));

const sumAll = (a: number, b: number, c = 2): number => {
  return a + b + c;
};
logMessage(sumAll(2, 3, 4));
logMessage(sumAll(2, 3));

// rest parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMessage(total(1, 2, 3, 4));

// never

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = (): void => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};
