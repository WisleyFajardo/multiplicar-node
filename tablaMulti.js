// requireds
// tres tipos de requireds
const fs = require('fs');
// const express = require('express'); de npm
// const decarpetas = require('./decarpetas');


let base = 5;
let data = '';

// fs.writeFile('message.txt', 'hola mundo', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });

for (let index = 1; index <= 10; index++) {
    data += `${ base } * ${ index }= ${ base * index }\n`;
}

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tablaM-${ base } fue creado!`);
  });
