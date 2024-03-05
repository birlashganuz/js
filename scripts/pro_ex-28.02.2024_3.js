let result = ''
function vowels(arr) {
    let i = 0
    for (val of arr) {
        i++
        if (val.indexOf('a') != -1 || val.indexOf('o') != -1 || val.indexOf('i') != -1 || val.indexOf('u') != -1 || val.indexOf('e') != -1) {
            result = result + `${i}. To'g'ri | `
        } else {
            result = result + `${i}. Noto'g'ri | `
        }
        console.log(val);
    }

    console.log(result);
}

a = randomStr()
vowels(a)

