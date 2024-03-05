function userAge() {
    name = prompt('Ismingizni kiriting:', 'Karim')
    born = +prompt('Tug\'ilgan yilingizni kiriting:', 2000)
    year = +prompt('Joriy yilni kiriting:', 2024)
    console.log(`${name}, Sizning yoshingiz ${year - born} da`)
}

userAge()