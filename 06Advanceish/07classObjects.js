// import User from "./06classjs"; // this is new syntax
const User = require("./06classjs.js"); // this is used by npm

const jay = new User("jay", "hello@gmail.com");

console.log(jay.getInfo());
jay.enrollCourse("React Bootcamp");
jay.enrollCourse("Angular Bootcamp");

console.log(jay.getCourseList());

let courses = jay.getCourseList();

courses.forEach((c) => (
    console.log(`
    You are enrolled in ${courses.length} courses.join
    courses list is as follow:
    1)${c}
    `)
));