function randomStr() {
    const array = ['Hello', 'Salom', 'Bye', 'Hayr', 'Computer', 'Hisoblagich', 'Create', 'Yaratmoq', 'Flowers', 'Gullar', 'One', '1']

    const randomValues = []
    let min = 0
    let max = array.length-1
    let index
    for (let i = 0; i <= 3; i++) {
        index = Math.round(Math.random() * (max - min) + min)
        randomValues.push(array[index])
    }
    return randomValues
}