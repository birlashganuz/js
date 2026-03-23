function opposite(str) {
    const strtoarray = str.split(',')
    const a = strtoarray.map(Number)
    b = a.map(val => -val)
    return b
}

let str = prompt('Jadval elementlarini kiriting:', '1, 2, 5, 4, -9, 5')

let result = opposite(str)
console.log(str);
console.log(result);