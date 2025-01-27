
const score = 500;

// console.log(score);
// console.log(score.toString().length);
// console.log(score.toFixed(1)); // 500.0

const otherNum = 12.21212;
// console.log(otherNum.toPrecision(3)); // 12.2

// careful to use toPrecision.. value should be greater than digits before decimal in number.

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN')); // 1,00,000

// NUmber. (some method with NUmber dataType..)

// console.log(Math); // OBject
// console.log(Math.abs(-2)); // 2
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // takes upper value . // 5
// console.log(Math.floor(4.9)); // takes lover value // 4
// console.log(Math.max(4,3,4,5,6)); 
// console.log(Math.min(4,3,4,5,6)); 

console.log(Math.random());
console.log((Math.random()*10 )+ 1);
console.log(Math.floor((Math.random()*10 )+ 1));


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1))+ min);








