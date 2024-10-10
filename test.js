const prompt = require("prompt-sync")();

var userInput = prompt("enter a word: ");
let stringArray = userInput.split("");

let subString = [];
let finalSubString = 0;
let testsubString = [];

for (let i = 0; i < stringArray.length; i++) {
  let run = subString.length;
  if (i == 0) {
    subString.push(stringArray[i]);
    finalSubString = subString.join("").length;
  } else {
    loop2: for (let j = 0; j < run; j++) {
      if (finalSubString < subString.join("").length) {
        finalSubString = subString.join("").length;
      }

      if (stringArray[i] == subString[j]) {
        testsubString = subString.slice(j + 1, run);
        subString = testsubString;
        subString.push(stringArray[i]);
        break loop2;
      } else {
        if (j == subString.length - 1) {
          subString.push(stringArray[i]);
        }
      }
    }
  }
}

if (testsubString.join("").length > finalSubString) {
  finalSubString = testsubString.join("").length;
}
console.log(finalSubString);
