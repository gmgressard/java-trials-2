"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const itemList = []

  for (const i in items) {
    if (i % 2 === 0) {
      itemList.push(items[i]);
    }
  }
  return itemList 
}

// """Print a list of the `n` smallest integers in `items`.

// Order the integers in descending order.

// You can assume that `n` will be less than the length of the list.

// Arguments:
//     items (list[int]): A list of integers
//     n (int): Desired length for the resulting list
// """


// 3. smallestNItems
function smallestNItems(items, n) {

  const sortedList = items.sort()
  const slicedList = sortedList.slice(0,n)
  const itemReversed = slicedList.reverse()
  return itemReversed
}
