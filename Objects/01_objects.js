
// singleton
// Object.Create() // with constructor..

const mySym = Symbol("Key1");
// Object Literals
const user = {
    name: "Maghan",
    "full name": "Maghan Das",
    [mySym]: "mykey1",
    // taking symbol and printing as a key..
    age: 22,
    location: "Budapest",
    email: "dasmaghan23@gmail.com",
    isProgrammer: false,
    marks: [75,86]
}

// *****   accessing ****

// console.log(user.name);
// console.log(user.email);
// console.log(user["email"]) //treating as array..
console.log(user["full name"]);
console.log(user[mySym]);
 
user.email = "maghan@ambassador.com";
Object.freeze(user);
user.email = "maghan@inf.elte.hu"; // won't be updates, bcus we've freezed the object.
console.log(user); 




