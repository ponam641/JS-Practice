// for loop

for (let i = 0; i <= 8; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);   
}

// nested for loop
for (let i = 0; i <= 5; i++) {
    console.log(`outer loop ${i}`); 
    for (let j = 0; j <= 5; j++) {
        console.log(`inner loop value ${j} and outer loop ${i}`);
    }  
}

// array and for loop

myArray = ["flash", "superman", "batman", "ironman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

// break and continue keywords
 
for (let a = 0; a <= 20; a++) {
    if(a === 5) {
        console.log(`5 Detected`);
        break
    }
    console.log(`Value of a is ${a}`);
    
}

for (let a = 0; a <= 20; a++) {
    if(a === 5) {
        console.log(`5 Detected`);
        continue 
        // means to skip te current situation & then continue
    }
    console.log(`Value of a is ${a}`);
    
}