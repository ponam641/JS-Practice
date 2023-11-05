const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.map((numbers)=>numbers
+10)

console.log(newNum);

// map with forEach loop

const numArr =[] 
myNum.forEach((val)=>{
    return numArr.push(val*2)
})

console.log(numArr);

// chaining of map & filter

const newChaining = myNum
                        .map((item)=>item*10)
                        .map((item)=>item-2)
                        .filter((item)=>item>50)

console.log(newChaining);