let str = 'Matndagi unli harflarni olib tashlash'
let result = ''
for (let key of str) {
    if (key != 'a' && key != 'o' && key != 'i' && key != 'u' && key != 'e') {
        result = result + key
    }
}
console.log(str);
console.log(result);















































// let str = "Matndagi unli harflarni sonini aniqlash va ularni o'chirib tashlash"
// let s = 0
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'a' || str[i] == 'o' || str[i] == 'u' || str[i] == 'i' || str[i] == 'e') {
//         s++
//     }
// }
// // console.log(s);


// let str1 = ''
// for (let char of str) {
//     if (char != 'a' && char != 'o' && char != 'u' && char != 'i' && char != 'e') {
//         str1 = str1 + char
//     }
// }


// while (str.indexOf('a')) {
//     str = str.replace('a', '')
// }

// alert(str.at(0))
// str = str.replace('a', '')
// alert(str)


// for (let i = 0; i < str.length; i++) {
//     const element = array[i];

// }

// console.log(str);
// console.log(str1);
// str = str.replace(/[aouie]/g, '')
// console.log(str);

// const hello = "привет мир. пока мир";
// const world = hello.substring(7, 10); // с 7-го по 10-й индекс
// console.log(world); // мир
// const bye = hello.substring(12);    // c 12 индекса до конца строки
// console.log(bye); // пока мир