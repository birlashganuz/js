let str = prompt('Jadval elementlarni kiriting:', '-8,4,5,10,-5,7,9,3,-7')
function counter(str) {
    const array = str.split(',')
    let count = array.filter(value => value == 7).length
    if (count == 0){
        return "Yo'q"
    }
    else{
        return "Ha"
    }
}

let result=counter(str)
console.log(`Natija: ${result}`);