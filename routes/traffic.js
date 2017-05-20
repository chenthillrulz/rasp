var express = require('express');
var router = express.Router();

/* GET map direction listing. */
router.get('/', function(req, res, next) {
    var to_location;
    if (req.query.to != undefined) {
        to_location = req.query.to + ",Bangalore";
    } else {
        to_location = "Kempegowda international airport, Bangalore";
    }

    res.render('traffic', {to_location: to_location});
});

module.exports = router;