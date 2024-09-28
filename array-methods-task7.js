// Map to names
// importance: 5

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];
// console.log(users);

let names = [john.name, pete.name, mary.name].join(", ");

// john.name(john);
// function user(users) {
//   for (i = 0; i < users.length; i++) {
//     return users.name;
//     console.log(users.name);
//   }
// };
console.log(names); // John, Pete, Mary
