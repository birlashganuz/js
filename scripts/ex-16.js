const a = [1, 3, 8, 2, 3, 9]
let s = k = 0
for (let i = 1; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
        if (a[i] <= a[j]) { k++ }
    }
    if (k == 0) { s++ }
    k = 0
}
console.log(s)