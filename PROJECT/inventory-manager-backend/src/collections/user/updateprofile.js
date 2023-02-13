const { Updateprofile } = require("../../services/User/updateProfile");
module.exports = (req, res) => {
  return Updateprofile(req, res);
};
