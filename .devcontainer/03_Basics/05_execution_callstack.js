// here we will understand JS code execution context and call stack:
// JavaScript Execution Context (JSC): jo bhi JS file humne create ki h wo run/execute kaise hoti h isse JSC kehte h.
// JSC are of 3 types out of which first two are important:
// 1. Global Execution Context (GEC)
// 2. fuctional/function Execution Context
// 3. Eval Execution Context


// Whenever a JS file is executed, the execution gets divided into 2 phases:
// 1. Memory Creation Phase/Memory Phase/Creation Phase: In this phase, the memory get alocated to all the variables and functions that are declared. 
// 2. Execution Phase: In this phase, all the process like addition/subtraction are done.

//+++++++++ Important/Interesting ++++++++
// JavaScript is a Single Threaded Language which means only one statement is executed at a time.
// THe browser GEC is different from NodeJS GEC. So when we execute JS in browser based console, the value will be "Window object" while when we execute JS in NodeJS based console, the value will be different i.e.,empty object.


// Lets understand the process of JS file execution with Example:
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)


// Step1: GEC i.e., when above JS code gets executed a Global Execution Context gets created and is allocated in "this" keyword.
// Step2: Memory Creation Phase: val1=>undefined, val2=> undefined,addNum=>defination (it will cover complete function i.e., from line 21-24), result1=>undefined,result2=>undefined
// Step3: Execution Phase: val1<= 10, val2<= 5,addNum=>create an New Variable Environment + Execution Thread (Please note this Exection Context gets DELETED when the function gets completely executed). Here again Memory Phase & Execution Phase Starts
// Step3.1: Memory Creation Phase: val1=>undefined, val2=> undefined, total=>undefined
// Step3.2: Execution Phase: num1<= 10, num2<= 5, total<= 15 (the total is returned to "this" keyword of GEC and value of total gets saved in result1 of Step3)
//result1<=15,result2<=12 (same process gets repeated i.e. Step3.1 & Step3.2 to get the value of result2)



// ********** Call Stack ****************

// LIFO: Last In First Out is follwed in Call Stack.
