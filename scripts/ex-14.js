let str = prompt('Jadval elementlarni kiriting', '3, 5, 9, 1, 3, 0, 3')

function counter(str) {
    const array = str.split(',')
    array.forEach((val, i) => {
        array[i] = Number(val)
    });
    
    return (Math.max(...array) - Math.min(...array))
}

const result = counter(str)
console.log(`Natija: ${result}`); //4