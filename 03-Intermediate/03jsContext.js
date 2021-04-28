// sayHello();// here we are calling function before defining function

// function sayHello() {
//     console.log("hello");
// }


if (2 === 2) {
    console.log("this is true");
}
var myName = "jay";
if (myName === window.myName) {
    console.log("this is again a true statement")
}
// if we run above code that will give you error because here global context is different because
// we are running the javascript in terminal instead of browser
// sayHello() does not give any error because function is registered inside the context. once function is being registered then that function is wrapped up and put inside
// global context. when code execute it is aware of those function that is th reason why sayHello() does not give error
// we call this global context different in different engines in node we don't call it as window but in browser we call it as window