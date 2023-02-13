const Expense = require("../../../database/expenseSchema");

const getExpensebydate = async (req, res) => {
  try {
    const { date } = req.params;
    const { id } = req.body;

    let find = await Expense.find({ date: date, userid: id });
    res.status(200).json(find);
  } catch (error) {
    res.status(502).json(error.message);
  }
};

module.exports = {
  getExpensebydate,
};
