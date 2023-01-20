function getName() {
    let myName = prompt ("What is your name?");
    document.write (myName);
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
    document.write (message);
}   
function getRate() {
    let rate = prompt ("What is your unit rate (1.0-99.99)");
    
    let units = prompt ("How many units of energy have you used this month? (1.0-999999.99)");

    let bill = ("Your estimated bill this month is £" + rate * units + "!");
    
    document.write (bill);
}

// function to make the user guess my age
function guessAge() {

    let answer;

// while the answer is incorrect keep asking
while ( answer != 42) {
        answer = prompt ("Guess a number between 35 and 45.");
        if(answer != 42) { alert("That is not the answer!");
        } else { alert ("Correct! The answer is 42!");
        document.write ("You guessed the answer to life, the universe, and everything!");
        }
    }
}


// function that lets the user rate the website
function getRating () {
    let rating = prompt ("Please rate our website 1-5.");
    let output = "Your rated us: ";

    for (let i = 0; i < rating; i++) {
        output = output + "<img src='images/iflame.png' class='flame' />"
    }
    document.write (output);
}

// let string ="Tim";
// let string2 ="Smith";
// let string 3 =
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