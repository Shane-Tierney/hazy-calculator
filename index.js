const calculate = (array) => {
    
}

const arrayAssign = (array) => {
    let numOne = null
    let numTwo = null
    let operator
    const opArray = ['*', '/', '-', '+']

    for (let i = 0; i < array.length; i++) {
        const item = array[i]

        if(Number(item) && numOne === null) {
            numOne = item
        } else if (Number(item) && numOne !== null) {
            numTwo = item
        } else if (opArray.includes(item)) {
            operator = item
        }
    }
}

const 