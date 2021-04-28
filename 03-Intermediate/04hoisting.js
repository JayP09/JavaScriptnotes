/*

there are two type of context in javascript
1) global context:- global context collecting information for everything and about everything

2) execution context:- when we call function then there is execution context is created

these execution context are not only with functions they happens with every line of code
if execution is of just one line then they will come and they will go away if the execution is of
an entire function then the big execution context will come and once the execution is being done then it will go away 
consider it as memory stack so as soon as the memory is needed it keeps on stacking of each other and they go away. \

1) function declarations are scanned and made available
2) variable declarations are scanned and made undefined
 */

tipper("5");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}


// bigTipper("200");

// function bigTipper(a) {
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }; // this code run with out error


// bigTipper("200");

var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
};
// above code will give error because from last statement in above comment
// if we are declaring variable function then calling function should come after the declaring
// if we are defining purefunction then we can call function before and after the function declaration
bigTipper("200");


console.log(name);
var name = "jay";

function sayName() {
    var name = 'mR.h';
    console.log(name);
}

sayName();

console.log(name);