// for in and for of loop

// const names = ["Youtube", "Facebook", "Instgram", "Netflix", "Amazon"]

// // for of majorly used for array
// for (const n of names) {
//     console.log(n);
// }

const symbols = {
    yt: "Youtube",
    ig: "Instgram",
    fb: "Facebook",
    lco: "LearnCodeOnline.in"
}

for (const n in symbols) {
    console.log(`Key is: ${n} and value is: ${symbols[n]}`); // here n is key
}