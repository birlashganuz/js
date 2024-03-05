const a = [2, 1, 6, 3, 8, 9]
const b = [5, 1, 2, 8, 3, 5]
let s = 0
let s1 = s2 = 0

for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
        s++
    }
    else if (a[i] == b[i]) {
        s1++
    } else {
        s2++
    }
}

console.log(`a<b xolati: ${s}`);
console.log(`a=b xolati: ${s1}`);
console.log(`a>b xolati: ${s2}`);
