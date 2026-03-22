# JavaScript Starter — Practice Issues

A collection of JavaScript files with small bugs for beginners to find and fix. Each section below is a separate GitHub issue you can create.

---

## Issue 1: Fix off-by-one error in loop

**File:** `01_loops.js` — `printOneToFive()`

The function is supposed to print numbers 1 through 5, but it only prints up to 4. The loop's termination condition needs to be corrected.

---

## Issue 2: Fix infinite loop in countdown

**File:** `01_loops.js` — `countdown()`

The countdown function is meant to print numbers from 10 down to 1, but the counter moves in the wrong direction causing an infinite loop.

---

## Issue 3: Loop prints array indices instead of values

**File:** `01_loops.js` — `printFruits()`

The function should print each fruit name from the array, but it prints `0, 1, 2` instead. The wrong type of `for` loop is being used for iterating over array values.

---

## Issue 4: Array elements skipped during removal

**File:** `01_loops.js` — `removeEvens()`

When removing even numbers from the array, some even numbers are skipped because the array is being mutated while iterating forward through it.

---

## Issue 5: Sum starts from wrong initial value

**File:** `01_loops.js` — `sumArray()`

The function returns 61 instead of 60 for `[10, 20, 30]`. The accumulator variable is initialized with the wrong starting value.

---

## Issue 6: Function called before it is defined

**File:** `02_functions.js` — `greet()`

The `greet` function is called before its definition, but since it's a function expression assigned to a `const`, it is not hoisted and throws a ReferenceError.

---

## Issue 7: Function does not return a value

**File:** `02_functions.js` — `multiply()`

The function computes the product but does not return it. Calling `multiply(3, 4)` gives `undefined` instead of `12`.

---

## Issue 8: Arrow function missing return statement

**File:** `02_functions.js` — `doubled` array

The `.map()` callback uses curly braces but has no `return` keyword, so every element maps to `undefined` instead of being doubled.

---

## Issue 9: Default parameter not applied correctly

**File:** `02_functions.js` — `calculateTotal()`

When called with only a price (no tax rate), the function returns the price without tax. The fallback logic for the default tax rate of 10% is not working.

---

## Issue 10: Variable declared without keyword creates global

**File:** `02_functions.js` — `addToCart()`

The `cart` variable is assigned without `let`/`const`, which creates it as a global variable instead of keeping it scoped to the function.

---

## Issue 11: Promise never resolves

**File:** `03_promises.js` — `fetchData()`

The `.then()` callback never fires because the Promise executor logs to console but never calls `resolve()` with the value.

---

## Issue 12: Rejected promise has no error handler

**File:** `03_promises.js` — `riskyOperation()`

The promise is rejected but there is no `.catch()` handler, causing an unhandled promise rejection warning.

---

## Issue 13: Value lost in promise chain

**File:** `03_promises.js` — `processData()`

Step 2 in the chain receives `undefined` because the first `.then()` computes a value but does not `return` it to the next step.

---

## Issue 14: `Promise.all` called with wrong arguments

**File:** `03_promises.js` — `fetchAll()`

`Promise.all()` is called with three separate arguments instead of a single array. It expects an iterable (array) of promises.

---

## Issue 15: Second error in promise chain is never caught

**File:** `03_promises.js` — `pipeline()`

The chain recovers from the first error, but the second `throw` in the final `.then()` has no `.catch()` after it, so it goes unhandled.

---

## Issue 16: Missing `await` keyword

**File:** `04_async_await.js` — `getUser()`

The function logs a Promise object instead of the resolved user data because `await` is missing before the `fakeFetch()` call.

---

## Issue 17: `await` used outside an `async` function

**File:** `04_async_await.js` — `getPosts()`

The function uses `await` but is not marked as `async`, which causes a SyntaxError.

---

## Issue 18: No error handling for rejected `await`

**File:** `04_async_await.js` — `riskyFetch()`

The `await` on a rejecting promise throws an error, but there is no `try/catch` block to handle it gracefully.

---

## Issue 19: Sequential awaits cause slow performance

**File:** `04_async_await.js` — `getAllData()`

Three independent fetch calls are awaited one after another, taking ~3 seconds total. They should run in parallel to finish in ~1 second.

---

## Issue 20: Async function result not awaited by caller

**File:** `04_async_await.js` — `computeScore()`

The caller stores the result of `computeScore()` without `await`, so it gets a Promise object instead of the computed value.

---

## Issue 21: Loose equality causes incorrect type matching

**File:** `05_common_mistakes.js` — `isZero()`

The function uses `==` which coerces types, making `isZero("")` return `true` even though an empty string is not the number zero.

---

## Issue 22: String concatenation instead of addition

**File:** `05_common_mistakes.js` — `addInputs()`

Passing string arguments like `"5"` and `"10"` results in `"510"` because `+` concatenates strings. The inputs need to be converted to numbers.

---

## Issue 23: `typeof` does not detect arrays

**File:** `05_common_mistakes.js` — `isArray()`

`typeof []` returns `"object"`, not `"array"`. The function needs a different approach to check for arrays.

---

## Issue 24: Variable shadowing hides outer variable

**File:** `05_common_mistakes.js` — `showMessage()`

A new `message` variable declared inside the function shadows the outer one. The inner `console.log` prints the inner value instead of the outer one.

---

## Issue 25: `NaN` compared with strict equality always fails

**File:** `05_common_mistakes.js` — `checkNaN()`

`NaN === NaN` evaluates to `false` in JavaScript. The function needs a proper way to detect `NaN` values.

---

## Issue 26: `var` in loop causes closure issue with `setTimeout`

**File:** `05_common_mistakes.js` — `setTimeout` loop

The loop prints `5` five times instead of `0, 1, 2, 3, 4` because `var` is function-scoped and all callbacks share the same variable after the loop finishes.
