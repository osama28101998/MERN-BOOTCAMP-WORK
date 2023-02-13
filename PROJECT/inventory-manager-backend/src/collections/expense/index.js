const express = require("express");
const routes = express.Router();
const addexpense = require("./addexpense");
const getexpense = require("./getexpense");
const delExpense = require("./delexpense");
const getexpensebydate = require("./getexpensebydate");
const editexpense = require("./editexpense");
const searchexpense = require("./searchexpense");
module.exports = () => {
  routes.post("/Addexpense", addexpense);
  routes.post("/getexpense", getexpense);
  routes.post("/getexpensebydate/:date", getexpensebydate);
  routes.delete("/delexpense/:id", delExpense);
  routes.put("/editexpense", editexpense);
  routes.post("/searchexpense", searchexpense);

  return routes;
};
