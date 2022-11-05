"use strict"

function solveEquation(a, b, c) {
  
  let arr = [];

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a));
  }
  return arr;
}
