var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) => [element, ...array]


var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element)
  return array
}

var addElementToEndOfArray = (array, element) => [...array, element]


var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element)
  return array
}

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element)
  return array
}




// function addElementToBeginningOfArray (a, e) {
//   [element, ...a]
// }
//
// function destructivelyAddElementToBeginningOfArray (a, e) {
// array.unshift(element)
// }
