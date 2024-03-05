let a = +prompt('Ixtiyoriy natural son kiriting: ')
while (isNaN(a) || a == 0) {
    a = +prompt('Masala shartiga mos son kiririting: ')
}
let n = +prompt('Ixtiyoriy natural son kiriting: ')
while (isNaN(n)) {
    n = +prompt('Masala shartiga mos son kiririting: ')
}

let p = 1
for (let i = 0; i < n; i++) {
    p *= a;
}
alert('a ning n-darajasi: ' + p)