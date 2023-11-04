const userEmail = ''
// when we don't compare the statement in if statement and assumes that the value we have entered is true such condition is called truthy value
if (userEmail) {
    console.log("got user email");
} else{
    console.log("don't have user email");
}

// falsy values:
// false, 0, -0, bigInt 0n, "", null, undefined, NaN
// truthy values:
// true, [], "0",'false', " ", {}, function(){} (empty function)


// how to check empty array:
const emptyArray = []
if (emptyArray.length === 0){
    console.log("Array is empty");
}



// how to check object is empty or not
const emptyObject = {}
if (Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

// nullish Coalescing Operator (??) is worked on 2 keywords i.e., "null" and "undefined"
// this operator is used when we received data from database and in data there is a chance of getting "null" or "undefined" in that case in order to make code work properly we provide an alternate value whcih can be returned from any method or function. Eg
const val1 = null ?? 50 // here we are assuming that the 50 is returned from any method or function

console.log(val1);


const val2 = undefined ?? 10 // here we are assuming that the 10 is returned from any method or function

console.log(val2);

const val3 = null ?? 20 ?? 50 // also it always take the first value that it will receive from any function/method after "null"/"undefined"

console.log(val3);


// ternary operator (?)
// Syntax: (condition) ? true: false
// It simply checks the condition and runs the code in one line.Eg.

const icePackTeaPrice = 100

icePackTeaPrice >= 80 ? console.log("Ice pack tea price is more than 80") : console.log("Ice pack tea is less than 80");
