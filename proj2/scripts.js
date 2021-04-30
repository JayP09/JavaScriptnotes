const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const voilet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");
const colorName = document.querySelector(".name");

// console.log(window.getComputedStyle(red).backgroundColor); // here .backgroundColor will give you background color of element
// getComputedStyle() gives entire css style declaration. 
//it gives everthing that browser is applying to that element
/*
-in css we write background color as 
background-color: #fff;
-when computed property is being calculated things actuall change.
every single "-" in css change to 
backgroundColor: #fff;
-the subsequent letter to "-" changed into upparcase letter
-in the computed property the background is converted into rgb. inside the css if we put hash value then also computed style always give you rgb color
*/

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// // for red
// var redColor = getBGColor(red);
// // addEventListener(eventname,callback funtion)
// red.addEventListener('click', () => {
//     center.style.background = redColor;
//     colorName.innerText = `${redColor}`
// });


const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
        colorName.innerText = `${color}`
    });
}

// javascript have event. event have eventlistener in above code addEventListener(eventname, callback function) 

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(voilet, getBGColor(voilet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));



// // for red
// var redColor = getBGColor(red);
// // addEventListener(eventname,callback funtion)
// red.addEventListener('click', () => {
//     center.style.background = redColor;
//     colorName.innerText = `${redColor}`
// });



// // for cyan
// var cyanColor = getBGColor(cyan);
// // addEventListener(eventname,callback funtion)
// cyan.addEventListener('dblclick', () => {
//     center.style.background = cyanColor;
//     colorName.innerText = `${cyanColor}`
// });

// // for voilet
// var voiletColor = getBGColor(voilet);
// // addEventListener(eventname,callback funtion)
// voilet.addEventListener('click', () => {
//     center.style.background = voiletColor;
//     colorName.innerHTML = `${voiletColor}`;
// });


// // for orange
// var OrangeColor = getBGColor(orange);
// // addEventListener(eventname,callback funtion)
// orange.addEventListener('mouseenter', () => {
//     center.style.background = OrangeColor; // style will give you style of element
//     colorName.innerText = `${OrangeColor}`;
// });


// // for pink
// var pinkColor = getBGColor(pink);
// // addEventListener(eventname,callback funtion)
// pink.addEventListener('dblclick', () => {
//     center.style.background = pinkColor;
//     colorName.innerText = `${pinkColor}`;
// });