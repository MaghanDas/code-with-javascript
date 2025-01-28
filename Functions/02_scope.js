
let a = 100;
const b = 20;
var c = 50;

if(true){
     a = 20;
     c = 40;
}

// let,const -> block level scope.. { }
// var -> global scope...

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "username";
// }

console.log(func1(5)); // works fine

function func1(num){
    return num+1;
}

// console.log(func2(5)); // error, used before initizialtion

// const func2 = function(num){
//     return num+1;
// }

 

