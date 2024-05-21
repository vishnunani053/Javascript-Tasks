// const arr = [1,2,3,4,5,5,5,2,3]
// const forEachArr = arr.forEach((item)=>{
//     return item *2
// })
// console.log(arr , forEachArr)

// const mapArr = arr.map((item)=>{
//     return item *2
// })
// console.log(arr , mapArr)

// const flatMapArr = arr.flatMap((item)=>{
//     const result = [item,item*2]
//     return result
// })
// console.log(arr,flatMapArr)

// Using map

// const uniqueName = new Set();
// const filteredArr = array.filter((item) => {
//   const duplicate = uniqueName.has(item.name);
//   uniqueName.add(item.name);
//   return !duplicate;
// });

// console.log(filteredArr,"vihsmiorjgfoajeoifjoiaj")

// const uniqueName = new Set()
// const filterbyName = array.filter(number=>{
//     const isDuplicate = uniqueName.has(number.name)
//     uniqueName.add(number.name)
//     return !isDuplicate
// })
// console.log(filterbyName,"vishnu vardhan suripaka")
const array = [
    {
        name: "dhoni",
        age: 10,
        salary: 70000,
      },
    {
      name: "vishnu",
      age: 23,
      salary: 30000,
    },
    {
      name: "nani",
      age: 28,
      salary: 40000,
    },
    {
      name: "dhoni",
      age: 43,
      salary: 70000,
    },
 
  ];
const sortedArray = array.sort((a,b)=>(a.age)-(b.age))
console.log('visijoijvoa',sortedArray)

const uniqueName = new Set()
const filterbyName =array.filter(item=>{
    const isDuplicate = uniqueName.has(item.name)
    uniqueName.add(item.name)
    return !isDuplicate
})
console.log(filterbyName , "vishnu vardhan suripaka")

const mappedArray = array.map((num) => [num, num * 2]); // [[1, 2], [2, 4], [3, 6]]
console.log(mappedArray);

// Using flatMap
const flatMappedArray = filterbyName.flatMap((num) => [num, num * 2]); // [1, 2, 2, 4, 3, 6]
console.log("test....",flatMappedArray);

// const filteredArr = array.filter((data) => data.age >36);
// console.log(filteredArr);
