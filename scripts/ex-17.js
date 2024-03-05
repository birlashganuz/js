const a = [9, 5, 7, 1, 8, 6, 6]
const b = []
let s = 0
for (let i = 1; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
        s += a[j]
    }
    if ((s / i) == a[i]) {
        b.push(a[i])
        console.log(i);
    }
    s = 0
}

console.log(b);