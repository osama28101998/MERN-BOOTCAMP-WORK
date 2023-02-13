const { delExpense } = require("../../services/expense/delexpense");
module.exports = (req, res) => {
  return delExpense(req, res);
};
