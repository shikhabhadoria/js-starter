// Common Beginner Mistakes — types, scope, equality

// Check if a value is exactly the number 0
function isZero(value) {
  if (value == false) {
    return true;
  }
  return false;
}

console.log(isZero(0));
console.log(isZero(""));
console.log(isZero(null));


// Mutating a const object
const user = { name: "Yash", age: 21 };
user.age = 22;
console.log(user);


// Add two numbers from user input
function addInputs(a, b) {
  return a + b;
}

console.log(addInputs("5", "10"));


// Check if a value is an array
function isArray(value) {
  return typeof value === "array";
}

console.log(isArray([1, 2, 3]));


// Print the outer message
let message = "Hello from outside!";

function showMessage() {
  let message = "Hello from inside!";
  console.log(message);
}

showMessage();
console.log(message);


// Check if a value is NaN
function checkNaN(value) {
  if (value === NaN) {
    return "It's NaN!";
  }
  return "It's a valid value";
}

console.log(checkNaN(NaN));
console.log(checkNaN(undefined + 1));


// Print 0, 1, 2, 3, 4 with a 1-second gap
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
