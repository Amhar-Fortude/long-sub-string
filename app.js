const prompt = require("prompt-sync")();

var userInput = prompt("enter a word: ");

var stringArray = userInput.split("");

var key = 0;
let subString = [];
let index;
let testsubString = [];
var finalSubString;

for (var i = 0; i < stringArray.length; i++) {
  if (!subString.includes(stringArray[i])) {
    subString.push(stringArray[i]);
  } else {
    key++;
    if (key == 1) {
      finalSubString = subString.join("");
    } else {
      if (finalSubString.length <= subString.join("").length) {
        finalSubString = subString.join("");
      }
    }

    index = subString.indexOf(stringArray[i]);
    subString.push(stringArray[i]);

    testsubString = subString.slice(index + 1, subString.length);

    subString = testsubString;
  }
}

if (finalSubString.length >= testsubString.join("").length) {
  console.log(finalSubString.length);
} else {
  console.log(testsubString.join("").length);
}
