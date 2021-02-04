export const randomClass = (n) => {
  let randomClass = Math.floor(Math.random() * n)
  switch (randomClass) {
    case 0:
      randomClass = "zero";
      break;
    case 1:
      randomClass = "one";
      break;
    case 2:
      randomClass = "two";
      break;
    case 3:
      randomClass = "three";
      break;
    case 4:
      randomClass = "four";
      break;
    case 5:
      randomClass = "five";
      break;
    case 6:
      randomClass = "six";
      break;
    case 7:
      randomClass = "seven";
      break;
    case 8:
      randomClass = "eight";
  }
  return randomClass
}

export const iterateOnClick = (nextValue, finalArr, userArr) => {
  let value = nextValue;
  let newUpArr = userArr
  let newFinArr = finalArr;
  let newCurrent = userArr[0]
  newUpArr.shift()
  newFinArr.push(value)
  return { newCurrent: newCurrent, newFinalArray: newFinArr, newUpcomingArray: newUpArr }
}

export const toggleAudio = (boolean) => {
  if (boolean === false) {
    return true
  } else {
    return false
  }
}
