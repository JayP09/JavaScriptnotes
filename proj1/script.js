// querySelector()
/*
query selector select store entire html tag.
example:
-var number= document.querySelector(".counter")
-if we print number it will give entire html tag
 <h1 class="counter">1000</h1>
-in above example i am selecting tag by class, you can select by class or id name

SetTimeout(function,milliseconds)-Calls a function or executes an expression after a
specified interval (in milliseconds)

setInterval(function,milliseconds)-Calls a function or executes an expression repeatedly
at specified intervals (in milliseconds)
*/
var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count; // here we are changing h1 tag innertext with count value 
    }
}, 1);
// in above code setInterval(function,milliseconds) will execute function for specific interval and condition inside function

setTimeout(() => {
    followers.innerText = "Followers in Instagram"; // here we are changing text of p tag
}, 5000);
// in setTimeout(function,millisecond) will execute after 5000 millisecond