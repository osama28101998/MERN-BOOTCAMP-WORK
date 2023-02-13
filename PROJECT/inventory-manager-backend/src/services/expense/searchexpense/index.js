const Expense = require("../../../database/expenseSchema");
const searchexpense = async (req, res) => {
  try {
    const { userid, value } = req.body;

    let data = await Expense.find({ userid: userid, item: value });
    let fulldat = await Expense.find({ userid: userid });
    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(200).json({ message: "No record Found", alldata: fulldat });
    }
  } catch (error) {
    res.status(502).json(error.message);
  }
};

module.exports = {
  searchexpense,
};
