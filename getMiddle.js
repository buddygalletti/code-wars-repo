function getMiddle(s) {
    //Code goes here!
    if (s === '') {
        return s;
    }
    else if (s.length % 2 === 0) {
      let middleLeftIndex = s.length / 2 - 1;
      let middleTwo = s[middleLeftIndex] + s[middleLeftIndex + 1]
      return middleTwo;
    } else {
      let middleIndex = Math.floor(s.length / 2 + 1) - 1;
      return s[middleIndex]
    }
  }

  console.log(getMiddle(''))