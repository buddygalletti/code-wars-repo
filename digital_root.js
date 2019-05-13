function digital_root(n) {
  // ...
  function sumDigits(num) {
    arr = String(num).split('');
    const digitSum = arr.reduce(function(acc, element){
      acc = acc + Number(element);
      return acc;
    }, 0);
    return digitSum;
  }
  let round = sumDigits(n);
  while(String(round).length > 1){
    round = sumDigits(round);
  }
  return round;
}

console.log(digital_root(51234));
