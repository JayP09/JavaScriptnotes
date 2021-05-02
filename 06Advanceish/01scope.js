/*
1)Below code name is called before it is declared then console.log will print undefined
console.log(name);
var name = "jay";
2) undefined is good for front end it doesn't really block your code it doesn't really give you error
but in the case of backend we need the error
3) in below code if we use let at place of var then it will give you error
console.log(name);
let name = "jay";
*/

if (true) {
    var lastName = "jay";
} // "{}" curly braces is considered as scope
console.log(lastName);
/*
1)above code will print lastName jay outside the scope. we want variable which are declared inside scope
2)should just go away and should not be accessible outside the scope.
3)now if we use let at place of var then varible actually is gone away as soon as block is over.
4)that's why in the loops we use let keyword
5) above code with let keyword
*/

if (true) {
    let last = "jay";
} // "{}" curly braces is considered as scope
console.log(last);
// this code will give you error because in case of let variable is not accessible outside scope