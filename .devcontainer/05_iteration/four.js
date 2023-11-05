// for-in loop :Using this, we can print key-value pair of Objects as well which can't be done with for-of loop. Eg.

const myObject = {
    js: "JavaScript",
    css: "Cascade Style Sheet",
    html: "Hyper Text Markup Language",
    swift: "Swift for app",
    cpp: "C++"
}

for (const key in myObject) {
    console.log(key); // it will print all the keys of Object
}

// to print values also of object
for (const key in myObject) {
    console.log(myObject[key]); 
}

// to print both key-values of object
for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`); 
}

// for-in loop and arrays

const programming = ["cpp", "java", "python", "ruby"]

for (const key in programming) {
    console.log(key); // it will print only the keys i.e., index value of array i.e., 0,1,2,3
}

// to print the array items using for-in loop
for (const key in programming) {
    console.log(programming[key]); 
}


// ************Important******************
// Please note that in Map for-in loop is not used. Just like for-of loop cannot print Object similarly, for-in loop cannot print Map.