// show user a signout bbutton if he is authenticated,
// other wise show him option to Login/Signup

var authenticated =false;

// if(authenticated){
//     console.log("show signout button");

// }else{
//     console.log("show login option")
// }

authenticated ? console.log("signout button"):console.log("login")