const score = 400
const balance = new Number(100)
console.log(score);
console.log(balance);

console.log(balance.toFixed(2))
console.log(balance.toString().length);

const otherNum = 25.689
console.log(otherNum.toPrecision(3))
// toPercision() is used to precise the value. and upto what extend we have to precise the value depends on the number we provide within paranthesis so the o/p of otherNum is 25.7.

const numTwo = 1000000
console.log(numTwo.toLocaleString("en-IN"));
// toLocaleString("en-IN") converts the number as per indian number system format.


// +++++++++++++Maths++++++++++++++++++++

console.log(Math.abs(-8));
// abs() is used to convert negative numbers into positive
console.log(Math.round(5.6));
console.log(Math.floor(5.9));
console.log(Math.ceil(5.1));
console.log(Math.min(8,3,4,9,1));
console.log(Math.max(8,3,4,9,1));
console.log(Math.random());
// random() is always gives any random number between 0-1

console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+ min)