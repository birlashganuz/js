function arr_info(str) {
    const arr = str.split(',')
    const array = arr.map(Number)
    const b = []
    let s = 0
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            s += array[j]
        }
        if ((s / i) == array[i]) {
            b.push(array[i])
            // console.log(i);
        }
        s = 0
    }
    return b
}

// const a = [9, 5, 7, 1, 8, 6, 6]

let str = prompt('Jadval elementlarini kiriting', '9, 5, 7, 1, 8, 6, 6')
console.log(arr_info(str));

// const numbers = [1, 4, 9];
// const roots = numbers.map(Math.sqrt);
// console.log(roots);
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]
