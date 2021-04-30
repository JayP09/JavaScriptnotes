// prototype for Object user

var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`)
    };
};
// above code is another way of defining object


User.prototype.getFirstname = function() {
    console.log(`Your firstname is : ${this.firstName}`);
};
// using prototype you can access or give them more properties or more functions,getters ,setters etc.

var jay = new User("jay", 2); // new keyword create Instances of User
jay.getCourseCount();
jay.getFirstname();

var dhruv = new User("dhruv", 1);
dhruv.getCourseCount();
dhruv.getFirstname();
/*
1)above code will create 2 instances of User.
2)new keyoword is responsible for invoking the custom constructor and creating a unique instances.
3)new keyword is also find all the prototype which are defined and inject that further in user object.
*/

// how to check is property exists or not?
if (jay.hasOwnProperty("firstName")) {
    jay.getFirstname();
};
// above code check if property firstname is present or exists inside a object or not