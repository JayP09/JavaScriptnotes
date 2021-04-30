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
    ] // array of objct

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