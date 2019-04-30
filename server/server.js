const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const decorator = require("./database/decorator");

const PORT = process.env.PORT;
const contactRoutes = require("./routes/contacts");
const userRoutes = require("./routes/users/index");

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(decorator);
// app.use("/api", userRoutes);
app.use("/api", contactRoutes);

app.post("/register", (req, res) => {
  console.log("req.body", req.body);
  const user = req.body;
  return res.json(user);
});

app.post("/login", (req, res) => {
  const user = req.body;
  return res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
