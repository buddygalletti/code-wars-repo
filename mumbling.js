function accum(s) {
	// your code
  let result = new Array();
  for (i = 0; i < s.length; i++) {
    let count = 0;
    result[i] = '';
    while (count <= i) {
      if (count === 0) {
        result[i] += s[i].toUpperCase();
      } else {
        result[i] += s[i].toLowerCase();
      }
      count++;
    }
  }
  return result.join('-');
}
