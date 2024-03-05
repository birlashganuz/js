function tub(n) {
    let s = 0
    for (let i = 2; i <= (Math.round(n / 2)); i++) {
        if (n % i == 0) {
            s += 1
        }
    }
    return s
}
let n = +prompt('Ixtiyoriy natural son kiriting: ')
let s = tub(n)
if (s == 0) {
    alert(`${n} soni tub son`)
} else {
    alert(`${n} soni murakkab son`)
}