function myFirstFunc() {
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("J");
}
myFirstFunc()

function addTwoNumb(numb1, numb2){
    return numb1+ numb2
}
console.log(addTwoNumb(5,9));

function userLoginMsg(username) {
    return `${username} just logged in.`
}
console.log(userLoginMsg("Anuj"));

// if argument is not passed while calling a function in that case
function userLoginMsg(username) {
    if(username === undefined) { 
        // you can also write(!userame) instead of (username === undefined)
        console.log(`Please enter correct username.`);
        return
    }
    return `${username} just logged in.`
}
console.log(userLoginMsg());


// also we can set a default value as "username="New Buddy"" which will print when user forget to pass argument.In this case the if statement will never run becoz username cannot be undefined ever.
function userLoginMsg(username="New Buddy") {
    if(!username) { 
        console.log(`Please enter correct username.`);
        return
    }
    return `${username} just logged in.`
}
userLoginMsg();

// using "rest operator (i.e., ...)" we can pass any number of parameters in the function. Eg.
function calculateCardPrice(...numb1){
    return numb1
}
console.log(calculateCardPrice(2,85,36,9000,1600));

// but if we pass some arguments and then apply rest operator then some parameters will be kept under variables and rest within an array. Eg
function calculateCartPrice(val1, val2, ...numb1){
    return numb1
}
console.log(calculateCartPrice(2,85,36,9000,1600));

// how to access objects in functions

const user ={
    itemname: "Winter wear",
    price: 9000
}

function handleObjectCart(anyobject) {
    console.log(`${anyobject.itemname} is the item ordered having price @ ${anyobject.price} dollars`);
}
handleObjectCart(user)

// instead of creating object & then passing it as parameter we can directly create object while calling function. Eg.

handleObjectCart({
    itemname: "Women Jeans",
    price: 3000
})

// How to pass or access Arrays in function

const myNewArray =[200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[0]
}

console.log(returnSecondValue(myNewArray));

// Similarly as in object, instead of creating an array & then passing it as parameter we can directly create aray while calling function. Eg.

console.log(returnSecondValue([600,100,200,800]));