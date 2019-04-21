exports.up = function(knex, Promise) {
  return knex.schema.createTable("contacts", table => {
    table.integer("id");
    table.string("colName").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("contacts");
};
