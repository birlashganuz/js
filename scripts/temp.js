// let a=2
// let b = 3
// name = 'sal'
// alert('Hello: ${a+b}')
// alert( `hello ${"name"}`)
// alert( +"" );
// let counter = 1;
// let a = counter++; // (*) меняем ++counter на counter++

// alert(counter); // 1
// alert(a); // 1

// for (a = 1, b = 1, c = 10; a < 10; (a++, b++,c--)) {
//     // console.log(a)
//     // console.log(b)
//     console.log(c)
// }

// console.log("" + 1 + 0) //10
// console.log("" - 1 + 0) //-1
// console.log(true + false)//1
// console.log(6 / "3")//2
// console.log("2" * "3")//6
// console.log(4 + 5 + "px")//9px
// console.log("$" + 4 + 5)//$45
// console.log("4" - 2)//2
// console.log("4px" - 2) // NaN
// console.log("  -9  " + 5)//    -9   5
// console.log("  -9  " - 5)// -14
// console.log(null + 1) //1
// console.log(undefined + 1) // NaN
// console.log(" \t \n" - 2) //-2

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(a + b); // 12
// alert((5 - (5 % 2)) / 2)




// const randomProp = obj => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
const colors = {
  aqua: '#00ffff',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  black: '#000000',
  blue: '#0000ff',
  brown: '#a52a2a',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgrey: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkviolet: '#9400d3',
  fuchsia: '#ff00ff',
  gold: '#ffd700',
  green: '#008000',
  indigo: '#4b0082',
  khaki: '#f0e68c',
  lightblue: '#add8e6',
  lightcyan: '#e0ffff',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  magenta: '#ff00ff',
  maroon: '#800000',
  navy: '#000080',
  olive: '#808000',
  orange: '#ffa500',
  pink: '#ffc0cb',
  purple: '#800080',
  violet: '#800080',
  red: '#ff0000',
  silver: '#c0c0c0',
  white: '#ffffff',
  yellow: '#ffff00',
};
// randomProp(colors)     // 'red'

// var randomProperty = function (obj) {
//   var keys = Object.keys(obj);
//   return obj[keys[keys.length * Math.random() << 0]];
// };

// let keys = Object.keys(colors)
// console.log(colors[keys[Math.floor(keys.length * Math.random())]])

// let a = 10 * Math.random()
// console.log(`${a} => ${a << 0}`);
// var arr = ["a", "b", "c"];
// console.log(Object.keys(arr)); // консоль: ['0', '1', '2']

// var obj = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.keys(obj)); // консоль: ['0', '1', '2']

// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// };

// console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]


// var obj = { foo: "bar", baz: 42 };
// console.log(Object.values(obj)); // ['bar', 42]

// Массив как объект
// var obj = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.values(obj)); // ['a', 'b', 'c']

// Массив как объект со случайным порядком ключей
// Когда мы используем нумерованные ключ, значения возвращаются в порядке возрастания
// var an_obj = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo неперечисляемое свойство
// var my_obj = Object.create(
//   {},
//   {
//     getFoo: {
//       value: function () {
//         return this.foo;
//       },
//     },
//   },
// );
// my_obj.foo = "bar";
// console.log(Object.values(my_obj)); // ['bar']


// Аргумент, не являющийся объектом, будет приведён к объекту
// console.log(Object.values("foo")); // ['f', 'o', 'o']

// const hello = "привет мир. пока мир";
// const world = hello.substring(7, 10); // с 7-го по 10-й индекс
// console.log(world);
// console.log('mahalla'.lastIndexOf('a', 4));


// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element);

//     }
//     console.log(object[key]);
// }




// // alert('a' in a)

// let a=["letters: 6", "letters: 9", "letters: 5", "letters: 7", "letters: 3"]
// function isSymbolLetter(array) {
//     let includedSimbol = 'qwertyuioplkjhgfdsazxcvbnm';
//     let arrSimbols = array.join('').toLowerCase().split('');
//     let check = 0;

//     arrSimbols.forEach(element => {
//       if (includedSimbol.includes(element)) {
//         check++;
//       }
//     });
//     return check;
//   }
// console.log(isSymbolLetter(a));


// function isSymbolLetter(array) {
//     return array.map(str => { return { 
//       letters: str.toLowerCase().split('').filter(a => a >= 'a' && a <= 'z').length
//     }; });
//   }

//   let data = ["u\Z%Cm@kc|", "6kmpNvMqQK", "THbw%}\_2L", "}QVMQbik@'", "g}7P5+:?>f"];
//   console.log(isSymbolLetter(data));


// let str='asds!ds!!!'
// let count=str.match(/[!]/g).length
// console.log(count);

// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match("ain");
// let result = text.match(/ain/g);
// let result = text.match(/ain/gi);
// console.log(result);
// ["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
//     alert(`У ${item} индекс ${index} в ${array}`);
//   });

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); // 15

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

// function filterRange(arr, a, b) {
//     // добавлены скобки вокруг выражения для улучшения читабельности
//     return arr.filter(item => (a <= item && item <= b));
//   }

// let count_key = str.match(/!/g).length


// const set1 = new Set();
// set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// // Delete any point with `x > 10`.
// set1.forEach((point) => {
//     //   if (point.x > 10) {
//     //     set1.delete(point);
//     //   }
// });

// console.log(set1);
// console.log(set1.size);
// // Expected output: 1

// const array = [15, 1, 1, 21, 2, 3, 4, 5, 6, 7, 5, 4, 5, 6, 3, -12]

// const result = array.find(number => number == 2) // 2 teng elementlarning eng birinchisini qaytaradi
// const result = array.filter(value => value > 4) // 4 dan katta elementlarni barchasini qaytaradi
// const result = array.filter(value => value == 4).length 4 dan katta elementlarni barchasini sonini qaytaradi
// const result = array.map(value => 'element:' + value) // har bir topilgan elemnt aldiga "element:" belgisini qo`yib (element:1...) kabi qaytaradi
// const result = array.sort((value1, value2) => value1 - value2) // value1-value2 - o`sib borish tartibida qaytaradi

// console.log(result);


function union_num() {
  const a = [9, 1, 5, 5, 3, 5, 6]
  for (let i = 0; i < array.length; i++) {
    let s = 0
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        if (a[i] == a[j]) { s++ }
      }
    }
    if (s == 0) { console.log(a[i]) }
  }

}


function drawStairs(n) {
  let a = []
  for (let i = 0; i < n; i++) {
    a[i] = ' '.repeat(i) + 'I\n'
  }
  return a.join('\n')

  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = `${' '.repeat(i)}I`;
  }

  return result.join('\n');
}

// drawStairs(2)

console.log(drawStairs(2));


function findUniq(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let s = 0
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[i] == arr[j]) { s++ }
      }
    }
    if (s == 0) { console.log(arr[i]) }
  }
}

findUniq([1, 0, 0])
