// binding

const jay = {
    firstName: "Jay",
    lastname: "Panchal",
    role: "admin",
    courseCount: 3,
    getInfo: function() {
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.firstName}
        His role is ${this.firstName}
        and he is studying ${this.course} courses
        `);
    },
};


const dj = {
    firstName: "Rock",
    lastName: "Dj",
    role: "Sub-Admin",
    courseCount: 4
};

jay.getInfo();

// borrowing of the method from one object to another
// jay.getInfo.bind(dj); // bind always gives you reference if we run the code this does not give you any thing
// jay.getInfo.bind(dj)(); // now this will print getInfo method for dj

// another way of running
// var djInfo = jay.getInfo.bind(dj); // bind always gives you reference 
// djInfo();


jay.getInfo.call(dj); // call directly execute getInfo method for dj

/*
1) bind give you reference back and you have to manually call that method.
2) while call actually directly calls method
*/