/*
Given an array of integers, return a new array such that each element
at index i of the new array is the product of all the numbers in the
original array except the one at i.
*/

function productMap(numbers) {
  const numZeros = numbers.filter(number => !number).length;
  const nonzeroProd = numbers.reduce((acc, number) => {
    if (!number) {
      return acc;
    }
    return acc * number;
  }, 1);
  return numbers.map(number => {
    if (!number && numZeros <= 1) {
      return nonzeroProd;
    } else if (numZeros) {
      return 0;
    } else {
      return nonzeroProd / number;
    }
  });
}

console.log(productMap([1, 2, 3, 4, 5, 0]));
