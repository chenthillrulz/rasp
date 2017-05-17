var express = require('express');
var router = express.Router();

/* GET map direction listing. */
router.get('/', function(req, res, next) {
    res.render('maps');
});

module.exports = router;