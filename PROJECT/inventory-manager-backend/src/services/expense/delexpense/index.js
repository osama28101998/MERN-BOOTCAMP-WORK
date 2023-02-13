const Expense = require("../../../database/expenseSchema");
const delExpense = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🚀  ~ file: index.js:5 ~ delExpense ~ id", id);
    await Expense.deleteOne({ _id: id });

    res.status(200).json("Successfully deleted");
  } catch (error) {
    res.status(502).json(error.message);
  }
};

module.exports = {
  delExpense,
};
