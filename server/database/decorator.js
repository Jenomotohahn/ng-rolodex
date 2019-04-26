const User = require("./models/UsersModel");
const Contacts = require("./models/ContactsModel");

module.exports = (req, res, next) => {
  req.database = { User, Contacts };
  next();
};
