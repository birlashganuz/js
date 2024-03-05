function countCow(n) {
    count = 2 ** (n - 1) + 1
    return count
}
let n = +prompt('Yil sonini kiriting:')
count = countCow(n)

alert(`${n} yildan so\'ng sigirlar soni ${count} donaga yetadi. Yana ham aniqrog\'i ${count - 1} dona sigir va 1 dona buzoqcha bo\'ladi.`)

