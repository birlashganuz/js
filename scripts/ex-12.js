let str = prompt('Jadval elementlarni kiriting:', '-8,4,5,10,-5,7,9,3,-7')
function counter(str) {
    const array = str.split(',')
    let count = array.filter(value => Math.abs(value) > 7).length
    return count
}

let count=counter(str)
console.log(`Natija: ${count}`);
