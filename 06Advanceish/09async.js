//Evnet Loop
const uno = () => {
    console.log("I am One");
};

const dos = () => {
    setTimeout(() => {
        console.log("Woooohooo");
    }, 3000); // this will execute after 3 seconds
    console.log("I am Two");
};

const tres = () => {
    console.log("I am Three");
};

uno();
dos();
tres();

// in above code first uno is executing then dos but setTimeout inside dos in not executing
// then ters is executing and after three seconds setTimeout is