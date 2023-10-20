// method to add 2 arrays:
const marvelHeros =["thor", "Ironman", "Batman"]
const dcHeros = ["flash", "Spiderman", "Hulk"]

// marvelHeros.push(dcHeros)
// here push() will add 2nd array elements in 1st array as last element array instead on merging/adding elements individually
// console.log(marvelHeros)

//So there are 2 methods to add 2 arrays:
// Method1=> concat()
let all_heros = marvelHeros.concat(dcHeros)
// console.log(all_heros);
// console.log(marvelHeros);
//concat() method does not change the original array for using this menthod we have to create a new array. Using this method we can add only 2 arrays.

// Mthod2=> ...array[](spread)
let newHero = [...marvelHeros, ...dcHeros]
console.log(newHero);
//  Using this method we can add more than 2 arrays. Also this method is more easy then concat() method.


// If we have an array having further sub arrays inside it and we want t make it a single array with no subarrays, then we use flat()

let subArray = [0,2,1,[3,5,4],2,[8,6,[3,9,[5,1],2,9],7,3],5] 
console.log(subArray.flat(Infinity));
// but in flat() we have to mention till what extend the array to be simplified i.e., depth, If we give "infinity" then it will automatically checks and simplifies the array.


// we can also convert String, Objects into arrays

console.log(Array.isArray("Poonam"));
// to check if content is array or not we use isArray()
console.log(Array.from("Poonam"));
// to convert String into array we use from() method
console.log(Array.from({name:"Poonam", age:32, city:"Ambala"}).keys());

// to convert variables into array

score1 = 255
score2 = 500
score3 = 100
console.log(Array.of(score1,score2,score3));