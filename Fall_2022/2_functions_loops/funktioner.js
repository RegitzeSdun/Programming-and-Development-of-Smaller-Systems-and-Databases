const width1 = 10;
const height1 = 10;
const area1 = width1*height1;
console.log(area1)

const width2 = 4;
const height2 = 9;
const area2 = width2*height2;
console.log(area2)

const width3 = 10;
const height3 = 10;
const area3 = width3*height3;
console.log(area3)

function rectangle(width, height) {
    console.log(width*height)
}

rectangle(10,6)
rectangle(4,9)
rectangle(10,10)

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick')
greeting()

function f(a) {
    console.log(a+2)
}

const g = function(a) {
    console.log(a+2)
}

let h = (a) => console.log(a+2)
