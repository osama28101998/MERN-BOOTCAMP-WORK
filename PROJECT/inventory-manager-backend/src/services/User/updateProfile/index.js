const User = require("../../../database/schema");
const Updateprofile = async (req, res) => {
  try {
    let { id, name, password } = req.body;
    console.log("🚀  ~ file: index.js:5 ~ Updateprofile ~ req.body", req.body);
    if (password === "") {
      await User.findByIdAndUpdate(id, { Name: name });
      res.status(200).json("Successfully Update Profile");
    } else {
      await User.findByIdAndUpdate(id, { Name: name, Password: password });
      res.status(200).json("Successfully Update Profile");
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  Updateprofile,
};
