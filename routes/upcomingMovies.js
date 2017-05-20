var express = require('express');
var router = express.Router();

/* GET upcoming movie details. */
router.get('/', function(req, res, next) {
	res.render('upcomingMovies');
});

module.exports = router;
