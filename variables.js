"use strict" // treat all js code as newer version.
// variables are used to store values...
let num = 18;
// sometime var is also used , var was used in older times.
// in modern javascript, we prefer let
console.log(num);
// ************************************************ *******
// using const-- const is used with values which can't be modified further 
const pi = 3.14;
// pi = 33; // not allowed.
console.log(pi);
/// ****************************************************
let accountId = 12321;
let accountName = 'Maghan';
let accountEmail = 'dasmaghan@gmail.com';
console.table([accountId, accountEmail, accountName]);
// *******************************************************
let name;
console.log(name); // will have undefined value...
