function order(words){
  // ...
  words = words.split(' ');
  const orderedWords = [];
  for (let i = 0; i < words.length; i++) {
    words.forEach(function(word){
      if (word.includes(`${i + 1}`)){
        orderedWords.push(word);
      }
    });
  }
  return orderedWords.join(' ');
}
