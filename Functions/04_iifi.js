
// imediately invoked functions expressions.. (IIFE)

(function name() {
    console.log("connecting..!");
    
})()

// the above is known as iffi, no need to call it.!
// iifi -> 
// Why Use an IIFE?
// Avoid Global Scope Pollution
// Variables declared inside an IIFE are not accessible outside of it, 
// preventing conflicts with other scripts.

// arrow function iifee
(() => {
    console.log("Arrow Function IIFE!");
})();

// IIFE with Parameters
((name) => {
    console.log("Arrow Function IIFE!");
})('maghan');

// named iifee
(function myIIFE() {
    console.log("Named IIFE!");
})();


// need to learn more on iifi (must for interview)


