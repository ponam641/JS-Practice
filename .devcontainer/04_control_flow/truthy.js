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