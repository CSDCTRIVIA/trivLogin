var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var rr = req.params("reg2Email");console.log("RWTW" +rr);
});

module.exports = router;
