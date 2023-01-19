let myName = prompt ("What is your name?");

console.log(myName);

prompt ("Accept cookies?");

let time = prompt("What hour of the day is it? (0-23)");
let message;

console.log(time);

if (time <= 11) {

    message = "Good morning " + myName + "!";

} else if (time <= 18) {
    message = "Good afternoon " + myName + "!";
} else if (time < 24 ) {
    message = "Good evening " + myName + "!";
} else {
    message = "C'mon ," + myName + "that is not a valid time!";
}

console.log(message);
document.write(message);
// if (1 == 2) {
//     console.log("Thats equal");
// } else if (2 == 22) {
//     console.log("Actually, that's not equal");
// }