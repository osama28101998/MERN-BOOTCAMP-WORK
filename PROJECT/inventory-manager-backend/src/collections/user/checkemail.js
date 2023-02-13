const { Checkemail } = require("../../services/User/checkemail");
module.exports = (req, res) => {
  return Checkemail(req, res);
};
