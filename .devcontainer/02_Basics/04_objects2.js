// 2. Constructor
const tinderUser = new Object()

tinderUser.id = 123
tinderUser.name = "Anuj"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "regular@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Anuj",
            lastname: "Sharma"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname);

// we can also use "?" with object to check if such object exist or not. Eg.console.log(regularUser.fullname?.userfullname.firstname);'

// Objects Methods

const obj1={
    1:'a',
    2:"b"
}
const obj2={
    3:'a',
    4:"b"
}
// how to combine 2 objects:
const obj3 = {...obj1, ...obj2}
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

// how to access objects within array

const userOne = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "p@gmail.com"
    },
    {
        id: 3,
        email: "ap@gmail.com"
    }
]
console.log(userOne[2].email);

// how to access keys and values from object but the output will be an array.
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); 
// entries() will create an array of object with further array of eact key value pair within an object
console.log(tinderUser.hasOwnProperty("isloggedIn"));
console.log(tinderUser.hasOwnProperty("islogged"));
// hasOwnProperty() is used to check if the key exist within the object or not. Result of this method will always be in boolean.


// +++++++++ De-Structure Objects ++++++++

const course = {
    coursename: "JS in Hindi",
    price: 999,
    courseinstructor: "Hitesh"
}
// instead of writing "object.keys" everytime to access the values we can also use the following method
const {courseinstructor} = course
console.log(courseinstructor);