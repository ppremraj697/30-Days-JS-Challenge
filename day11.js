// ACTIVITY 1: Understanding Promises

// Task1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved");
  }, 2000);
});

prom.then((res) => console.log(res));

// Task2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise2 is rejected");
  }, 3000);
});

prom2.catch((res) => console.error(res));

//ACTIVITY 2: Chaining Promises

//Task3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const message =
      "Data received from remote API using fetch() method in raw format";
    return resolve(message);
  }, 4000);
});

prom3
  .then((res) => {
    console.log(res);
    const message = "Data is converted to JSON format";
    return message;
  })
  .then((res) => {
    console.log(res);
    return "Data is ready to fetch in readable format";
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//ACTIVITY 3: Using Async/Await

//Task4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const prom4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise4 is resolved");
  }, 5000);
});

async function resolvePromise() {
  const data = await prom4;
  console.log(data);
}
resolvePromise();

//Task5: Write an async function that handles a rejected promise using try-catch and logs the error
const prom5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise5 is rejected");
  }, 6000);
});

async function rejectPromise() {
  try {
    const data = await prom5;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
rejectPromise();

//ACTIVITY 4: Fetching data from an API

// Task6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch("https://api.github.com/users/ppremraj697")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// Task7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function getData() {
  const data = await fetch("https://api.github.com/users/akshaymarch7");
  const json = await data.json();
  console.log(json);
}
getData();

//ACTIVITY 5: Concurrent Promises

//Task8: Use Promise.all to wait for multiple promises to resolve and then log their values.
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 is resolved");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 is resolved");
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 is resolved");
  }, 7000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//Task9: Use Promise.race to wait for multiple promises to resolve and then log their values.
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p4 is resolved");
  }, 5000);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p5 is resolved");
  }, 3000);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p6 is resolved");
  }, 7000);
});

Promise.race([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
