const coding = ["cpp", "python", "java", "ruby", "js"]

const value1 = coding.forEach((val)=> {
    console.log(val)
    return val
})
console.log(value1);// output: undefined

// this means that forEach loop never return anything that is why value of "value1" is printed as "undefined" even after returning the "val" in forEach loop.

// filter: as the name suggest it filters the reqd data from the array

const numbs = [1,2,3,4,5,6,7,8,9,10]
// one way of writing arrow function without scope
// const newNumbs = numbs.filter((val)=>val>4)


// another way of writing arrowfunction with scope
const newNumbs = numbs.filter((val)=>{
    return val>5
})
console.log(newNumbs);

// the same filteration can also be done with forEach loop. Eg

const newNumb = []
numbs.forEach((num)=> {
    if (num > 6) {
        newNumb.push(num)
    }
})

console.log(newNumb);