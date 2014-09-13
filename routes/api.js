var express = require('express'),
    winston = require('winston'),
    Bear = require('./../models/bear'),
    router = express.Router();

router.use(function (req, res, next) {
    winston.info('Something is happening');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'welcome to our api' });
});

router.route('/bears')

    .post(function (req, res) {
        var bear = new Bear();
        bear.name = req.body.name;

        bear.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Bear created!' });
        });
    })

    .get(function (req, res) {
        Bear.find(function (err, bears) {
            if (err) {
                res.send(err);
            }
            res.json(bears);

        });
    });

router.route('/bears/:bear_id')

    .get(function (req, res) {
        Bear.findById(req.params.bear_id, function (err, bear) {
            if (err) {
                res.send(err);
            }
            res.json(bear);

        });
    })

    .put(function (req, res) {
        Bear.findById(req.params.bear_id, function (err, bear) {
            if (err) {
                res.send(err);
            }
            bear.name = req.body.name;

            bear.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Bear updated' });
            });
        })
    })

    .delete(function (req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function (err, bear) {
            if (err) {
                res.send(err);
            }
            res.json( { message: 'Successfully deleted' });
        });
    });

module.exports = router;
