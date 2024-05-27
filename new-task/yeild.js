// function nextEvenNumbers(){
//     return 2
// }
// const printevenNumbers = nextEvenNumbers()

// console.log(printevenNumbers)
// console.log(printevenNumbers)

function* generateEvenNumbers(){
yield 2
yield 4
yield 6
yield 8
}

const printevenNumbers = generateEvenNumbers()

console.log(printevenNumbers.next())
console.log(printevenNumbers.next())
console.log(printevenNumbers.next())
console.log(printevenNumbers.next())
console.log(printevenNumbers.next())