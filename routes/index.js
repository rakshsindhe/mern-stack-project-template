var express = require('express');
var router = express.Router();

/* GET API homepage */
router.get('/', function(req, res, next) {
  res.json({
    "status" :  "ok",
    "message": "INIT API route"
  })
});

module.exports = router;
