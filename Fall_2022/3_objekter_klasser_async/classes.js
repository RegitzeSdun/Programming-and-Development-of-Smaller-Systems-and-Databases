class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age () {
        let date = new Date();
        return date.getFullYear()-this.year;
    }
}

let myCar1 = new Car("Tesla",2019)
let myCar2 = new Car("Audi",2020)

console.log(myCar1)
console.log(myCar2)

console.log("My car is " + myCar1.age() + " years old.");
// My car is 3 years old.
