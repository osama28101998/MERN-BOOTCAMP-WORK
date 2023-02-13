const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const Expense = require("../../../database/expenseSchema");
const addExpense = async (req, res) => {
  try {
    console.log("🚀  ~ file: index.js:8 ~ addExpense ~ req.body", req.body);
    const { date, item, price, userid } = req.body;
    Expense.init();
    const expense = new Expense({
      _id: mongoose.Types.ObjectId(),
      date: date,
      item: item,
      price: price,
      userid: userid,
    });

    await expense.save();
    res.status(200).json("Expense Added Successfully");
  } catch (error) {
    res.status(502).json(error.message);
  }
};

module.exports = {
  addExpense,
};
