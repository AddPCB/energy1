function getName() {
    let myName = prompt ("What is your name?");
    document.write(myName);
}
function getAge() { 
    let age = prompt ("What is your age? (1-99)");

    let message;

if (age <= 18) {
        message = "we hope this website saves you money in future.";
    } else if (age <= 64) {
        message = "we hope this website saves you money.";
    } else if (age > 65 ) {
        message = "we hope this website saves you money in your retirement.";
    } else {
        message = "we hope this website can save you money at any age.";
    }
    document.write(message);
}   
function getRate() {
    let rate = prompt ("What is your unit rate (1.0-99.99)");
    
    let units = prompt ("How many units of energy have you used this month? (1.0-999999.99)");
 
    let bill = ("Your estimated bill this month is £" + rate * units + "!");
    document.write(bill);
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