// // lexical scoping and closure
// function init() {
//     var firstName = "Jay"; // scopr of this variable is inside function
//     console.log("I am init");

//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName; // we are not executing function. this code is only returing reference of function
// }

// var value = init();

// value() // closure


// closure example
function doAddition(x) {
    return function(y) {
        return x + y;
    }
}
// when you call above function then it's not gonna directly add x,y rather it will give you a reference of function

var add5 = doAddition(4) // this function call return reference to the function
console.log(add5(5))

console.log(doAddition(5)(5));
// above line output 10.this is all possible because of the closure and also how memory working in javascript
// doAddition function never goes off from the memory because its reference is alive of it. 
// when even a single reference of function is allowed it doesn't removed from the memory

doAddition()()() // this type of declaration is called curring