function pass(a, n) {
    // let b = a
    let result = ''
    if (n > 1 && n <= 10) {
        while (a >= n) {
            result = String(a % n) + result
            a = (a - (a % n)) / n
        }
        result = String(a) + result
    } else if (n >= 10 && n < 17) {
        let k = {
            10: 'A',
            11: 'B',
            12: 'C',
            13: 'D',
            14: 'E',
            15: 'F'
        }

        while ((a > n && a != n) || (a == n)) {
            let rest = a % n
            if (rest > 9 && rest < 16) {
                result = k[rest] + result
            } else {
                result = String(a % n) + result
            }
            a = (a - (a % n)) / n
        }

        if (a > 9 && a < 16) {
            result = k[a] + result
        } else {
            result = String(a) + result
        }
    }
    return result
}
let a = +prompt('a ni kiriting')
while (isNaN(a)) {
    a = +prompt('a ni kiritishda xatolik bor.')
}
let n = +prompt('n ni kiriting')
while (isNaN(n) || n > 16) {
    n = +prompt('n ni kiritishda xatolik bor. ( 1 < n < 17 )')
}
result = pass(a, n)
// console.log(Number(a).toString(n))
alert(`${a}(10) => ${result}(${n})`)
