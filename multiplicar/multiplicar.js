// requireds
const fs = require('fs');

// module.exports.crearArchivoPrimero
let crearArchivoPrimero = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido en base No es un Numero !!!')
        }

        let data = '';

        for (let index = 1; index <= 10; index++) {
            data += `${base} * ${index}= ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) 
            reject(err);
            else
            resolve(`tabla-${base}.txt`)
            // console.log(`El archivo tablaM-${base} fue creado!`);
        });
    });
}

module.exports = {
    crearArchivoPrimero
}
