/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin-with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user- consume all content
other- trial user.

Input: getUserRole(name,role)
*/


// normal function
// function getUserRole(name, role) {
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all access`;
//             break; // this is not necessary
//         case "Subadmin":
//             return `${name} is subadmin with access to create and delete courses`;
//             break;
//         case "testprep":
//             return `${name} is testprep with access to create and delete tests`;
//             break;
//         case "user":
//             return `${name} is a user to consume content`;
//             break;

//         default:
//             return `${name} is trail user`;
//             break;
//     }
// }

// console.log(getUserRole("jay", "admin"));
// var getRole = getUserRole("sammy", "user");
// console.log(getRole)

// function inside a variable
var getUserRole = function(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; // this is not necessary
        case "Subadmin":
            return `${name} is subadmin with access to create and delete courses`;

        case "testprep":
            return `${name} is testprep with access to create and delete tests`;

        case "user":
            return `${name} is a user to consume content`;

        default:
            return `${name} is trail user`;
            break;
    }
};

// but use case of function does not change 
console.log(getUserRole("jay", "admin"));
var getRole = getUserRole("sammy", "user");
console.log(getRole)