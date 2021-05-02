// Destructuring
const user = ["jay", 3, "admin"];
// var role = user[2];
// var name = user[0];

// var [name, courseCount, role] = user; // destructuring of array
// console.log(role);


// destructuring of object 

const MyUser = {
    name: "jay",
    courseCount: 5,
    role: "admin",
}

console.log(MyUser.courseCount);

// const { name, mycourseCount, role } = MyUser;
// console.log(mycourseCount); // this will print undefined 

// in object destructuring name should also be match
const { name, courseCount, role } = MyUser;
console.log(role);
// this will print role from object

// most important thing in destructuring is make sure the names are exactly same