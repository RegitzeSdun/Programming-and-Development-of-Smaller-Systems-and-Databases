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

const checkBeholdning = (order) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let inStock = order.every(item => beholdning[item[0]] >= item[1]);
            if (inStock) {
                resolve('Tak skal du have. Din ordre blev gennemført.');
            } else {
                reject('Vi er kede af det. Din ordre kunne ikke gennemføres, fordi nogle varer er udsolgt.')
            }
        },1000);
    })
} 

const handleSucces = (resolvedValue) => {
    console.log(resolvedValue);
}


const handleFailure = (resolvedValue) => {
    console.log(resolvedValue);
}
const order = [['kjoler',1],['bukser',2]]

checkBeholdning(order).then(handleSucces,handleFailure)

