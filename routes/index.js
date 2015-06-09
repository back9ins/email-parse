var express = require('express');
var router = express.Router();
var mailstrip = require('mailstrip');
var urlencode = require('urlencode');

router.post('/parse', function(req, res, next) {
  res.json({ parsed: urlencode(mailstrip(urlencode.decode(req.body.reply))) });
});

module.exports = router;