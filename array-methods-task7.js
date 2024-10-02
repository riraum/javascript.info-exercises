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
// Create function, to run array through
function arrayOfNames(array) {
  // initialize empty array
  let names = [];
  // const entries = Object.values(users.name);
  // console.log(entries);
  // loop over array

  for (let user of users) {
    // reassign the concatenation of all array name: values to str
    // names = names.push(array);
    // names += array[i].name;
    // names += array.push(i);
    // names.push(i);
    names.push(user.name);
    // console.log(ar==ray.name);
  }
  // return/convert str to an array
  return names;
  // console.log(Array.isArray(newArray));
}
// assign names to be the function arrayOfNames and run users through it
let names = arrayOfNames(users);
// log output to console
console.log(names); // John, Pete, Mary
// check if result is an array
console.log(Array.isArray(names));
// console.log(users.name);
