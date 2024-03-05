const array = [3, 5, 9, 1, 3, 0, 3]
function counter(array) {
    const sotr_arr = array.sort((value1, value2) => value2 - value1)
    return (sotr_arr[0]-sotr_arr[1])
}

const result = counter(array)
console.log(`Natija: ${result}`); //4