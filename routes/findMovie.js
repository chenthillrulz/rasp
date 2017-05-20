var express = require('express');
var router = express.Router();

/* Find movie details. */
router.get('/', function(req, res, next) {
	var movieName;
	if (req.query.movieName === undefined) {
		movieName = "Baahubali 2";
	}
	else{
		movieName = req.query.movieName
	}
	res.render('findMovie', { movieName: movieName });
});

module.exports = router;
