// Promises Practice — .then, .catch, chaining

// Fetch data and return "Data loaded"
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data loaded");
    }, 1000);
  });
}

fetchData().then((msg) => console.log("Result:", msg));


// Handle a rejected promise
function riskyOperation() {
  return new Promise((resolve, reject) => {
    reject("Something went wrong!");
  });
}

riskyOperation().then((result) => {
  console.log("Success:", result);
});


// Pass value through a promise chain
function processData() {
  return Promise.resolve(1)
    .then((val) => {
      console.log("Step 1:", val);
      val + 1;
    })
    .then((val) => {
      console.log("Step 2:", val);
      return val + 1;
    })
    .then((val) => {
      console.log("Step 3:", val);
    });
}

processData();


// Wait for all promises to resolve
function fetchAll() {
  const p1 = Promise.resolve("User data");
  const p2 = Promise.resolve("Posts data");
  const p3 = Promise.resolve("Comments data");

  Promise.all(p1, p2, p3).then((results) => {
    console.log("All data:", results);
  });
}

fetchAll();


// Error should propagate through the chain
function pipeline() {
  return Promise.resolve("start")
    .then((val) => {
      throw new Error("Oops!");
    })
    .then((val) => {
      console.log("This should not run");
    })
    .catch((err) => {
      console.log("Caught:", err.message);
      return "recovered";
    })
    .then((val) => {
      console.log("Final:", val);
      throw new Error("Another error!");
    });
}

pipeline();
