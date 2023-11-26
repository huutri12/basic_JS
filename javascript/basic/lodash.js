const _ = require('lodash');

const arr = [
    { name: 'John', age: 21 },
    { name: 'Alice', age: 23 },
    { name: 'Bob', age: 25 },
];

const filterFunc = (value) => value.age >= 23;

// Use lodash to filter the array
const filteredArray = _.filter(arr, filterFunc);

console.log(filteredArray);