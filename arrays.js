var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) => {
  [element,...array]
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element)
}
