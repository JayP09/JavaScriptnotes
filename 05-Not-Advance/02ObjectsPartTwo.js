var User = {
    name: "",
    getUserName: function() {
        console.log(`User name is : ${this.name}`);
    },
};

var jay = Object.create(User); // this will create object
console.log(jay);
jay.name = "Jay Panchal"
jay.getUserName();

var sam = Object.create(User, {
    name: { value: "sammy" },
    courseCount: { value: 3 },
});
// in above code we are creating another object. this is not the best way.

sam.getUserName();