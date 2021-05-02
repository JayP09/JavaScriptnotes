const cards = document.querySelectorAll(".card");
console.log(cards);

// variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip))

function flip() {
    // console.log("Card flipped");
    // console.log(this); // this give you div element of card we have clicked
    this.classList.add("flip");
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        checkIt();
    }
};

function checkIt() {
    // console.log("Checking...");
    if (firstCard.dataset.image === secondCard.dataset.image) {
        success();
    } else {
        fail();
    }
}

function success() {
    // console.log("Success");
    firstCard.removeEventListener('click', flip); // this is removeEventListener from card with success ; syntax: removeEventListnener(event,method passed in eventListener)
    secondCard.removeEventListener('click', flip);
    reset();
}

function fail() {
    // console.log("Failed");
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
}

function reset() {
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}


//TODO: shuffle
(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16) // Math.random() give you value between 0 and 1 and multiplying 16 will give you value between 0 to 15
        card.style.order = index;
    });
})();