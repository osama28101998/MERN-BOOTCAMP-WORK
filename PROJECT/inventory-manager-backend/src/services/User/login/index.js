const jwt = require("jsonwebtoken");
const User = require("../../../database/schema");
const Login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let find = await User.find({ Email: email, Password: password });
    if (find == "") {
      res.status(200).json("Email or Password invalid");
    } else {
      let logintoken = jwt.sign({ email, password }, "User Login Token");
      res
        .status(200)
        .json({ message: "Success", token: logintoken, userDetail: find });
    }
  } catch (error) {
    res.status(502).json({ message: "internal server error" });
  }
};

module.exports = {
  Login,
};
