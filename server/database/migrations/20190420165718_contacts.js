exports.up = function(knex, Promise) {
  return knex.schema.createTable("contacts", table => {
    table.increments("id").primary();
    table.string("colName").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("contacts");
};
