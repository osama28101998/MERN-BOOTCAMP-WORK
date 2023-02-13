const User = require("../../../database/schema");
const Resetpassword = async (req, res) => {
  try {
    let { id, password } = req.body;
    console.log("🚀  ~ file: index.js:5 ~ Resetpassword ~ req.body", req.body);
    await User.findByIdAndUpdate(id, { Password: password });

    res.status(200).json("your Password succussfully changed ");
  } catch (error) {
    res.status(502).json(error.message);
  }
};

module.exports = {
  Resetpassword,
};
