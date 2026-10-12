// Loops Practice — for, while, for...of, for...in

// Print numbers 1 through 5
function printOneToFive() {
  for (let i = 1; i < 5; i++) {
    console.log(i);
  }
}

printOneToFive();


// Print numbers 10 down to 1
function countdown() {
  let i = 10;
  while (i >= 1) {
    console.log(i);                         
    i--;
  }
}

countdown();


// Print each fruit name
function printFruits() {
  const fruits = ["apple", "banana", "cherry"];
  for (let fruit in fruits) {
    console.log(fruit);
  }
}

printFruits();


//comments here 
//so here i have used the the filter function of js
//  to directly filterout the odd element from array
function removeEvens(numbers) {
  // Use the filter method to keep only numbers where the remainder when divided by 2 is not 0 (odd numbers)
  return numbers.filter(n => n % 2 !== 0);
}

// Test the function with a sample array containing both odd and even numbers
console.log(removeEvens([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]


// Return the sum of all numbers in the 
function sumArray(arr) {
  let sum = 1;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([10, 20, 30]));
