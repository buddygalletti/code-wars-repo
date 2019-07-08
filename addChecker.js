function sumChecker(numbers, target) {
  const intersect = {};

  for (let number of numbers) {
    let test = target - number;
    if (intersect[test.toString()]) {
      return true;
    }
    intersect[number.toString()] = true;
  }
  return false;
}

console.log(sumChecker([22, 15, 3, 7, -5], 0)); // [ -5, 2, 14, 10, 22 ] intersection is [-5, 22]
