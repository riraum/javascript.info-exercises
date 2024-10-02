// Map to names
// importance: 5

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

// Own code
// Create function, to run array through
function arrayOfNames(array) {
  // Initialize empty array
  let inFunctionNames = [];
  // loop over array of users
  for (let user of users) {
    // Push user.name to array of names
    inFunctionNames.push(user.name);
  }
  // Return new array of names
  return inFunctionNames;
}
// Assign names to be the function arrayOfNames and run array of users through it
let names = arrayOfNames(users);
// log output to console
console.log(names); // John, Pete, Mary
// check if result is an array
console.log(Array.isArray(names));
// console.log(users.name);
