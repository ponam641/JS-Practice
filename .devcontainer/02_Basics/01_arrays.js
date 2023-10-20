// Arrays

const myArr = [1,2,3,4,5]
const myHeros = ["Batman", "Spiderman","Ironman"]
const myArr2 = new Array(2,3,9,4,2)
console.log(myArr[2]);
console.log(myHeros);
console.log(myHeros[0]);
console.log(myArr2);

// Array Methods

// console.log(myArr.length)
// myArr.push(5)
// myArr.pop()
myArr.unshift(0)
myArr.shift()
console.log(myArr);
console.log(myArr2.includes(2));
console.log(myArr2.indexOf(2));

const newArr = myArr.join()// join() converts array into string
console.log(newArr);
console.log(typeof newArr);


// Slice & splice methods
let mynewArr = myArr.slice(1,3)
console.log("A ", myArr);
console.log(mynewArr)
// slice() method doesn't change the original array and also it takes values between the index given including first index but excluding last index.
let mynewArr2 = myArr.splice(1,3)
console.log("B ", myArr);
console.log(mynewArr2)
// splice() method changes the original array by removing the values from it, also it takes all values between the index given.