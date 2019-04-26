const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const decorator = require("./database/decorator");

const PORT = process.env.PORT;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(decorator);

app.post("/api/register", (req, res) => {
  console.log("req.body", req.body);
  const user = req.body;
  return res.json(user);
});

app.post("api/login", (req, res) => {
  const user = req.body;
  return res.json(user);
});

app.get("/api/contacts/:id", (req, res) => {
  console.log("req.params", req.params);

  return new req.database.Contacts({ user_id: req.params.id })
    .fetch()
    .then(contacts => {
      return res.json(contacts);
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
