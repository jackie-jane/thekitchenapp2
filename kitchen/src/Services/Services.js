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

export const iterateArray = (upcomingArray, finalArray) => {
  let upcomingArrayCopy = upcomingArray
  let finalArrayCopy = finalArray
  finalArrayCopy.push(upcomingArrayCopy[0])
  upcomingArrayCopy.shift()
  return {
    'upcomingArray': upcomingArrayCopy,
    'finalArray': finalArrayCopy,
  }
}