"use strict";
alert("Welcome!");

const userChoice = +prompt('Enter how many "#" do you want');
const sharp = "#";
const pyramidLength = userChoice;
const lengthBreak = "\n";
let pyramidStr = "";

for (let i = 1; i < pyramidLength + 1; i++) {
  pyramidStr += sharp.repeat(i) + lengthBreak;
}

console.log(pyramidStr);
