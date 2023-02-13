const { Resetpassword } = require("../../services/User/resetpassword");
module.exports = (req, res) => {
  return Resetpassword(req, res);
};
