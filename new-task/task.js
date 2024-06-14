// const a;
// a=10            // reassign is not possible for this const keyword
// console.log(a)

// var a;
// a=10
// console.log(a)

// let b;
// b=20
// console.log(b)

// const arr = [];

// for (let i = 1; i <= 1000; i++) {
//     arr.push(i)
//     console.log(arr)
// }

// const numbers = [];
// for (let i = 1; i <= 1000; i++) {
//   numbers.push(i);
// }

// console.log(numbers); // [1, 2, 3, ..., 1000]

// const arr = [];

// for (var i = 1; i <= 1000; i++) {
//   arr.push(i);
// }
// arr.filter(i.)
// console.log(arr);

// const numbers = [];
// for (let i = 1; i <= 1000; i++) {
//   numbers.push(i);
// }

// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// const primeNumbers = numbers.filter(number => isPrime(number));

// console.log(primeNumbers);

// const arr = [];

// for (let i = 1; i <= 1000; i++) {
//   arr.push(i);
// }

// function isPrime(num) {
//   if (num <= 1) return false;
//   for(let i =2; i<= Math.sqrt(num);i++ ){
//     if (num % i === 0) return false;
// }
// return true
// }
// const primeNumbers = arr.filter(num=>isPrime(num))
// console.log(primeNumbers)

const arr = [];

for (let i = 1; i <= 1000; i++) {
  arr.push(i);
}

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const primeNumbers = arr.filter((num) => isPrime(num));
console.log(primeNumbers);
