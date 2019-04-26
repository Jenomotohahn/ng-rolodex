"use strict";

const bookshelf = require("../bookshelf");

class Contacts extends bookshelf.Model {
  get tableName() {
    return "contacts";
  }
}

module.exports = bookshelf.model("Contacts", Contacts);
