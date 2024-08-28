"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x;
  let y;
  let desc = b * b - 4 * a * c;
  if (desc > 0) {
    x = (-b + Math.sqrt(desc)) / (2 * a);
    y = (-b - Math.sqrt(desc)) / (2 * a);
    arr.push(x);
    arr.push(y);
  } else if (desc === 0) {
    x = -b / (2 * a);
    arr.push(x);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = 1/12 * percent / 100;
  let s = amount - contribution
  let Платёж = s * (p + (p / (((1 + p)**countMonths) - 1)));
  let summ = Платёж * countMonths;
  let sumString = (summ).toFixed(2);
  let sumInt = parseFloat(sumString);
  return sumInt;
}
