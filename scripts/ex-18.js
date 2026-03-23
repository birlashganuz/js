function absMax(str) {
    const strtoarr = str.split(',')
    const array = strtoarr.map(Number)
    let max = array[0]
    let k
    array.forEach(val => {
        if (max <= Math.abs(val)) { max = Math.abs(val) }
    })
    k = array.filter(value => Math.abs(value) == max).length
    return k
}

let str = prompt('Jadval elementlarini kiriting:', '1, 2, 5, 4, -9, 5')
let result = absMax(str)
console.log(str);
console.log(`${result} marta uchraydi`);