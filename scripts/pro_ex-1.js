let a = +prompt('Ixtiyoriy natural son kiriting: ')
while (isNaN(a)) {
    a = +prompt('Masala shartiga mos son kiririting: ')
}
if (a == 0) {
    alert(a + ' soni juft ham toq ham emas.')
}
else if (a % 2 == 0) {
    alert(a + ' soni juft son.')
} else if (a % 2 != 0) {
    alert(a + ' soni toq son.')
}
