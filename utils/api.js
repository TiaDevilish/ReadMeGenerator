const axios = require("axios");
require('dotenv').config();
const api = {
  getUser(username) {
    return axios({
      url: `https://api.github.com/users/${username}`,
      method: "GET",
      auth: {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_PASS
      }
    }).then(function(res){
      return res.data
    })
    .catch(function(err){
      console.log("err", err)
    })

  }
};

module.exports = api;


