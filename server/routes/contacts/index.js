const express = require("express");
const router = express.Router();

router.route("/contacts/:id").get((req, res) => {
  console.log("req.params", req.params);
  return new req.database.Contacts({ user_id: req.params.id })
    .fetchAll()
    .then(contacts => {
      return res.json(contacts);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.route("/create").post((req, res) => {
  const {
    first_name,
    last_name,
    email,
    address,
    mobile,
    work_phone,
    home_phone,
    notes
  } = req.body;
  const created_at = new Date();
  const modified_at = new Date();
  return new req.database.Contacts({
    first_name,
    last_name,
    email,
    address,
    mobile,
    work_phone,
    home_phone,
    notes,
    created_at,
    modified_at
  })
    .save()
    .then(contacts => {
      return res.json(contacts);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
