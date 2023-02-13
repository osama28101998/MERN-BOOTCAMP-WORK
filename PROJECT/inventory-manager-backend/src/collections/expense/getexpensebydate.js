const { getExpensebydate } = require("../../services/expense/getExpensebydate");
module.exports = (req, res) => {
  return getExpensebydate(req, res);
};
