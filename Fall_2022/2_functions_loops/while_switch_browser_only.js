
let yourName;
do {
 yourName = prompt("Who are you?");
} while (!yourName
console.log(yourName);

switch (promt("what is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;

}