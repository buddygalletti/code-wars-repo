function digPow(n, p){
  // ...
  intArrN = String(n).split('').map(function(num){
    return Number(num);
  });
  let counter = 0;
  for(let i = 0; i < intArrN.length; i++){
    counter += intArrN[i]**(p + i);
  }
  let quotient = counter / n;
  if(counter % n === 0){
    return quotient;
  }

  return -1;
}


console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);
