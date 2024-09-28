// Sort in decreasing order
// importance: 4

let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10
function compare(a, b) {
  return b - a;
}
arr.sort(compare);
console.log(arr);
