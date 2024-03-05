let a = +prompt('Ixtiyoriy natural son kiriting')
while (isNaN(a)) {
    a = +prompt('Natural son kiritmadingiz. Natural son kiriting!')
}
let b = String(a)
let s = 0
for (let i = 0; i < b.length; i++) {
    s += Number(b[i])
}
if (a % (s ** 2) == 0) {
    alert("G`aroyib son")
} else { alert("Oddiy son") }

