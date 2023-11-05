// forEach loop

const coding = ["cpp", "python", "java", "ruby", "js"]

coding.forEach(function(val){
    console.log(val);
})

// forEach loop using arrow function

coding.forEach((item)=> {
    console.log(item);
})

// another way of usig forEach loop: here we will call a function in forEach loop

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

// forEach loop not only contains item. It can carry other parameters also Eg.

coding.forEach((item, index, array)=> {
    console.log(item, index, array);// here it will print the current item, its index number and complete array.
})

// forEach loop in Array having different objects inside it.

const myCoding = [
    {
        languageName: "JavaScript",
        langageFileExtn: "js"
    },
    {
        languageName: "Python",
        langageFileExtn: "py"
    },
    {
        languageName: "Java",
        langageFileExtn: "java"
    }
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})