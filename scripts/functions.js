n = +prompt('Yulduzchalar sonini kiriting:')
while (isNaN(n) || n < 4 || n > 50) {
    n = +prompt('Yulduzchalar sonini natural sonda kiriting (kiritilgan son 3 dan katta 51 dan kichkina bo\'lishi shart):')
}
if (n % 2 == 1) {
    n += 1
}

let star = prompt('Belgilangan katakchalarga kiritiladigan belgi:', '*')
while (star.length > 1) {
    star = prompt('Iltimos faqat 1 ta belgi kiriting:', '*')
}

function stars(n = 3) {
    console.log(`Siz kiritgan ma\'lumot asosida ${n + 1}x${n + 1} kvadrat shakllantirildi.`)
    let space = '( )'
    star = '(' + star + ')'
    for (let i = 0; i <= n; i++) {
        let row = '';
        for (let j = 0; j <= n; j++) {
            if ((i == 0) || (j == 0) || (i == n) || (j == n) || (i == j) || ((i + j) == n)) {
                row += star
            } else { row += space }
        }
        console.log(row)
    }
    alert('Natija console da berildi.')
}

stars(n)

