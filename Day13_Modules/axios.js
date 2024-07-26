//Task7: Install a third party module(e.g, axios) using npm. Import and use this module to make a network request in a script.

const axios = require("axios");

async function makeRequest() {
  try {
    const response = await axios.get(
      "https://api.github.com/users/ppremraj697"
    );

    console.log("Response Data: ", response.data);
  } catch (error) {
    console.log("Error making request: ", error);
  }
}

makeRequest();
