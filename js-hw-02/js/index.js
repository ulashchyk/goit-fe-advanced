'use strict'
//1
let input;
const numbers = [];
let total = 0;
do {
    input = prompt('Enter your number', '');
    if (input !== null) {
        isNaN(input) !== true ? numbers.push(Number(input)) : alert('You entered not a number');
    }
} while (input !== null);
if (numbers.length > 0) {
    for (const key of numbers) {
        total += key;
            }; console.log('Sum of entered numbers =', total);
} else {alert('Your canceled the operation')};

// ------------2---------------

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let enteredPassword;
do {
    enteredPassword = prompt('Enter your password', '');
    if (enteredPassword === null) {
        break;
    } else if (passwords.includes(enteredPassword) === true) {
        alert('Welcome to hell')
        break;
    } else {
        attemptsLeft -= 1;
        alert(`Wrong password, you have ${attemptsLeft} attemps left`)
    };
} while (attemptsLeft > 0);
if (attemptsLeft === 0) {
    alert('You entered a wrong password too many times')
};