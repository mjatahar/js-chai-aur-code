//Dates

let myDate=new Date()
console.log(myDate) //=> 2025-10-08T10:48:57.901Z
console.log(myDate.toString()) //=>Wed Oct 08 2025 16:19:35 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //=>Wed Oct 08 2025
console.log(myDate.toISOString()) //=> 2025-10-08T10:51:47.975Z
console.log(myDate.toLocaleDateString()) //=> 8/10/2025
console.log(myDate.toLocaleString()) //=> 8/10/2025, 4:23:08 pm
console.log(myDate.toLocaleTimeString()) //=> 4:23:38 pm
console.log(myDate.toJSON()) //=> 2025-10-08T10:54:02.534Z

console.log(typeof myDate) //=> Object

//Note*** Months Js me 0 se suru hota hai i.e january means 0

//let mynewDate=new Date(2023,0,23)
//let mynewDate=new Date(2023,0,23,5,3) //=>Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)
let mynewDate=new Date("2023-02-14") //=>Tue Feb 14 2023
console.log(mynewDate.toDateString())

//getting dates and time parts
const now = new Date();

console.log(now.getFullYear());  // 2025
console.log(now.getMonth());     // 9  (October)
console.log(now.getDate());      // 8
console.log(now.getDay());       // 3 (Wednesday)
console.log(now.getHours());     // 15
console.log(now.getMinutes());   // 10
console.log(now.getSeconds());   // 30

//Setting Date & Time parts
const today = new Date();
today.setFullYear(2030);
today.setMonth(11);   // December
today.setDate(25);
console.log(today);   // 2030-12-25

let myTimeStamp= Date.now()

console.log(myTimeStamp)
console.log(mynewDate.getTime())