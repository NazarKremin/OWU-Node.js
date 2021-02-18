//Task*
//
// function sortFiles(link) {
//     fs.readdir(link, (err, files) => {
//         err ? console.log(err) : null;
//
//         files.forEach(fileName => {
//             const pathFile = path.join(link, fileName);
//             fs.stat(pathFile, (err1, stats) => {
//                 if (stats.isDirectory()) {
//                     console.log(true);
//                     return sort(pathFile);
//                 }
//
//                 console.log(false)
//                 const pathSort = path.join(__dirname, 'sortFile', fileName);
//                 fs.rename(pathFile, pathSort,
//                     err => {
//                         if (err) {
//                             console.log(err);
//                             return;
//                         }
//                     })
//             })
//         })
//     });
// };
//
// sort(randomFile);

//Normal Task

const fs = require('fs');
const path = require('path');

const dirGendersFemale = path.join(__dirname, 'dir', 'genders', 'Karina.txt');
const dirGendersMale = path.join(__dirname, 'dir', 'genders', 'Oleg.txt');
const dirGenders = path.join(__dirname, 'dir', 'genders')

fs.writeFile(dirGendersFemale, '{"gender": "female"}', err => {
    if (err) {
        console.log(err)
    }
});

fs.writeFile(dirGendersMale, '{"gender": "male"}', err => {
    if (err) {
        console.log(err)
    }
});

fs.readdir(derGenderKarina, (err, files) => {
    if (err) {
        console.log(err)
    }
    console.log(files);
});

fs.readFile(derGenderKarina, (err, data) => {
    if (JSON.parse(data).gender === 'female') {
        console.log(JSON.parse(data).gender);
    }
});

fs.readdir(dirGenders, (err, files) => {
    if (err) {
        console.log(err)
    }
    console.log(files);

    files.map(fileName => {
        fs.readFile(path.join(dirGenders, fileName), (err1, data) => {
            console.log(fileName);
            if (JSON.parse(data).gender === "male") {
                fs.rename(path.join(__dirname, 'dir', 'genders', fileName), path.join(__dirname, 'dir', '2000', fileName), err2 => {
                    if (err2) {
                        console.log(err2);
                    }
                })
            }
        });
    });
});

fs.readdir(dirGenders, (err, files) => {
    if (err) {
        console.log(err)
    }
    console.log(files);

    files.map(fileName => {
        fs.readFile(path.join(dirGenders, fileName), (err1, data) => {
            console.log(fileName);
            if (JSON.parse(data).gender === "female") {
                fs.rename(path.join(__dirname, 'dir', 'genders', fileName), path.join(__dirname, 'dir', '1800', fileName), err2 => {
                    if (err2) {
                        console.log(err2);
                    }
                })
            }
        });
    });
});





