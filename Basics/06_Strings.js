
let name = "Maghan";
let age = 21;

// console.log("maghan" + age);
console.log(`My name is ${name} and i am ${21} years old`); //

const nam = new String("Maghan"); // acts as object...
console.log(nam.length);
console.log(nam.toUpperCase);
console.log(nam.charAt(3));
// other method
// substring, slice
const newString = nam.substring(1,4) // it always starts from zero..
console.log(newString) // agh 
const anotherString = nam.slice(-8,4)
console.log(anotherString)

const newStrin1 = " das "
console.log(newStrin1.trim());

const url = "http:/wwww.com"

console.log(url.replace('%20','-' ))

 