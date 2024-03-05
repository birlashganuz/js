const dictionary = {
  Cat: 'Mushuk',
  Bat: 'Ko\'rshapalak',
  Rat: 'Kalamush',
  One: '1',
  Lesson: 'Dars',
  Cap: 'Kepka',
  Hat: 'Shlyapa',
  Pen: 'Ruchka',
  Hen: 'Tovuq',
  And: 'Va',
  Two: '2',
  See: 'Ko\'ryapman',
  Three: '3',
  Dog: 'It',
  Pig: 'Cho\'chqa',
  Cup: 'Finjon',
  Gun: 'Miltiq',
  Four: '4',
  Box: 'Quti',
  Fox: 'Tulki',
  Bed: 'Karavot',
  Jam: 'Murabbo',
  Five: '5',
  Star: 'Yulduz',
  Vase: 'Guldon',
  Kitten: 'Mushukcha',
  Lamp: 'Lampa',
  Six: '6',
  Boy: "O'g'il bola",
  Wolf: 'Bo\'ri',
  Zebra: 'Zebra',
  Squirrel: 'Olmaxon',
  Say: 'Ayting',
  Seven: "7",
  I: "Men",
  Have: "Ega bo'lmoq",
  Book: "Kitob",
  Copybook: "Daftar",
  But: "Biroq",
  Spoon: "Qoshiq",
  Show: "Ko'satmoq",
  Me: "Menga",
  Give: "Bermoq",
  Eight: "8",
  This: "Bu",
  That: "Anavi",
  He: "U",
  Ball: "Koptok",
  Stick: "Tayoq",
  Too: "Ham",
  Pistol: "Pistolet",
  Word: "so'z",
  Nine: "9",
  Girl: "Qiz bola",
  Dish: "Lagan",
  Fish: "Baliq",
  On: "Ustida",
  She: "U",
  Frog: "Qurbaqa",
  Log: "To\'sin",
  In: "Ichida",
  Lake: "Ko\'l",
  Snake: "Ilon",
  Like: "Yoqtirmoq",
  Cake: "Tort",
  Doll: "Qo\'g\'rchoq",
  Ten: "10",
  Yes: "Ha",
  You: "Siz",
  Rabbit: "Quyon",
  No: "Yo\'q",
  Chicken: "Jo\'ja",
  Count: "Sanamoq",
  From: "Dan",
  To: "Gacha",
  Catch: "Tutmoq",
  Eleven: "11",
  How: "Qanday",
  Many: "Ko\'p",
  We: "Biz",
  Duck: "Or\'dak",
  Duckling: "O\'rdakcha",
  Cow: "Sigir",
  It: "U",
  With: "Bilan",
  Twelve: "12",
  They: "Ular",
  Horse: "Ot",
  Black: "Qora",
  Big: "Katta",
  Goat: "Echki",
  Red: "Qizil",
  White: "Oq",
  Car: "Mashina",
  Street: "Ko\'cha",
  Ribbon: "Lenta",
  Lemon: "Limon",
  Thirteen: "13",
  Where: "Qayerda",
  Room: "Xona",
  Your: "Sizning",
  Table: "Stol",
  House: "Uy",
  Garden: "Bog\'",
  My: "Mening",
  Under: "Tagida",
  Tree: "Daraxt",
  Very: "Juda",
  Good: "Yaxshi",
}

function test(dictionary) {
  let s = 0 // to`gri javoblar soni
  let k = 0 // noto`gri javoblar soni
  for (let key in dictionary) {
    let uz = dictionary[key]

    let en = prompt(uz + ' ("stop loop" bilan sinovni to\'xtatishingiz mumkin.)')
    if (en == 'stop loop' || en == null) {
      console.log(`Jami ${s + k} ta savoldan ${s} ( ${(s / (s + k)) * 100} % ) tasiga to'ri javob berdingiz.`);
      console.log(`Jami ${s + k} ta savoldan ${k} tasiga noto'ri javob berdingiz.`);
      break
    }

    if (en.toLowerCase() == key.toLowerCase()) {
      console.log("To'g'ri")
      s++
    } else {
      console.log(`Noto'g'ri. To'g'ri javob ${key}`)
      k++
    }
  }
}

test(dictionary)