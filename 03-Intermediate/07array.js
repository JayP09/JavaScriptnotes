// array in javascript

var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Maharastra", "Rajasthan", "delhi", "gujarat");

// console.log(states); // print whole array
// console.log(states[0]); // print one element
// console.log(states.length); // this wil give you array length

// below code will replace value at 0 with punjab
states[0] = "Punjab";
// console.log(states);

// array with string,int,boolean
var user = ["jay", "jay@gmail.com", 3, 34, true];
// console.log(user)

// remove element from array
user.pop(); // pop will remove value from end
// console.log(user)

// add value a starting of array
user.unshift("NEW VALUE");
// console.log(user);

// remove value from starting
user.shift();
// console.log(user);

console.log(user.indexOf(3)); //this will give indexof element 3 in user

console.log(user.indexOf("newyy")); // if we search element that is not present in array then this will give you -1

console.log(Array.from("jay")); // string to array