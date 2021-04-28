// for all regular function calls, this points to window object
console.log(this);

var user = {
    firstName: "Jay",
    courseCount: 4,
    getCourseCount: function() {
        console.log("Line 7", this); // this will print the whole object user
        function sayHello() {
            console.log("hello");
            console.log("Line 11", this); // this 
        }
        sayHello()
    },
};

user.getCourseCount();