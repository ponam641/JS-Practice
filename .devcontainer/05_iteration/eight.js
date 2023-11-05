// reduce: used to sum the values of an array. Eg

const myNum = [1,2,3]
const newNum = myNum.reduce(function(acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc+currVal
},0)

// console.log(newNum);

// reduce function using arrow function

const arrTotal = myNum.reduce((acc, currVal)=>acc+currVal,1)
console.log(arrTotal);



const shoppingCart = [
    {
        courseName: "JavaScript course",
        courseprice: 2999
    },
    {
        courseName: "Python course",
        courseprice: 999
    },
    {
        courseName: "Mobile Dev course",
        courseprice: 5999
    },
    {
        courseName: "Data Science course",
        courseprice: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, currVal)=>(acc+currVal.courseprice),0)

console.log(totalPrice);