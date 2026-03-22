// Functions Practice — declarations, expressions, arrow, scope

// Greet a user with "Hello, <name>!"
console.log(greet("Alice"));

const greet = function (name) {
  return `Hello, ${name}!`;
};


// Return the product of two numbers
function multiply(a, b) {
  a * b;
}

console.log(multiply(3, 4));


// Double each number in the array
const doubled = [1, 2, 3].map((n) => {
  n * 2;
});

console.log(doubled);


// Calculate total with 10% default tax
function calculateTotal(price, taxRate) {
  taxRate = taxRate || 0;
  return price + price * taxRate;
}

console.log(calculateTotal(100));


// Add item to a cart array
function addToCart(item) {
  cart = [];
  cart.push(item);
  return cart;
}

console.log(addToCart("Shoes"));
console.log(addToCart("Hat"));
