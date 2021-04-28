// function isEven(element) {
//     // if (element % 2 === 0) {
//     //     return true
//     // }
//     // return false;
//     return element % 2 === 0;
// }

// console.log(isEven(5));
// console.log(isEven(2));

var isEven = (element) => {
    return element % 2 === 0;
}; // arrow function

// console.log(isEven(5))



// var result = [2, 4, 6, 8].every(isEven); // this will check each element is it even or not
// console.log(result); // this will return true when all the element is even and false when all the element is odd


// call back function
// var result = [2, 3, 6, 8].every((e) => {
//     return e % 2 === 0;
// });// with return 
var result = [2, 3, 6, 8].every((e) => (e % 2 === 0)); // without return statement
console.log(result);