type Details = {
    id: number,
    name: string,
    handleClick: (date: Date) => void
}

const details: Details = {
    name: "kmrlmga",
    id: 1848,
    handleClick: (date: Date) => {
        console.log(date);
    }
}

console.log(details);
