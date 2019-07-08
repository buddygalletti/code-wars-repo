function isPangram(string) {
  //...
  const letters = [];
  for (let char of string) {
    letters.push(char.toLowerCase());
  }
  const lettersNoSpaces = letters.filter(
    letter => letter.toLowerCase() !== letter.toUpperCase()
  );
  const letterSet = Array.from(new Set(lettersNoSpaces));
  if (letterSet.length === 26) {
    return true;
  }
  return false;
}

var string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string));
var string = 'This is not a pangram.';
console.log(isPangram(string));
