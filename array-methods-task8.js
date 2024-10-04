// Map to objects
// importance: 5

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

let mike = { name: "Mike", surname: "Smith", id: 1 };
let ryan = { name: "Ryan", surname: "Hunt", id: 2 };
let anna = { name: "Anna", surname: "Key", id: 3 };

let users8 = [mike, ryan, anna];
console.log(users8);

// Own code
let usersMapped = {};

// let newObj = {};

for (let user in users8) {
  usersMapped.fullName = users8.name + users8.surname;
  console.log(users8.fullName);
  usersMapped.id = users8.id;
}
console.log(usersMapped);
// create a new empty object

// for each user in the array of users
//     generate the fullName by concatenating the user name and surname
//     insert it in the object, using the user id as the key

// return the object
/* ... your code ... */
//
// users8.map((newName, oldId) => ({
//   fullName: newName.name + newName.surname,
//   id: oldId.id,
// }));

// /*
// usersMapped = [
//   { fullName: "Mike Smith", id: 1 },
//   { fullName: "Ryan Hunt", id: 2 },
//   { fullName: "Anna Key", id: 3 }
// ]
// */
// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // Mike Smith

// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
