let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

// let myVal: string = addOrConcat(2, 3, 'concat');
let myVal: string = addOrConcat(2, 3, "concat") as string;

// be carefull    !!!!!
let nextVal: number = addOrConcat(2, 3, "concat") as number;

// the DOM

const img = document.getElementById("#img") as HTMLImageElement;
const myImg = document.querySelector("img")!;
const nextImg = (<HTMLImageElement>(
  document.getElementById("#img")
)) as HTMLImageElement;

myImg.src;
img.src;
