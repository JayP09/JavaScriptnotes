var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

// console.log(testArray.fill("h")); // this will replace all the value of array with value given inside fill

// belwo code will replace element in array from 2 position
// console.log("output is ", testArray.fill("j", 2)); // here fill(value to input,start index)
// output is [
//   2,   4,   'j', 'j',
//   'j', 'j', 'j', 'j'
// ]

// console.log("output is ", testArray.fill("j", 2, 5)); // here fill(value to input,start index,endindex) here endindex is not inclueded
// output is  [
//     2,   4, 'j', 'j',
//     'j', 5, 9,   8
//   ]

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];

const result = myNumber.filter((num) => num != 55);
// console.log(result);
// output
// [
//     23, 24, 25, 66,
//     77, 87, 98
//   ]

// Splicing and slicing

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
console.log(users.slice(1, 3)); // slice(start,end)
//output
// ['Tim', 'Sam']
console.log(users.slice(1)); //slice(start) it will include all element after start
// output : [ 'Tim', 'Sam', 'Sor', 'Sod' ]

// users.splice(1, 3, "hi") // here splice(start,count,Value) it is starting with one and then it will count 2 the replace that element with value
// console.log(users);
// output [ 'Ted', 'hi', 'Sor', 'Sod' ]

users.splice(1, 3, "Hi", "Bye");
console.log(users);
// output : [ 'Ted', 'Hi', 'Bye', 'Sor', 'Sod' ]