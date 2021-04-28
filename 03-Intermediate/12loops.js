// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// } // here for(start index; condition to stop; increment)

const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharashtra"
];

// for (let i = 0; i < myStates.length; i++) {
//     if (typeof myStates[i] !== "string") continue;
//     console.log(myStates[i]);
// }// we are using let because as soon as scope is over let is free from memory


// while loop
// let i = 0;

// while (i < myStates.length) {
//     console.log(myStates[i])
//     i++;
// }

let i = 20;

do {
    console.log(i)
    i++;
} while (i < 10); // this loop run one time and then check condition