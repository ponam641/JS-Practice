let username = "Poonam"
let userEmail = "ponam641@gmail.com"

console.log(`My name is ${username} and my email id is ${userEmail}.`)
// This is called String Interpolation which is done by replacing placeholders with values in a string literal. Using this we can also make changes/styles in values.

let gameName = new String("Poonamsh")
console.log(gameName.length);
console.log(gameName.charAt(5));
console.log(gameName.indexOf("a"));
console.log(gameName.toUpperCase());

let newString = gameName.substring(0,6)
console.log(newString);
let newString2 = gameName.slice(-5,6) 
// please note that only slice() uses negative indenx values.
console.log(newString2);

let stringOne = "   PoonAm   "
console.log(stringOne.trim())
// trim() removes starting & ending extra space from a String.

const url = "https://poonam16s.com/poonam%20sharma"
console.log(url.replace("%20", "-"));

console.log(url.includes("16s"));