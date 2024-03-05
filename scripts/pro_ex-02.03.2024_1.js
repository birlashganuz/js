let str = prompt()
function del(str) {
    let result
    str = str.trim()
    if (str.endsWith(',')) {
        str = str.substring(0, str.length - 1)
    }
    let arr = str.split(',')
    let len = arr.length
    if (len == 0 || len == 2) {
        result = null
    } else if (len == 1) {
        result = arr
    } else {
        result = arr.slice(1, arr.length - 1)
    }
    return result
}

console.log(del(str))

