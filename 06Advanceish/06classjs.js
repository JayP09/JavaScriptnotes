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
}
// in getter we usually return varible and don't except any parameter usually
// in setter we except variable

module.exports = User;


const rock = new User("rock", "rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList);