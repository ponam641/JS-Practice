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