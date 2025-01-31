
// this keyword -> current context refering.

const user = {
    name: "maghan",
    age: 21,
    showMessage: function() {
        console.log(`${this.name} welcome to website!!`)
        // console.log(this)
    }
}

// console.log(this) // in node environment it's {}, whereas in browser it is window 
// browser mein global object hota hai ? window object.
// user.showMessage()

// function chai(){
//     console.log(this)
// }
// function chai(){
//     let name = "das"
//     console.log(this.name) // undefined.
// }

// chai() // -> alot of data that is already availabe in this..


// const chai = function(){
//     let name = "das"
//     console.log(this.name) // undefined.
// }

// const chai = () => {
//     let name = "das"
//     console.log(this.name); // undefined.
// }
// 
// chai()

// need to understand this in better way for interview problems..


// ** ARROW FUNCTIONS >>

// const sum = (num1,num2) => {
//     return num1+num2;
// }

// const sum = (num1,num2) => num1+num2; // impicit return.. same ouput

const sum = (num1,num2) => (num1+num2); 

console.log(sum(3,4));