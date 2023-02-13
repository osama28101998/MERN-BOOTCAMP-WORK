const { Signup } = require("../../services/User/signup");
module.exports = (req, res) => {
  return Signup(req, res);
};
