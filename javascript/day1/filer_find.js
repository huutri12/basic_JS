console.log('Hello')

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = [
    { name: 'Eric', age: 25 },
    { name: 'Rose', age: 29 },
    { name: 'David', age: 25 },
    { name: 'Ross', age: 24 },
    { name: 'Ken', age: 35 },

]
//filter, find

let filter = arr.filter((item, index) => {
    return item && item.age === 25;
});

console.log(filter)
