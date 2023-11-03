const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        // break;  
    case 4:
        console.log("April");
        break;      
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;    
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;  
    case 10:
        console.log("October");
        break;      
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Default case matched");
        break;
}

//if we do not add "break" keyword in each case then it will run all the cases (except default statement) until it will get next "break" keyword, after getting condition true