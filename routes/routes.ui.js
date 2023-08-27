const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index"); //render index.ejs file from views
  //   res.send("hello");
});

module.exports = router;
