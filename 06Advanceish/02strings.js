var name = `jay"s`;
var Two = 'hitesh\'s'; // if 
var Three = 'dhruv\"s'; // if we want to insert double quotes in string

var firstName = `jay`;
var fullName = `${firstName} Panchal`;
console.log(fullName);
console.log(fullName.charAt(0)); // charAt(postion)
console.log(fullName.endsWith("y")); // this will check if strings endwith y or not
console.log(fullName.endsWith("y", 3)); // here we are give end character as well as postion of character in string
// above line will print true because at postion 3 we have y in fullname

console.log(fullName.includes("jay"));
console.log(fullName.toUpperCase());