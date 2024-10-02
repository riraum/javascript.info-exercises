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
  /* ... your code ... */
  //
  // users.map((item) => item.name);

  // /*
  // usersMapped = [
  //   { fullName: "Mike Smith", id: 1 },
  //   { fullName: "Ryan Hunt", id: 2 },
  //   { fullName: "Anna Key", id: 3 }
  // ]
  // */

  alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Mike Smith

// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
