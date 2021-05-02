const google = "google";
const fb = null; // this falsy value

if (google) {
    console.log("I execute -Block 1");
}

if (!!fb) {
    console.log("I execute - Block 2");
}

// if want true and false not truthy and falsy value 
// then we can use doubleshot in above code at fb (!!: this is double shot)