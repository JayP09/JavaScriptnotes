// map
/*
1)map is not object they are completely differents
2) map store value in key value pair
3) we can have any value
*/

var myMap = new Map();


myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro"); // inserting value in map

console.log(myMap);


// for (let key of myMap.keys()) {
//     console.log(`Key is ${key}`);
// } // this will print all the keys from map

// for (let key of myMap.values()) {
//     console.log(`Value is ${key}`);
// } // this will print all the values from maps

// for (let [key, value] of myMap.entries()) {
//     console.log(`Key is ${key} and Value is ${value}`);
// } // in this case we are using map.entries() which gives you key,value

for (let [key, value] of myMap) {
    console.log(`Key is ${key} and Value is ${value}`);
} // in this case myMap give first key then value 

myMap.forEach((value) => console.log(`${value}`)); // In this when we have only one variable in arrow function myMaps give only value
myMap.forEach((value, key) => console.log(`${value} and key is ${key}`)); //  in thi myMap give values first and then keys

myMap.delete(2); // delete value where key is 2 ; syntax map.delete(key)
console.log(myMap);

console.log(myMap.get(1)); // this will print uno

console.log(myMap.has(1)); // this will print true because 1 is inside map

/*
1)for of loop is always give you key first 
2)for each loop is gonna always give you the value first
*/

//basis methods of map 
/* 
1) set method syntax : map.set(key,value)
Sets the value for the key in the Map object. Returns the Map object.
example:
myMap.set(1, "Uno");

2) delete method syntax: map.delete(key)
Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. 
example:
myMap.delete(2) // delete value at key 2

3) get method syntax : map.get(key)
Returns the value associated to the key, or undefined if there is none.
example:
console.log(myMap.get(1)); // this will print uno

4) has method syntax : map.has(key)
Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
example:
console.log(myMap.has(1));

for more Information visit "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
*/