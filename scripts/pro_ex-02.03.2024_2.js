let str = prompt('Matn kiriting', 'J!a!va!!S!cr!ip!t!!!!')
let del_key = prompt('Kerakmas belgi', '!')
let del_count = +prompt('Nechtasi uchirilsin', 2)

function name1(str, del_key, del_count) {
    
    str_arr = str.split('')
    let count_key = str_arr.filter(key => key == del_key).length // 1-variant
    // let count_key = 0 // 2-variant
    // str_arr.forEach(function (value) {  
    //     if (value == del_key) {
    //         count_key++
    //     }
    // });
    if (del_count <= count_key) {
        for (let i = 0; i < del_count; i++) {
            str = str.replace(del_key, '')
        }

    } else {
        for (let i = 0; i <= count_key; i++) {
            str = str.replace(del_key, '')
        }
    }
    let result = { 'str': str, 'count_key': count_key }
    return (result)
}

result = name1(str, del_key, del_count)

console.log(`Berilgan matn: ${str}`);
console.log(`Keraksiz belgi: ${del_key}`);
console.log(`Keraksiz belgidan o\'chiriladiganlari soni: ${del_count}`);
console.log(`Haqiqatda mavjud keraksiz belgilar soni ${result.count_key}`);
console.log(`Natija: ${result.str}`);
