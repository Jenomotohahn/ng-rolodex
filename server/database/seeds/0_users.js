exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Dallas",
          last_name: "Moffis",
          email: "DallasMoffis@gmail.com",
          hashedPassword: "aslkdjflsadjf",
          username: "jenilovesme",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: "Jen",
          last_name: "Moffis",
          email: "JenMoffis@gmail.com",
          hashedPassword: "aslkdjflsadjf",
          username: "Dallaslovesme",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: "Hugo",
          last_name: "Moffis",
          email: "HugoMoffis@gmail.com",
          hashedPassword: "aslkdjflsadjf",
          username: "dallasnjenilovesme",
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
