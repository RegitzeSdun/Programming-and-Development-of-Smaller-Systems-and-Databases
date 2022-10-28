// events

const events = require('events');

// console

const kæledyrArray = ['hund','kat','fugl','kanin'];

console.log(kæledyrArray)

console.table(kæledyrArray)

console.assert(kæledyrArray.length>5)

// process module
console.log(process.env)
console.log(process.memoryUsage())
console.log(process.argv)

let startHukommelse = process.memoryUsage().heapUsed;

console.log('here')

let ord = process.argv[2];
console.log(`\n Dit ord er ${ord}`)

// Lav en ny array
let ordArray = [];

// Loop 1000 gange
for (let i=0; i<1000; i++) {
    ordArray.push(`${ord}`)
}

console.log(`\n Start brug af hukommelse: ${startHukommelse}.
Nuværende brug af hukommelse: ${process.memoryUsage().heapUsed}.
Efter at have tilføjet ord til arrayet bruger processen ${process.memoryUsage().heapUsed-startHukommelse} flere bytes of memory.`)

// OS
const os = require('os');
server = {
    type: os.type(),
    arkitektur: os.arch(),
    hjemmemappe: os.homedir(),
    host: os.hostname(),
    uptime: os.uptime()
}

// util
const util = require('util');
const idag = new Date();
let juleaften = 'December, 24, 2022';
console.log(idag)
console.log(juleaften)
console.log(util.types.isDate(idag))
console.log(util.types.isDate(juleaften))

juleaften = new Date(2022,12,24)
console.log(util.types.isDate(juleaften))