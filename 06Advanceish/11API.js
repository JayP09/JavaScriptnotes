fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
        return response.json();
    })
    .then((data) => {
        // console.log("DATA is:", data);
        var joke = data.value;
        console.log("JOKE:", joke);
    })
    .catch();
/*
in above code fetch will fetch the data from api and pass it to then method. then method convert response to
json and pass to another then method. second then method retrive joke from json and printing it in console
catch is used when APi does not give you response back
*/