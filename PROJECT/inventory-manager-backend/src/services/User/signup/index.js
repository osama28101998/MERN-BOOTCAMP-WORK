const mongoose = require("mongoose");
const User = require("../../../database/schema");
const Signup = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    let checkUser = await User.exists({ Email: email });

    if (checkUser == null) {
      const user = new User({
        Name: name,
        Email: email,
        Password: password,
      });

      await user.save();
      res.status(200).json("Signup Successfully");
    } else {
      res.status(200).json("Email Already Exists");
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: "some errors" });
  }
  //res.send("signup");
};
module.exports = {
  Signup,
};
