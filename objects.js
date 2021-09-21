"use strict";


// 1. countWords
// function countWords(phrase) {
//   const wordCounts = {}
//   for (const word of phrase.split(" ")) {
//     if (word of wordCounts)
//   }

// }

function hasBalancedParens(string) {
  let parens = 0;

  for (const char of string) {
    if (char === '(') {
      parens += 1;
    } else if (char === ')') {
      parens -= 1;

      if (parens < 0) {
        return false;
      }
    }
  }

  return parens === 0;

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
