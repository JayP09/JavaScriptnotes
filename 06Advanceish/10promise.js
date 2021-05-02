// Promises
/*
1) promise is something which has two states either it is gonna be fulfilled or it
is not gonna be fulfilled.
2) promises just like and event which is tentatively might be fulfilling up in the future or might be not but 
it's gonna give you response back that it is not completed
*/


const uno = () => {
    return "I am One";
};

// const dos = () => {
//     setTimeout(() => {
//         return "I am Two";
//     }, 3000);
// };

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am Two");
        }, 3000);
    });
    // here resolve means your promise is completed
    // reject means your promise is not completed and you are raising up an error
};


const tres = () => {
    return "I am Three";
};


const callMe = async() => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos(); // here due to await program wait for the dos method to completely execute
    console.log(valTwo); // this will print undefined because we have setTimeout fuction in dos

    let valThree = tres();
    console.log(valThree);
};
// when we are making call of method with promises we have to make that method asynchronous

callMe();