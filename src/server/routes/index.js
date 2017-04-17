var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("OK thx");
  res.render('index', { title: 'JENSBODAL' });
});

module.exports = router;
