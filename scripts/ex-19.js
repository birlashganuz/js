function varCheck(str) {
    const strtoarray = str.split(',')
    const a = strtoarray.map(Number)
    const b = []
    for (let i = 0; i < a.length; i++) {
        let s = 0
        for (let j = 0; j < a.length; j++) {
            if (i != j) {
                if (a[i] == a[j]) { s++ }
            }
        }
        if (s == 0) { b.push(a[i]) }
    }
    return b
}

let str = prompt('Jadval elementlarini kiriting:', '1, 2, 5, 4, -9, 5')

let result = varCheck(str)
console.log(str);
console.log('Yuqoridagi satrda faqat 1 martadan uchragan sonlar:')
console.log(result);