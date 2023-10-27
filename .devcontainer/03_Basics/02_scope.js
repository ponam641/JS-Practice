// "var" doesn't work properly with block scope i.e. {} thats why "let" and "const" keywords are used. Eg. 
if(true) {
    let a = 20
    const b = 30
    var c = 50
}

// console.log(a); 
// console.log(b); 
// both above will show error in output
console.log(c); // this will print coz var keyword has block scope issue.

// scopes are of 2 types: block scope and global scope

function one() {
    const username = "PoonamAnuj"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); 
    // as the scope of website is within two() so it will show error
    two()
}
one()

// same happen in if-else statement

if(true) {
    const username = "AnujPoonam"
    if(username === "AnujPoonam"){
        const website = "codedamn"
        console.log(username + website);
    }
    // console.log(website);
    // this will raise an error due to scope issue
}
// console.log(username);
// again this will also raise an error due to scope issue.



// +++++++++++ interesting +++++++++++++++

// function can be declared in more following ways and access 

function addOne(num){
    return num + 1
}

addOne(6)

const addTwo = function(num) {
    return num+2
} 
addTwo(6)

// both the functions will run but do not print anything as we have not console.log anything 
// but if we call addTwo() before its declaration it will show an error becoz we have hold the addTwo() in a variable. 

// However, if we call addOne() before its declaration it will run but do not print anything reson we already knows.