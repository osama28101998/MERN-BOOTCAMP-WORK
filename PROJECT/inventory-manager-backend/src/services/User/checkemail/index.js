const User = require("../../../database/schema");
const Checkemail = async (req, res) => {
  try {
    console.log("🚀  ~ file: index.js:5 ~ Checkemail ~ req.body", req.body);
    let { email } = req.body;
    let find = await User.find({ Email: email });
    console.log("🚀  ~ file: index.js:7 ~ Checkemail ~ find", find);
    if (find == "") {
      res.status(200).json("Email not found");
    } else {
      res.status(200).json(find);
    }
  } catch (error) {
    res.status(502).json(error.message);
  }
};

module.exports = {
  Checkemail,
};
