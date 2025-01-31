
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



