// Async/Await Practice

function fakeFetch(data, delay = 500) {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}


// Fetch and print a user object
async function getUser() {
  const user = fakeFetch({ name: "Yash", age: 21 });
  console.log("User:", user);
}

getUser();


// Fetch and display posts
function getPosts() {
  const posts = await fakeFetch(["Post 1", "Post 2", "Post 3"]);
  console.log("Posts:", posts);
}

// getPosts();


// Fetch data from a rejecting promise
async function riskyFetch() {
  const data = await Promise.reject("Network Error");
  console.log("Data:", data);
}

riskyFetch();


// Fetch users, posts, and comments together
async function getAllData() {
  console.time("fetch");
  const users = await fakeFetch("users", 1000);
  const posts = await fakeFetch("posts", 1000);
  const comments = await fakeFetch("comments", 1000);
  console.timeEnd("fetch");
  console.log(users, posts, comments);
}

getAllData();


// Compute a score from two async values
async function computeScore() {
  const base = await fakeFetch(50);
  const bonus = await fakeFetch(25);
}

const score = computeScore();
console.log("Score:", score);
