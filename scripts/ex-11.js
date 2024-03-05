let str = prompt('Jadval elementlarni kiriting:', '2,4,5,1,0,7,0,3,0')
function counter(str) {
    const array = str.split(',')
    const count = array.filter(value => value != 0).length
    return count
}

let count = counter(str)
console.log(`Natija: ${count}`);

