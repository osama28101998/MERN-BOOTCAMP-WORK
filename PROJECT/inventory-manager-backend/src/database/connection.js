const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://osama:osama123@testing.3fxdc90.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Mongo Database Connected");
  } catch (error) {
    console.log(error);
  }
};
