const mongoose = require("mongoose");
const expenseSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  date: {
    type: Date,
    require: true,
  },
  userid: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const Expense =
  mongoose.models.Expense ||
  mongoose.model("Expense", expenseSchema, "Expense");
module.exports = Expense;
