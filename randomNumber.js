console.log('hello from randomNumber.js');

let min = 100
let max = 1000000
let randomNumber = Math.random() * (max-min) + min;

//console.log (randomNumber)
module.exports = randomNumber;