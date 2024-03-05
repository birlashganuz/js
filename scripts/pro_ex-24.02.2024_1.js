const user = {}
for (let i = 1; i <= 10; i++) {
    let name = prompt(`${i} - foydalanuvchi ismini kiriting: `)
    let age = prompt(`${i} - foydalanuvchi yoshini kiriting: `)
    user[i] = { name: name, age: age }
}
for (const key in user) {
    console.log(`${key}-foydalanuvchi:`);
    console.log(`Ismi: ${user[key].name}`);
    console.log(`Yoshi: ${user[key].age}`);
}