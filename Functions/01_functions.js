

function functionName(paramete1,parameter2) {
  // statements..    
}

function sum(num1, num2){
    console.log(num1+num2);
}

function sum2(num1,num2) {
    return num1+num2;
}
// sum(null,null); // 0
// sum(2,3);

// const result = sum(3,5);
// console.log(result); // undefined...

// console.log(sum2(2,3)); // 5

function isLoggedIn(name){
    if(!name){
        console.log("please enter name!")
        return;
    }
    return `${name} just logged in..!`
}

// console.log(isLoggedIn()); // undefined..
// console.log(isLoggedIn("das"));

function calculatePriceWithRestOperator(...num){
    return num;
}

function calculatePriceWithRestOperator2(num1,num2, ...num){
    return num;
}

// console.log(calculatePriceWithRestOperator(200,300,400,500)); // will become an array..[ 200, 300, 400, 500 ]
// console.log(calculatePriceWithRestOperator2(200,300,400,500)); // [ 400, 500 ]

// handling objects in functions..

const user = {
    username: "name",
    password: "passwd"
}
function handleOBjects(anyObject) {
    console.log(`username: ${anyObject.username}, passwd is ${anyObject.passwd}`)
}   

// handleOBjects(user); // username: name

// another way to pass an object to function!!!
// handleOBjects({
//     username: "Das",
//     passwd: "01xwv"
// })

function returnElem(arrayPar){
    // return arrayPar.length;
    return arrayPar[1];
}

// console.log(returnElem([0,1,2,3,4,5]))




