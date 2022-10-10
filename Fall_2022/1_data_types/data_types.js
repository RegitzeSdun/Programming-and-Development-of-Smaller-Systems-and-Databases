// Aritmetiske operatorer

console.log(100+4*11)
console.log((100+4)*11)

console.log(1-2+1)
console.log((1-2)+1)

console.log(100 % 10)

console.log(31 * 10 / 5)
console.log(31 % 10 / 5)

console.log(31 % (10 / 2))
console.log(31 * (10 / 2))


console.log(3**(4*2))

// console.log(5 % 10 - 3)

console.log(-Infinity-1)

// assignment operators
let x = 5
x *= 2
console.log(x)

console.log(`Hej med jer`)
console.log("Hej med jer")
console.log('Hej med jer')

console.log(`Hej med \n jer`)
console.log("Hej med \n jer")
console.log('Hej med \n jer')

console.log(`Hej med \\n jer`)

let navn = "ida"
console.log(`Hej ${navn}`)
console.log("Hej ${navn}")
console.log('Hej ${navn}')


// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)






// addition af data typer
console.log(5+5)
console.log("fem"+5)
console.log("fem"+"fem")

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // expected output: true
  
  console.log(auto instanceof Object);
  // expected output: true

  console.log(typeof(false))


  // sammenlignings
  console.log(2!="2")
  console.log(2!=="2")
  console.log(2!="2")

  console.log(NaN===NaN)

  console.log(!false || true)

  console.log(1+1==2 && 10*10 >50)

  console.log(null && "user")
  console.log("agnes" && "user")