const calculate = (array) => {
  let filtArray = arrayFilter(array)
  let numOne = null
  let numTwo = null
  let operator
  const opArray = ['*', '/', '-', '+']
  let value = NaN

  for (let i = 0; i < filtArray.length; i++) {
    const item = filtArray[i]

    if (Number(item) && numOne === null) {
      numOne = item
    } else if (Number(item) && numOne !== null) {
      numTwo = item
    } else if (opArray.includes(item)) {
      operator = item
    }
  }

  if (operator === '*') {
    value = numOne * numTwo
  } else if (operator === '/') {
    value = numOne / numTwo
  } else if (operator === '-') {
    value = numOne - numTwo
  } else if (operator === '+') {
    value = numOne + numTwo
  }

  return value
}



const arrayFilter = (array) => {
  let filteredArray = []

  for (let i = 0; i < array.length; i++) {
    const item = array[i]

    if (item) {
      filteredArray.push(item)
    }
  }

  return filteredArray
}

module.exports = calculate
