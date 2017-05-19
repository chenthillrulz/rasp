var express = require('express');
var router = express.Router();
// var imdb = require('imdb-api');
/* GET movie details. */
router.get('/', function(req, res, next) {
	// imdb.getReq({ name: 'The Dark Knigh' }, (err, things) => {
	res.render('movies');
	// });
});

module.exports = router;
