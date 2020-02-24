const axios = require("axios");
const dotenv = require('dotenv').config();
const api = {
  getUser(username) {
    axios({
      url: `https://api.github.com/users/${username}`,
      method: "GET",
      auth: {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_PASS
      }
    }).then(res => {
      const userData = res.data;
      console.log(userData);
    })
    .catch(err => {
      console.log("err", err);
    })
  }
};

module.exports = api;


