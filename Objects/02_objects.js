
// const student = new Object(); // singleton Object
const student = {} // non - singleton

student.id = "CCQ946";
student.name = "Maghan";
student.isProgrammer = true;

// console.log(student);

const emp = {
    email: "emp@gmail.com",
    fullName: {
        usefullName: {
            firstName: "Das",
            lastName: "Maghan"
        }
    }
}

// console.log(emp)
// console.log(emp.fullName)
// console.log(emp.fullName.usefullName)
// console.log(emp.fullName.usefullName.firstName)

const student1 = {1: "a", 2: "b"}
const student2 = {3: "a", 4: "b"}
const student3 = {5: "a", 6: "b"}

const group = Object.assign({}, student1,student2,student3); // combines.. like merging all into {}, knowns as target object.

console.log(group)
