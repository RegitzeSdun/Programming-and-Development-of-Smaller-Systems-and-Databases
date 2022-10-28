// const executorFunction = (resolve,reject) => {
//     if (someCondition) {
//         resolve('I resolved!');
//     } else {
//         reject('I rejected!');
//     }
// }
// const myFirstPromise = new Promise(executorFunction);

const beholdning = {
    kjoler: 1900,
    bukser: 1088,
    jakker: 1344
};

const myExecutor   = (resolve,reject) => {
    if (beholdning.jakker > 0) {
        resolve('Jakke bestilt.')
    }
    else {
        reject('Varen er udsolgt.')
    }
}

const bestilJakker = () => {return new Promise(myExecutor)};
const orderPromise = bestilJakker()
console.log(beholdning)
console.log(orderPromise)

beholdning.jakker = 0
const orderPromise2 = bestilJakker()
console.log(beholdning)
console.log(orderPromise2)


