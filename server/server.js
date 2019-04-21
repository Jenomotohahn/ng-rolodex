const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
