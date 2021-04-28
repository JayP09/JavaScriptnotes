//Allow user to access course if he is;
//logged in from email
// logged in from google
// logged in form facebook

var email = true;
var facebook = false;
var google = true;

if(email || facebook || google){
    console.log("Login Success")
} 