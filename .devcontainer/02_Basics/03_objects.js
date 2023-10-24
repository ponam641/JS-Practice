// how to create & declare objects: 2 methods

// 1. Object constructors
// singleton: When an object is declared as constructor such object is known as singleton objects.
// Eg.: Object.create()



// 2. Object literals
const userOne = {
    "full name": "Poonam Sharma",
    age: 33,
    city: "Ambala",
    isMarried: true,
    email: "ponam641@gmail.com",
    lastLoginDays: ["Sunday", "Saturday"]
}

// how to access objects:2 ways
// 1. Using . method:
console.log(userOne.lastLoginDays);
// 2. Using [] method:
console.log(userOne["email"])
// Using []method is useful when the key is of more than 1 word eg. "full name"
console.log(userOne["full name"]);

// how to declare symbol and use it in objects

let mySym = Symbol("key1")
const myUser = {
    "name": "Anuj",
    [mySym]: mySym,
    age: 32,
    city: "Mahesh Nagar", 
}

console.log(myUser[mySym]);
console.log(typeof myUser[mySym]);

// how to change values of objects
userOne.email = "poonam641@icloud.com"
console.log(userOne.email);

// we can also freez or lock the object from doing any kind of change
Object.freeze(myUser)
// now if we try to change any value of myUser object it will not change the value.Eg.
myUser.name = "Anuj Sharma"
console.log(myUser.name);

userOne.greeting = function() {
    console.log("Hello JS Users");
}

userOne.greetingTwo = function() {
    console.log(`Hello JS User, ${this["full name"]}`);
}

// Using this keyword we can access the keys of the same object in which we have defined the function.

console.log(userOne.greeting());
console.log(userOne.greetingTwo());