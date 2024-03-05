let year = +prompt('Yilni niriting')

if (year > 0 && year <= 9999 && !isNaN(year)) {
    if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0)) {
        var fevral = 29
    } else { var fevral = 28 }
}
let yanvar = 31
let mart = 31
let aprel = 30
let may = 31
let iyun = 30
let iyul = 31
let avgust = 31
let sentabr = 30
let oktabr = 31
let noyabr = 30
let dekabr = 31

s = 256 - (yanvar + fevral + mart + aprel + may + iyun + iyul + avgust)
alert('Dasturchilar kuni: ' + s + '.09.' + year)
