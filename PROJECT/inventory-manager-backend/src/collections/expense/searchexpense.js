const { searchexpense } = require("../../services/expense/searchexpense");
module.exports = (req, res) => {
  return searchexpense(req, res);
};
