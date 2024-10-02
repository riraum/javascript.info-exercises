// Copy and sort array
// importance: 5

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

arr = ["HTML", "JavaScript", "CSS"];

sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (no changes)

// Function for task
function copySorted(arr) {
  return arr.slice().sort();
}
