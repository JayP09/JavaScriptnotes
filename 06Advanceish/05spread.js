// var returnedValue = Math.max(1, 5, 7, 5, 6, 7, 9, 45);
// console.log(returnedValue);

// var myObj = {}

// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 }) // this will merge two object into one in myObj
// console.log(myObj);


function sumOne(a, b) {
    return a + b;
}
var myA = [5, 4, 1];
// console.log(sumOne(...myA)); // here we are passing Spread Operator
// what spread operator does it takes the group and it tries to spread it into multiple values.
// in above code we are taking myA and trying to seperate them out individually and passing it as individual value.


function sumTwo(a, b, ...args) {
    // consider args as array so we have to loop through it.
    console.log(args);
    let sum = 0;
    let multi = a * b;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}
// here ...args is Rest operator
// args convert individual value into the array
console.log(sumTwo(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14));