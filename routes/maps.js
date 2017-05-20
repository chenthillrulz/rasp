var express = require('express');
var router = express.Router();

/* GET map direction listing. */
router.get('/', function(req, res, next) {
    var to_location;
    if (req.query.to != undefined) {
        to_location = req.query.to + ", Bangalore";
    } else {
        to_location = "Salem, TamilNadu";
    }

    res.render('maps', {to_location: to_location});
});

module.exports = router;