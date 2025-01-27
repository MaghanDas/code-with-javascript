
let date = new Date();

// console.log(date.toString()); // date is an object in javascript..

// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(typeof date) // object

let myCreateDate = new Date("2023,0,23")
console.log(myCreateDate.toLocaleString())

let timeStamp = Date.now()

console.log(timeStamp)
console.log(timeStamp.getTime())
console.log(Date.now())  