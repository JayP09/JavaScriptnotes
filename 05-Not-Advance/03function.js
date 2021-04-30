/*
1)below code is part of functional programming. 
2)In functional programming function are treated as first class citizens
3)functional programming is more of writing style of code so its's majorly independent of programming language.
4) in functional porgramming we keep our function and data totally separate 
5) normal function:

let score = 456;
function addBonus(){
    score = score+45;
    return score;
}

6) functional programming :

function addBonus(score){
    return score+45;
}
*/

// var sayHello = function() {
//     console.log("I say hello");
//     console.log("I again Say Hello");
// }

(function() {
    console.log("I say hello");
    console.log("I again Say Hello");
})();
// above function is self executing anonymous function(also known as iife)
// function that call itself immedaitely after its declaration we don't wait for somebody to call it
// this function is used in webscraping