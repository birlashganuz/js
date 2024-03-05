function ekub(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b
        } else if (b > a) {
            b = b - a
        }
    }
    return a
}

a = +prompt('Ixtiyoriy natural son kiriting:')
b = +prompt('Ixtiyoriy natural son kiriting:')
let result = ekub(a, b)
alert(`EKUB(${a},${b}) = ${result}`)