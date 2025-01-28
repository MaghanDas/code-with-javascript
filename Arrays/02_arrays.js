
const webSeries = ["PeakyB", "MoneyHeist" ,"From"];
const movies = ["PK", "IronMan", "fastX"];

const Netflix = webSeries.concat(movies);
// concat combines and returns new arr..
// console.log(Netflix);

const netFlix2 = [...webSeries, ...movies];
// console.log(netFlix2); // combines both with spread operator(...)

const dumArr = [1,3,4,[0,1,2],4,[3,3,2],9];
// console.log(dumArr);
const allDumArr = dumArr.flat(Infinity); // makes it one array , no subArr
// console.log(allDumArr); // 

console.log(Array.isArray("string")); // false
console.log(Array.from("string")); // makes it array..
console.log(Array.from({name: "name"})) // important ...

let marks1 = 93;
let marks2 = 45;
let marks3 = 50;

console.log(Array.of(marks1,marks2,marks3));