// Loops Practice — for, while, for...of, for...in

// Print numbers 1 through 5
function printOneToFive() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

printOneToFive();


// Print numbers 10 down to 1
function countdown() {
  let i = 10;
  while (i > 0) {
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


// Remove all even numbers and return the result
function removeEvens(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers.splice(i, 1);
    }
  }
  return numbers;
}

console.log(removeEvens([1, 2, 3, 4, 5, 6]));


// Return the sum of all numbers in the array
function sumArray(arr) {
  let sum = 1;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([10, 20, 30]));
