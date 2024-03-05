function randomNumber(min, max) {
    let number = Math.round(Math.random() * (max - min) + min)
    return number
}

function counter(b) {
    let products = ''
    let totalPrice = 0
    for (key in b) {
        products += key + '( ' + b[key].info + ' ), '
        totalPrice += b[key].price
    }

    totalPrice += 9000

    console.log(`Sizning buyurtmangiz: ${products} yetkazib berish xizmati bilan ${totalPrice}`);
}


if (typeof cartObj != 'undefined') {
    let b = cartObj()
    counter(b)
} else {
    alert('cartObj obyekti topilmadi')
}







