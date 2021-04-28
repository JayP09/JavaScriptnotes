// falsy value
// undefined 
// null // 
// 0
// ''
// NaN
// any this other then above value is truthy value

var user = "2"; // this is undefined

if (user == 2) {
    console.log("Condition is true");
}
// above condition is cohesion
// if you place == then above code print console statement because javascript assumes
// that you just want to check 2 whether it is string two or number two
if (user === 2) {
    console.log("conditon is true");
}
// if you want to check datatype then you use === for it


console.log(2 + "2"); // if one value is string and other value is integer javascript assume that other other value is also string 
// output of above code is "22"