var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({book:"The Black Book"})
});

module.exports = router;
