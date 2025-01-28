
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
console.log(array);

console.log(typeof array) // type of object
console.log(typeof nums) // type of object 

nums.push(14); // adding elemnt in the end of array.
nums.unshift(1); // to the beginning 

console.log(nums);

nums.pop() // removes and return the last elements
nums.shift() // removes and return the first element
nums.splice(1,2) // remove 2 elements starting from index 1

console.log(nums)