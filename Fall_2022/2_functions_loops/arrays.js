let slik = ['skumfiduser','lakridser','vingummier','bolsjer'];

slik[0] = 'chokolade'
console.log(slik) // prints ['chokolade', 'lakridser', 'vingummier', 'bolsjer']

slik = ['chokolade']
console.log(slik) // prints ['chokolade']

slik = 'chokolade'
console.log(slik) // prints 'chokolade



const frugt = ['vindruer','æbler','bananer','vandmelon'];

frugt[frugt.length-1] = 'kirsebær'
console.log(frugt) // prints ['vindruer', 'æbler', 'bananer', 'kirsebær']

//frugt = ['kirsebær']
//console.log(frugt) // prints Uncaught TypeError TypeError: Assignment to constant variable

//frugt = 'kirsebær'
//console.log(frugt) // prints Uncaught TypeError TypeError: Assignment to constant variable

navne = ['Anders','Andreas','Anna']

for (var i = 0; i < navne.length; i++) {
    console.log(navne[i]); 
}

navne.forEach((navn) => console.log(navn));

for (const navn of navne) { 
    console.log(navn); 
}



const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr) // prints [2, 3, 4, 5]


function myFunction(num) {
    return num * 10;
  }

const updatedArr = newArr.map(myFunction)
console.log(updatedArr) // prints [20, 30, 40, 50]

const finalArr = updatedArr.map(x => x-10)
console.log(finalArr) // prints [10, 20, 30, 40]




