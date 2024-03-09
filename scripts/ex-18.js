const array = [1, 2, 5, 4, -9, 5]
let max = array[0]
let k
array.forEach(val => {
    if (max <= Math.abs(val)) { max = Math.abs(val) }
})

k = array.filter(value => Math.abs(value) == max).length

console.log(max);
console.log(`${k} marta uchraydi`);