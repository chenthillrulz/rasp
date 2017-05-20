var express = require('express');
var router = express.Router();

/* GET movie details. */
router.get('/', function(req, res, next) {
	res.render('movies');
});

module.exports = router;
