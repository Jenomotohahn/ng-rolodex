exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        {
          first_name: "Peter",
          last_name: "Enomoto-Hahn",
          email: "Peter@gmail.com",
          address: "925 Cedar St",
          mobile: "808-255-5050",
          work_phone: "808-876-9870",
          created_at: new Date(),
          modified_at: new Date()
        },
        {
          first_name: "Stacy",
          last_name: "Enomoto-Hahn",
          email: "Stacy@gmail.com",
          address: "925 Cedar St",
          mobile: "808-255-5050",
          work_phone: "808-876-9870",
          created_at: new Date(),
          modified_at: new Date()
        }
      ]);
    });
};
