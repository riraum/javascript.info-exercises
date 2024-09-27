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
  }
  return array.join("");
  // console.log(str);
}

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
