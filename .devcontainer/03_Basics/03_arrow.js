const user = {
    username: "Poonam",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`);
        //to use current context(values) i.e.,to use "user"object keys in w/c welcomeMessage() present we can write "this" keyword same as above.
        console.log(this);
        // when we console.log "this" keyword within "user" object it will print complete object detail but if we we console.log "this" keyword outside object i.e., globally it will print an empty object.
    }
}
user.welcomeMessage()
user.username = "Anuj"
user.welcomeMessage()
// Since in welcomeMessage() we have used the keyword "this" with username so when we change the context(value) it will automatically changes the message as well.
console.log(this);// it will print an empty object.

//+++++++++++ Important/Intersting ++++++++++++
// if we we console.log "this" keyword in the browser console, it will print "Window" but if we we console.log "this" keyword here we will get empty object. This is because in browser the "Window" is the global object so it will print "Window" instead of empty object.


function chai() {
    const username = "Anuj"
    console.log(this);
    console.log(this.username);
}

chai()// it will print some data which indicates there is some value inside "this" keyword. But if we use "this" keyword with variables it will not work and print "undefined" 
// which means "this" keyword is not applicable in functions.

// Different ways to write function:
let chai1 = function() {
    const username = "Anuj Sharma"
    console.log(`${username}, Welcome home!`);
}
chai1()

function chai2() {
    const username = "Anuj"
    console.log(this);
    console.log(this.username);
}

chai2()

// ++++++++++++ Arrow functions +++++++++++++++
let chai3 = () => {
    const username = "Anuj Sharma"
    console.log(`${username}, Welcome home!`);
}
chai3()

// Arrow function with more than one paramter

const addTwo=(num1, num2)=> {
    return num1+num2
}
console.log(addTwo(3,8));

// Implicit return Arrow function

const addTwo1=(num1, num2)=> num1+num2
console.log(addTwo1(3,8));
// this arrow function is defined in one line and in this there is no need to write "return" keyword and add {} braces.

// Another way to write implicit arrow function
const addTwo2=(num1, num2)=> (num1+num2)
console.log(addTwo2(9,5));
// PLease note that if we use {} in function then it is mandatory/ reqd to write "return" keyword but if we use () in function then then is no need to write "return" keyword. Highly useful in "React"

// to return objects in Arrow function

const addNum=(num1, num2)=> ({username: "AnujPoonam"})
console.log(addNum(9,5));

// in this case we need to follow above syntax i.e.,within paranthesis we create Object using {}