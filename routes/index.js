var express = require("express");
var router = express.Router();

// default route
router.get("/", function(req, res) {
  return res.send({ error: true, message: "Default Route" });
});

module.exports = router;
