let str = prompt('Buyruqni kiriting: ') //add, 152
const names = []
while (str != 'stop' && str != null) {
    let n = str.indexOf(',')
    let str1 = ''
    if (n != -1 && str != 'stop') {
        str = str.toLowerCase().trim()
        str1 = str.slice(n + 1).trim()
        if (str.startsWith("add")) {
            add(str1)
        } else if (str.startsWith("del")) {
            del(str1)
        } else {
            alert('Sintaktik xatolik. Buyruq sintaksisi "add, str" yoki "del,str"')
        }

    } else {
        alert('Sintaktik xatolik. Buyruq sintaksisi "add, str" yoki "del,str"')
    }
    console.log(names);
    str = prompt('Buyruqni kiriting: ') 
}

function add(str) {
    names.push(str)
    return names
}
function del(str) {
    let k = names.indexOf(str)
    names.splice(k, 1)
    return names
}