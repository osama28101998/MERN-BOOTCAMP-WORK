const { editExpense } = require("../../services/expense/editexpense");
module.exports = (req, res) => {
  return editExpense(req, res);
};
