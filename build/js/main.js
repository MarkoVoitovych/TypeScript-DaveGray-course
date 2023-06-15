"use strict";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
// let myVal: string = addOrConcat(2, 3, 'concat');
let myVal = addOrConcat(2, 3, "concat");
// be carefull    !!!!!
let nextVal = addOrConcat(2, 3, "concat");
// the DOM
const img = document.getElementById("#img");
const myImg = document.querySelector("img");
const nextImg = (document.getElementById("#img"));
myImg.src;
img.src;
