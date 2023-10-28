// IIFE (Immediately Invoked Function Expression)
// Those functions which get eecuted immediately are known as IIFE.
// Sometime pollution gets created due to global scope variables, fuhnction or whatever data. So to stop such pollution we use IIFE. Eg.

(function chai(){// also called a named iife i.e., where function has names (chai) are called named iife
    console.log("DB CONNECTED")
})();
// function within paranthesis & there after another paranthesis to call the function is the syntax of IIFE.
// It is mandatory to add ; at the end of IIFE otherwise it will not run the 2nd function & raise an error.
(()=>{ //arrow function or simply called iife
    console.log("DB CONNECTED TWO")
})();

// you can add parameters in function and also pass arguments in IIFE
((name)=>{ //arrow function
    console.log(`DB CONNECTED TWO ${name}`)
})("Anuj");