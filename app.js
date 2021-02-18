// const fs = require('fs');
//
// const dirPath1800 = __dirname + '/dir/1800';
// const dirPath2000 = __dirname + '/dir/2000';

// const dirPathKarina2000 = __dirname + '/dir/2000/Karina.txt';
// const dirPathOleg1800 = __dirname + '/dir/1800/Oleg.txt';
//

// fs.writeFile(dirPathKarina2000,'{"gender": "female"}',err => {
//     err ? console.log(err) : null;
// });
// fs.writeFile(dirPathOleg1800,'{"gender": "male"}',err => {
//     err ? console.log(err) : null;
// });


// fs.readdir(dirPath1800,(err, files) => {
//     err ? console.log(err) : null;
//     console.log(files);
//
//     files.map(menFiles => {
//         console.log(menFiles)
//         fs.rename(`${__dirname}/dir/1800/Oleg.txt`,`${__dirname}/dir/2000/Oleg.txt`,err1 => {
//             err ? console.log(err) : null;
//         });
//     });
// });

// fs.readdir(dirPath2000,(err, files) => {
//     err ? console.log(err) : null;
//     console.log(files);
//
//     files.map(womanFiles=>{
//         console.log(womanFiles);
//         fs.rename(`${__dirname}/dir/2000/Karina.txt`,`${__dirname}/dir/1800/Karina.txt`,err1 => {
//             err ? console.log(err) : null;
//         });
//     });
// });