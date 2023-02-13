const jwt = require("jsonwebtoken");
const Expense = require("../../../database/expenseSchema");
const totalExpense = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("🚀  ~ file: index.js:6 ~ totalExpense ~ id", id);
    let data = await Expense.find({ userid: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(502).json(error.message);
  }
};

module.exports = {
  totalExpense,
};
