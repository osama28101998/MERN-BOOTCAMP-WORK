const { addExpense } = require("../../services/expense/addexpense");
module.exports = (req, res) => {
  return addExpense(req, res);
};
