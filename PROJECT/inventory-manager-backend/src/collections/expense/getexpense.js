const { totalExpense } = require("../../services/expense/getexpense");
module.exports = (req, res) => {
  return totalExpense(req, res);
};
