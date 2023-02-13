const express = require("express");
const routes = express.Router();
const login = require("./login");
const signup = require("./signup");
const updateprofile = require("./updateprofile");
const checkemail = require("./checkemail");
const resetpassword = require("./resetpassword");
module.exports = () => {
  routes.post("/user/login", login);
  routes.post("/user/signup", signup);
  routes.post("/user/updateprofile", updateprofile);
  routes.post("/user/checkemail", checkemail);
  routes.put("/user/reset-password", resetpassword);

  return routes;
};
