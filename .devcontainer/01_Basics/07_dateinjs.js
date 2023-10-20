// Dates:
const myDate = new Date()
console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());

let createdDate = new Date (2023,3,21,15,6)
console.log(createdDate.toLocaleString());
let createdDate1 = new Date ("2023-3-21")
console.log(createdDate1.toLocaleString());
let createdDate2 = new Date ("02-25-2023")
console.log(createdDate2.toLocaleString());

// Time Stamps

let newTime = Date.now()
console.log(newTime);
// in above we get time in milliseconds from since 1970 to till time.
console.log(createdDate2.getTime()-newTime);
console.log(Math.floor(Date.now()/1000));
// above is used to convert millseconds into seconds.

// we can also customize the display of date-time, using below:

myDate.toLocaleString("default", {
    month:"long",
    dateStyle:"full",
})
