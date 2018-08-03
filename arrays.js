var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) => {
  var newArray = [element,...array]
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element)
}
