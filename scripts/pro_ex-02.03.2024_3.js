let str = prompt('Jadval elementlarini kiriting:', '1, 3, 4, 5, 6, 8, 9, 2, 0')

function max_val(str) {
    const result = []
    if (str == null || str.length == 0) {
        return result

    } else if (str.length == 1) {
        const result = str.split(',')
        return result
    }

    else if (str.length == 2) {
        const array = str.split(',')
        const sort_array = array.sort((value1, value2) => value2 - value1)
        return sort_array
    } else {
        const array = str.split(',')
        const sort_array = array.sort((value1, value2) => value2 - value1)
        result.push(sort_array[0])
        result.push(sort_array[1])
        return result
    }
}
result = max_val(str)
console.log(`Berilgan star: ` + str);
console.log(result);