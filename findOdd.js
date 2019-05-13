function findOdd(A) {
    //happy coding!
    let countArr = new Array(A.length).fill(0);
    for (i = 0; i < A.length; i++) {
        countArr[A[i]]++;
    }
    return countArr;
  }

console.log(findOdd([1, 1, 1, 2, 2, 3, 3, 3, 3]))
