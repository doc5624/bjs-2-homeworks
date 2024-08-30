function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] < min) {
      min = arr[i];
    };
    if (arr[i] > max) {
      max = arr[i];
    };
  }
  let avg = sum / arr.length;
  let avgString = (avg).toFixed(2);
  avg = parseFloat(avgString);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  if (arr.length === 0) {
    return 0;
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    };
    if (arr[i] > max) {
      max = arr[i];
    };
  }
  let MaxMin = max - min;
  return MaxMin;
}


function differenceEvenOddWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum1 = 0;
  let sum2 = 0;
  if (arr.length === 0) {
    return 0;
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] / 2 === Math.floor(arr[i] / 2)) {
      sum1 = sum1 + arr[i];
    } else {
      sum2 = sum2 + arr[i];
    };
  }
  let sum = sum1 - sum2;
  return sum;
}

function averageEvenElementsWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum1 = 0;
  let quantity = 0;
  if (arr.length === 0) {
    return 0;
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] / 2 === Math.floor(arr[i] / 2)) {
      sum1 = sum1 + arr[i];
      quantity = quantity + 1;
    };
  }
  let avg = sum1 / quantity;
  let avgString = (avg).toFixed(2);
  avg = parseFloat(avgString);
  return avg;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  const arrayOf = [...arrOfArr]
  for (let i = 0; i < arrayOf.length; i++) {
    const arrayOf2 = arrayOf[i];
    let sum = func(...arrayOf2);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
