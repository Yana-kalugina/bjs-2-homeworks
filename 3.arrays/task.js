// Задание 1
function checkElement(element){
  return element;
}


function compareArrays(arr1, arr2) {
  arr1.indexOf(checkElement);
  arr2.indexOf(checkElement);

  let result = arr1.every(function(arr2) {
    if (arr1 === arr2) {
      return true;
    } else {
      return false;
    }
  });
  return result; 
}


// Задание 2
function advancedFilter(arr) {

  let resultArr = arr.filter(element => element > 0).filter(element => element % 3 === 0).map(function(element) {
    return element * 10;
  });
  return resultArr; 
}
