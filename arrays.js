var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (a, element) => {
  [element, ...a]
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element)
}
