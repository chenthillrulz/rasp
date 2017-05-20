var express = require('express');
var router = express.Router();

/* GET map direction listing. */
router.get('/', function(req, res, next) {
    var location;
    if (req.query.location != undefined) {
     location = req.query.location;
    } else {
        location = "Bangalore";
    }

    res.render('weather',location);
});

module.exports = router;