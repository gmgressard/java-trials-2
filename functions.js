"use strict";


// 1. isHometown
function isHometown(town) {
    return town === 'San Francisco'
}


// 2. getFullName
function getFullName(firstName, lastName) {
    const name = `${firstName} ${lastName}`
    return name
}



// 3. calculateTotal
function calculateTotal(basePrice, state, tax=0.05) {
    const subtotal = basePrice * (1 + tax);
    let fee = 0;
    if (state === 'CA') {
        fee = 0.03 * subtotal;
    } else if (state === 'PA') {
        fee = 2 ;
    } else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }
    return subtotal + fee
}


// let parens = 0;

// for (const char of string) {
//   if (char === '(') {
//     parens += 1;
//   } else if (char === ')') {
//     parens -= 1;

//     if (parens < 0) {
//       return false;
//     }
//   }
// }

// return parens === 0;