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
  // convert to array, removing -
  let splitArray = str.split("-");
  // map first character and capitalize it
  let mappedArray = splitArray.map(function (item) {
    item.charAt(0).toUpperCase;
  });
  // convert array back to string
  mappedArray.join("");
  return mappedArray;
}
camelize("background-color");

// array.forEach(function(item) => {
//   item.charAt(0).toUpperCase;
//   return array;
// });

// newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].substr(1);

//   array.map((item) => item.charAt(0).toUpperCase);
