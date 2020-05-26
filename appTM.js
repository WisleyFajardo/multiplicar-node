// requireds
// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivoPrimero } = require('./multiplicar/multiplicar');

console.log(crearArchivoPrimero); //{ crearArchivoPrimero: [Function: crearArchivoPrimero] }
// podria utilizar multiplicar.crearArchivoPrimero

// let base = 5;

// console.log(module);

// console.log(process.argv);
// let argv = process.argv;
// let parametro = argv[2];

// console.log(parametro);

let argv = process.argv;
let parametro = argv[2];

let base = parametro.split('=')[1];

console.log(base); 

crearArchivoPrimero(base)
    .then(archivo1 => console.log(`Archivo creado: ${archivo1}`))
    .catch(e => console.log('perrito', e));