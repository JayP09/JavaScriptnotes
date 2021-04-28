// for each 
//  for each loop is not considered as loop but actually as a method on the array

const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharashtra"
];

// var i = 0;
// for (;;) {
//     if (i > 3) break;
//     console.log(i);
//     i++;
// } // this will print 0,1,2,3

myStates.forEach((s) => (console.log(s)));