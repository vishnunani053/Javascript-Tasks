// const name = "visHnu vardhAn"

// function firstLetter (name){
//  let step1 = name.split(" ")
//  let step2 = step1.map((item)=>{
// return item[0].toUpperCase() + item.slice(1).toLowerCase()
//  })
//  return step2.join(" ");
// }
// console.log(firstLetter(name))

const name = "viShNu vaRdhan"

const capitalName = (name)=>{
    let step1 = name.split(" ")
    let step2 = step1.map((item)=>{
        return item[0].toUpperCase()+ item.slice(1).toLowerCase()
    })
    return step2.join(" ")
}

console.log(capitalName(name))