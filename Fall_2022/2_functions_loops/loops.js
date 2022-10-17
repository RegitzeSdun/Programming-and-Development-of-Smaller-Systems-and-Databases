//let yourName;
//do {
//  yourName = prompt("Who are you?");
//} while (!yourName
//console.log(yourName);

for (let i=0; i<10; i++) {
    console.log(i)
}

let j=0
while (j<10) {
    j = j+1
    console.log(j)
}

let k=10
while (k==0) {
    console.log(k)
    k -=1
}

//for (InitializerExpression; ConditionExpression; UpdateExpression) {
//    Iterationbody
//}


function copyChar (a1,a2) {
    for (let l=0;l<a1.length;l++){
        a2[l] = a1[l]
    }
}

a1 = ["hi","there"]
a2 = ["a","b","c"]

console.log(a1)
console.log(a2)
copyChar(a1,a2)
console.log(a1)
console.log(a2)
