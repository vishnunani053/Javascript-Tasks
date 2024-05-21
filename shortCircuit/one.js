// function greet(name) {
//   return `welcome ${name || "testing"}`
// }
// console.log(greet("vishnu"));
// console.log(greet())


function greet ( name = "nani") {
    return `good morning ${name}`
}

console.log(greet('vishnu'))
console.log(greet())