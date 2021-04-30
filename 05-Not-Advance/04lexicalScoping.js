// lexical scoping
function init() {
    var firstName = "Jay"; // scope of this variable is inside function
    function sayFirstName() {
        console.log(firstName);
    }
    sayFirstName();
}

init();