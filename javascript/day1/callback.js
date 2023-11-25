console.log('Hello');

let sum = (a, b, callback) => {
    let tong = a + b;
    callback(tong);

}

let printSum = (message) => {
    console.log('>> check sum : 6 + 9 = ', message)

}

sum(6, 9, printSum);