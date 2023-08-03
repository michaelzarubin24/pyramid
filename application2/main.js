"use strict";

for (let number = 0; number <= 100; number++) {
  let string = "";
  if (number % 3 == 0) string += "Fizz";
  if (number % 5 == 0) string += "Buzz";
  console.log(string || number);
}
