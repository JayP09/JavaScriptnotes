// Method inside object

var user = {
    firstName: "jay",
    lastName: "Panchal",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info: function() {
        return console.table(user);
    },
}; // if we want to refer the variable which is inside of object then we use keyword "this"
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user);
console.log(user.getCourseCount());
console.log(user.info)