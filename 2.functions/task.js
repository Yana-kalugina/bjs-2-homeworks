// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr < min) {
      min = arr[i];
    }
    sum += arr[i]; 
  } 
  avg = (sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}



// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = - Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let sumAnother = func(arrOfArr[i]);
    if (sumAnother > max) {
      max = sumAnother;
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr < min) {
      min = arr[i];
    }
  } 
  difference = Math.abs(max - min);
  return difference;
}
