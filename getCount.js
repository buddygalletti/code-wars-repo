function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // enter your majic here
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelsCount++
      }
    }    
    return vowelsCount;
  }

  console.log(getCount('buddy galletti'));