
//  deep copy -> do not share the same reference.. 
//  shallow copy -> share the same reference.. 

const nums = [0, 1, 2, 3, 4, 5];
const heros = ["shaktiman", "nagraj"];
// in js , array can have different types of elments! 

let a =  [];

// console.log(a);
// console.log(nums)
// console.log(heros);

let array = new Array(10,20,30);
// console.log(array);

// console.log(typeof array) // type of object
// console.log(typeof nums) // type of object 

// nums.push(14); // adding elemnt in the end of array.
// nums.unshift(1); // to the beginning 

// console.log(nums);

// nums.pop(); // removes and return the last elements
// nums.shift(); // removes and return the first element
// nums.splice(1,2); // remove 2 elements starting from index 1

// console.log(nums);
// console.log(nums.includes(9)); // true/false
// console.log(nums.indexOf(9)); // index/-1
const newArr = nums.join();
// console.log(newArr);
// console.log(typeof newArr); // string

// slice, splice 

console.log("A", nums);

const sliceArr = nums.slice(1,3);

console.log(sliceArr); // [1,2] i.e take from index 1 and take 3-1 total elements
console.log("B " ,nums); // original array remains same..

const spliceArr = nums.splice(1,3);

console.log("C ", nums);
console.log(spliceArr); // splice starts from 1 and take total 3 elements and it removes those elements from orginal array.

console.log(nums);
