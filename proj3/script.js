const courses = [{
            name: "Complete ReactJS course",
            price: "2.3",
        },
        {
            name: "Complete Angular course",
            price: "2.1",
        },
        {
            name: "Complete Python course",
            price: "2.0",
        },
        {
            name: "Complete MERN course",
            price: "2.7",
        },
        {
            name: "Complete C++ course",
            price: "2.3",
        },
        {
            name: "Complete javascript course",
            price: "1.0",
        },
        {
            name: "Complete Django course",
            price: "7.0",
        },
    ] // array of objects

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = ""
    courses.forEach((course) => {
        const li = document.createElement("li"); // this will create html element
        li.classList.add("list-group-item"); // this will add class to html element

        const name = document.createTextNode(course.name) // this will create text node
        li.appendChild(name); // this will append textnode name to li element

        const span = document.createElement("span"); // this will create new element span
        span.classList.add("float-right"); // this add class to span

        const price = document.createTextNode("$ " + course.price); // this will create text node
        span.appendChild(price); // this will append textnode price to span element

        li.appendChild(span); // this will add entier span to li element
        ul.appendChild(li);
    });
}

// using above code we are creating html
/* 
<li class="list-group-item">
    Javascript course<span class="float-right">$2.1</span>
</li> 
*/

// generateList();

window.addEventListener("load", generateList); // syntex window.addEventListener(event name,function reference)
// above line is running generateList() function when page is loaded

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price); // this is in built sort method 
    generateList();
});

const button2 = document.querySelector(".sort-btn2");
button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price); // this is in built sort method 
    generateList();
});

const button3 = document.querySelector(".sort-btn3");
button3.addEventListener('click', () => {
    courses.sort((a, b) => {
        if (a.name < b.name) {
            // a should come before b in the sorted order
            return -1;
        } else if (a.name > b.name) {
            // a should come after b in sorted order
            return 1;
        } else {
            // a and b are the same
            return 0;
        }
    });
    generateList();
}); // sort string from a to z(ascending order)

const button4 = document.querySelector(".sort-btn4");
button4.addEventListener("click", () => {
    courses.sort((a, b) => {
        // a should come before b in the sorted order
        if (a.name < b.name) {
            return 1;
            // a should come after b in the sorted order
        } else if (a.name > b.name) {
            return -1;
            // a and b are the same
        } else {
            return 0;
        }
    });
    generateList();
}); // sort string from z to a(descending order)

/*
1)The sort() method sorts the elements of an array in place and returns the sorted array.
2)The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
3)way of calling sort functions
// Functionless
array.sort()

// Arrow function
array.sort((firstEl, secondEl) => { ... } )

// Compare function
array.sort(compareFn)

// Inline compare function
array.sort(function compareFn(firstEl, secondEl) { ... })
4) if you use functionless sort then array elements are converted to strings, then sorted according to each 
character's Unicode point value
5) to compare numbers, compare function can subtract b from a. the function will sort the array in ascending order.
example:
    var numbers = [4, 2, 5, 1, 3];
    numbers.sort(function(a, b) {
    return a - b;
    });
    console.log(numbers); 
    // [1, 2, 3, 4, 5] 
    // if you want descending order then subtract a from b
// we can write above example in shorter syntax
    let numbers = [4, 2, 5, 1, 3];
    numbers.sort((a, b) => a - b);
    console.log(numbers);
6) for more information of array sorting read "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
*/