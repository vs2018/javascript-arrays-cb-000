var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (a, element) => {
  [element, ...a]
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element)
}

// function addElementToBeginningOfArray (a, e) {
//   [element, ...a]
// }
//
// function destructivelyAddElementToBeginningOfArray (a, e) {
// array.unshift(element)
// }
