// Translate border-left-width to borderLeftWidth
// importance: 5

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
  let array = str.split("-");
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);

    // console.log(array);
    str = array.join("");
  }
  return str;
  // console.log(str);
}
// function camelize(str) {
//   let array = str.split("-");
//   // console.log(array);
//   for (let word of array) {
//     if (word !== array[0]) {
//       word = word.charAt(0).toUpperCase() + word.slice(1);
//     } else word = word;
//     console.log(word);
//     array = word.split(", ");
//     console.log(array);
//     // str = array.join("");
//     // console.log(str);
//     // array = word.split(" ");
//     // // let newArray = str.split(" ");
//   }
// }

// for (let i = 0; i < array.length; i++) {
//   for (let word of array) {
//     if (word !== array[0]) {
//     word(0).toUpperCase() + word.slice(1);
//   }
// }
// return array.join("");
// }
// camelize("background-color");

// array.forEach((item) => {
//   item == array[0] ? item : item(0).toUpperCase() + item(1).slice;
// });

// for ((word in array) word.(1).toUpperCase())
// if (word in array != array[0]) {
//   word

// asserts takes a function `fn` and its argument `arg` and compares the result to `want`.
function assert(fn, arg, want) {
  let got = fn(arg);
  console.assert(got == want, `Want ${want} but got ${got}`);
}

// // E.g.
assert(camelize, "", "");
assert(camelize, "a", "a");
assert(camelize, "a-b", "aB");
assert(camelize, "-a-b", "AB");
assert(camelize, "a-bc", "aBc");
assert(camelize, "background-color", "backgroundColor");
// ...
