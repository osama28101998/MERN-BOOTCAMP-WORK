const express = require("express");
const routes = express.Router();
const user = require("./user");
const expense = require("./expense");
module.exports = () => {
  routes.use("/auth", user());
  routes.use("/expense", expense());

  return routes;
};
