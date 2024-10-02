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
let usersMapped =
  // Initialize another array of objects
  // Take users8 array of objects, value of name and surname and put them in new variable fullName

  /* ... your code ... */
  //
  users8.map((newName, oldId) => ({
    fullName: newName.name + newName.surname,
    id: oldId.id,
  }));

// /*
// usersMapped = [
//   { fullName: "Mike Smith", id: 1 },
//   { fullName: "Ryan Hunt", id: 2 },
//   { fullName: "Anna Key", id: 3 }
// ]
// */
console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Mike Smith

// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
