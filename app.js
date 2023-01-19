function getName() {
let myName = prompt ("What is your name?");
 return document.write(myName);
}
function getAge() {
    if (age <= 18) {

        message = "We hope this website saves you moeny in future.";
    
    } else if (age <= 65) {
        message = "We hope this website saves you money.";
    } else if (age > 65 ) {
        message = "We hope this website saves you money in your retirement.";
    } else {
        message = "We hope this website can save you money at any age.";
    }
}   
// let time = prompt("What hour of the day is it? (0-23)");
// let message;
// console.log(time);

// console.log(message);
// document.write(message);
// if (1 == 2) {
//     console.log("Thats equal");
// } else if (2 == 22) {
//     console.log("Actually, that's not equal");
// }