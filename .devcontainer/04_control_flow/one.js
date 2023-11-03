const isLoggedIn = true
// if statement only executes if the statement is true otherwise else statement gets executed.
if(2 === "2") {
// "===" is known as datatype check operator i.e., it not nly checks the equality but also checks if the datatype is also same or not
    console.log("you are right")
} else {
    console.log("No, better luck next tym!")
}

if(2 == "2") {
// "==" is known as equality check operator i.e., it only checks the equality, even if the datatype are different
    console.log("you are right")
} else {
    console.log("No, better luck next tym!")
}

//Shorthand notation for if-else statement
// in this, we don't not need to add {} or we can say we do not need to mention th scope of if statement but adding ";" is mandatory to be added in the last.
const balance = 1000
if(balance > 500) console.log("test");

// nested if-else statement

if(balance<500) {
    console.log("less than 500")
} else if(balance<750) {
    console.log("less than 750")
} else if(balance<900) {
    console.log("less than 900")
} else{
    console.log("less than 1200")
}
