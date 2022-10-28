let num = 50;

const logNum = () => {
    num = 100;
    console.log(num)
};

// logNum(); num bliver ikke længere sat til 100
console.log(num);  // prints 50


let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x+y+z)
}
console.log(x+z)
console.log(y)
