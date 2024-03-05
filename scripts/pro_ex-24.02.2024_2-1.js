function cartObj() {
    let rand = randomNumber(1, 2)

    const priceList = {
        1: {
            'Lavash': {
                info: 'Big cheese',
                price: 1500
            },
            'Hot-Dog': {
                info: 'Mini',
                price: 1500
            },
            'Cola': {
                info: '1.5 L',
                price: 9000
            },
        },
        2: {
            'Lavash1': {
                info: 'Big cheese1',
                price: 1500
            },
            'Hot-Dog1': {
                info: 'Mini1',
                price: 1500
            },
            'Cola1': {
                info: '1.5 L',
                price: 9000
            },
        }
    }

    return priceList[rand]
}