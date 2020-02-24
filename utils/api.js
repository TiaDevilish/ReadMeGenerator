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
    }).then(function(res){
      const resData = res.data(function(){
        return resData;
      })
    })
    .catch(function(err){
      console.log("err", err)
    })

  }
};

module.exports = api;


