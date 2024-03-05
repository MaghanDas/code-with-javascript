
// primitve datatypes:
// String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100; // Number
const scoreValue = 100.2 // Number
// const bigNumber = 22323252n;

const isLoggedIn = false;
const outsideTemp = null;
let useremail; 

const id = Symbol('123'); 
// non-primitive datatypes or reference type::
// Arrays, Objects, Functions...

 const heros = ["ironMan" , "SpiderMan" , "Thor"];

 let myObj = {
    name:"Maghan",
    age:20,
 }

 const muFunction = function() {
      console.log("hyee :)");
 }
// js is static typed language.
console.log(typeof myObj);  // object
console.log(typeof heros);  // object
console.log(typeof muFunction); // function..
