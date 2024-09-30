// Map to names
// importance: 5

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

// Own code
// Not generic enough
// let names = [john.name, pete.name, mary.name].join(", ");
function arrayOfNames(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray = array[i].name;
    // newArray += newArray[i].split("");
    console.log(newArray);
    console.log(Array.isArray(newArray));
  }
}
let names = arrayOfNames(users);
console.log(names); // John, Pete, Mary
