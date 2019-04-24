exports.up = function(knex, Promise) {
  return knex.schema.createTable("contacts", table => {
    table.increments("id").primary();
    table.integer("user_id").references("users.id");
    table.string("first_name").notNull();
    table.string("last_name").nullable();
    table.string("email").nullable();
    table.string("address").nullable();
    table.string("mobile").nullable();
    table.string("work_phone").nullable();
    table.string("home_phone").nullable();
    table.string("notes").nullable();
    table.timestamp("created_at");
    table.timestamp("modified_at");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("contacts");
};
