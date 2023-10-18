// The way data is saved in memory and can be accessed on the basis of it, datatypes are of 2 types:
// 1. Primitive Datatypes-further of 7 types: String, Number, BigInt, Boolean, Symbol, null, undefined
// Examples:
const isLoggedIn = false
const score = 58
const price = 52.8
const outsideTemp = null 
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);




// 2. Non-Primitive Types- further of 3 types: Array, Object, Functions

const heros = ["shaktiman", "naagraj", "dooga"]

let mydata ={
    name: "Poonam",
    age: 33,
    haveEmail: true
}

const myFunction = function () {
    console.log("Hello World!")
}
