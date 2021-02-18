//// практичне
// // - у вас є масив юзрів (до 10), з такими полями наприклад - const users = [
// //     { name: 'olya', gender: 'female', age: 20 }
// //         ...
// // ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// // вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// // перед тим створити 4 папки - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// // і розподілити ваших юзерів саме по відповідних папках.

const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'dir', 'users');

const users = [{name: 'olya', gender: 'female', age: 40},
    {name: 'maria', gender: 'female', age: 20},
    {name: 'solomiya', gender: 'female', age: 19},
    {name: 'karina', gender: 'female', age: 15},
    {name: 'max', gender: 'male', age: 16},
    {name: 'oleg', gender: 'male', age: 30},
    {name: 'andrii', gender: 'male', age: 42},
    {name: 'alina', gender: 'female', age: 14},
    {name: 'yurii', gender: 'male', age: 21},
    {name: 'stepan', gender: 'male', age: 50}];

// users.map(value => {
//     fs.writeFile(path.join(dirPath, value.name), JSON.stringify(value), err => {
//         err ? console.log(err) : null;
//     })
// })

fs.readdir(dirPath, (err, files) => {
    files.map(userName => {
        fs.readFile(path.join(dirPath, userName), (err1, data) => {
            if (JSON.parse(data).gender === "male" && JSON.parse(data).age > 20) {
                fs.rename(path.join(dirPath, userName), path.join(__dirname, 'dir', 'manOlder20', userName), err1 => {
                    err1 ? console.log(err1) : null;
                })
            } else if (JSON.parse(data).gender === "male" && JSON.parse(data).age < 20) {
                fs.rename(path.join(dirPath, userName), path.join(__dirname, 'dir', 'manYounger20', userName), err2 => {
                    err2 ? console.log(err2) : null;
                })
            } else if (JSON.parse(data).gender === "female" && JSON.parse(data).age > 20) {
                fs.rename(path.join(dirPath, userName), path.join(__dirname, 'dir', 'womanOlder20', userName), err3 => {
                    err3 ? console.log(err3) : null;
                })
            } else (JSON.parse(data).gender === "female" && JSON.parse(data).age < 20)
                fs.rename(path.join(dirPath, userName), path.join(__dirname, 'dir', 'womanYounger20', userName), err4 => {
                    err4 ? console.log(err4) : null;
                })
        })
    })
})