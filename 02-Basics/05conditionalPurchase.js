// user is only allowed to make a purchase when he is:
//logged in
// email verified
// cardInfo - valid
// if any one is missing, stop purchase

var isLoggedIn = false;
var isEmailVerified = true;
var cardInfo = true;

// if (isLoggedIn){
//     console.log("Logged IN success");
//     if (isEmailVerified){
//         console.log("Email is verified");
//         if(cardInfo){
//             console.log("Your can make a purchase");
//         }
//     }

// }

if (isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow user to make a purchase");
} else {
    console.log("You are Not allowed to do that")
}