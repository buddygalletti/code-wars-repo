function spinWords(sentence){
  //TODO Have fun :)
  const words = sentence.split(' ');
  const newSentence = words.map(function(word){
    if (word.length >= 5) {
      let newWord = '';
      for (let i = word.length - 1; i >= 0; i--){
        newWord += word[i];
      }
      return newWord;
    }
    return word;
  });
  return newSentence.join(' ');
}
