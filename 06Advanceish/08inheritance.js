// inheritance in javascript

class User {
    constructor(name, email) {
        this.name = name; // this.name is the property of this class
        this.email = email;
    };
    // constructor is a method which runs as soon as the object is being created
    courseList = []; // this is private to the class (private variable) 
    getInfo() {
        return { name: this.name, email: this.email };
    }; // this is method inside class
    enrollCourse(name) {
        this.courseList.push(name);
    }; // this is setter 
    getCourseList() {
        return this.courseList;
    }; // this is getter

    static loginStatic() {
        return "You are logged in";
    }; // static simply means that this method is private
    // this method can not inherit by any class

    login() {
        return "You are logged in";
    }
}
// in getter we usually return varible and don't except any parameter usually
// in setter we except variable

class SubAdmin extends User {
    constructor(name, email) {
        super(name, email); // this is used to set User class variables
    }
    getAdminInfo() {
        return "I am SubAdmin";
    }
    login() {
        return "login for admin only";
    }; // this is overwriting method in User class
}
// here we are inherited class User in SubAdmin
// now SubAdmin class can use all the method and properties 


module.exports = User;


// const rock = new User("rock", "rock@gmail.com");
// console.log(rock.getInfo());
// rock.enrollCourse("Angular Bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList);


// object of class Subadmin
const tom = new SubAdmin("tom", "tom@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
console.log(tom.login()); // here login method defined inside class SubAdmin will run