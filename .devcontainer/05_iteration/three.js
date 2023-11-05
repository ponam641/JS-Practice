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

// Map: just like object it holds key-value pair. But unlike objects, it remembers original insertion order of the keys. Also it do not allow duplicacy. Eg.

const map = new Map()
// how to ener key-value pair in map:
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("USA", "United States of America")

// console.log(map);
// for-of loop and map

for (const key of map) {
    // console.log(key);// it will print each key-value pair as an individual array.
}

// to print simply key-value pair without array 
for (const [key, value] of map) {
    // console.log(key+" :- "+value);
}

// for-of loop with Object
const myObject = {
    name: "PoonamAnuj",
    city: "Ambala",
    isLoggedIn: true
}
for (const [key, value] of myObject) {
    console.log(key + " : "+value);
}

// Object are not iteratable with for-of loop so above code will not run.