var name = "Jay";

console.log("Line Number 3", name);


function sayName() {
    var name = "My h";
    console.log("Line number 6", name);
    sayNameTwo();

    function sayNameTwo() {
        var name = "mr.Hc";
        console.log(name);
    }
}

sayName();