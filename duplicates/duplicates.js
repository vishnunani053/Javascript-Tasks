// const arr = [1,2,1,3,5,6,2,8,10,10,5]

// const duplicates = arr.filter((value,index)=>{
// return arr.indexOf(value) !==index
// })
// console.log(duplicates)


// const duplicates = arr.filter((value,index)=>{
//     return arr.indexOf(value) !== index
// }) 
// console.log(duplicates)


const arr = [7,9,7,9,4,4,1,1]
const  originals = [...new Set(arr)]
console.log(originals)

