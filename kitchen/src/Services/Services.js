import axios from 'axios'

export const createGridArray = async (url) => {
  try {
    let result = await axios(url);
    let data = result.data;
    return data.sort(() => Math.random() - 0.5);
  } catch (error) {
    throw error;
  }
};

export const createArray = (amountOfEl) => {
  let newArray = Array.from({ length: amountOfEl },
    () => Math.floor(Math.random() * 47))
  let currentNum = newArray[0]
  newArray.shift()
  return { 'newArray': newArray, 'currentNum': currentNum }
}

export const iterateArray = (upcomingArray, finalArray, numOne, numTwo) => {
  let j = numTwo
  let i = numOne
  let upcomingArrayCopy = upcomingArray;
  let finalArrayCopy = finalArray;
  let current = ''
  if (i < 500) {
    let numberOfImages = i + j
    let imgArr = upcomingArrayCopy.slice(numberOfImages)
    finalArrayCopy.concat(imgArr)
    upcomingArrayCopy.slice(numberOfImages)
    j = i
    i = numberOfImages
  }
  setTimeout(() => { iterateArray(upcomingArrayCopy, finalArrayCopy, i, j) }, 5000)
  return {
    'upcomingArray': upcomingArrayCopy,
    'finalArray': finalArrayCopy,
  }

}

export const randomInt = (n) => {
  let randomInt = Math.floor(Math.random() * n)
  return randomInt
}