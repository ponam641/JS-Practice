// high order array loops

// for-of loop with Array
let arr = [1,2,3,4,5]
// Syntax:=> for (const iterator of object) {}

// Please note that => "iterator" in above syntax can be an object, array or string which means all of them are iteratable so in the syntax "iterator of object" doesn't mean that it only works with objects
// "object" in above means that the data on which we want to apply loop. This term "object" is not equal to "Object" keyword.

for (const val of arr) {
    console.log(val);
}

// for-of loop with String
const myString = "PoonamAnuj"
for (const num of myString) {
    console.log(num);
}

// for-of loop with Object
// const myObject = {
//     name: "PoonamAnuj",
//     city: "Ambala",
//     isLoggedIn: true
// }
// for (const num1 of myObject) {
//     console.log(myObject);
// }