const Expense = require("../../../database/expenseSchema");
const editExpense = async (req, res) => {
  try {
    console.log("🚀  ~ file: index.js:3 ~ editExpense ~ req", req.body);

    const { expenseid, item, price, date } = req.body;

    await Expense.findByIdAndUpdate(expenseid, {
      item: item,
      price: price,
      date: date,
    });

    res.status(200).json("Successfully updated");
  } catch (error) {
    res.status(502).json(error.message);
  }
};

module.exports = {
  editExpense,
};
