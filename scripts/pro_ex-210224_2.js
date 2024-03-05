function math() {
    let amallar = '+-*/%'
    for (let i = 0; i <= k; i++) {
        let index = Math.round((Math.random() * ((amallar.length - 1) - 0) + 0))
        let amal = amallar[index]
        let n = Math.round(Math.random() * 10)
        let m = Math.round(Math.random() * 10)
        let userAnswer = +prompt('Hisoblang: ' + n + amal + m)
        if (amal == '+') {
            answer = n + m
        }
        else if (amal == '-') {
            answer = n - m
        }
        else if (amal == '*') {
            answer = n * m
        }
        else if (amal == '/') {
            answer = n / m
        }
        else {
            answer = n % m
        }

        if (userAnswer == answer) {
            console.log(`Sizning javobingiz to\'ri: ${userAnswer}`)
        } else {
            console.log(`Sizning javobingiz noto\'ri: ${userAnswer}, to\'g\'ri javob: ${answer}`)
        }
    }
    alert('Natijalarni console da berildi.')
}

k = +prompt('Yechmoqchi bo\'gan misollar sonini kiriting:', 5)
math(k)


// let str = "/";
// let asciiCode = str.charCodeAt(0);

