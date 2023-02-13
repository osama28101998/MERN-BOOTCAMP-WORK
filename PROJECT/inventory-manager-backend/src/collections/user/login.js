const { Login } = require("../../services/User/login");
module.exports = (req, res) => {
  return Login(req, res);
};
