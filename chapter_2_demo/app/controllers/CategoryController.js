/*jslint browser: true, devel: true, node: true, rhino: true, passfail: true, bitwise: true,  continue: true, debug: true, eqeq: true, evil: true, forin: true, newcap: true, nomen: true, plusplus: true, regexp: true, unparam: true, sloppy: true,  sub: true, vars: true, white: true */

var cate = require("../models/CategoryModel");

module.exports.controller = function (app) {

    //list
    app.get('/api/cate', function (req, res) {
        cate.find({}, function (err, result) {
            res.json(result);
        });
    });

    //new
    app.get('/api/cate/new', function (req, res) {
        res.json(new cate());
    });

    //create
    app.post('/api/cate', function (req, res) {
        var ob = new cate(req.body);
        ob.save();
        res.json(ob);
    });

    //show
    app.get('/api/cate/:id', function (req, res) {
        cate.findOne({
            _id: req.params.id
        }, function (err, result) {
            if (result) {
                res.json(result);
            } else {
                res.json(null);
            }

        });
    });

    //edit
    app.get('/api/cate/:id/edit', function (req, res) {
        cate.findOne({
            _id: req.params.id
        }, function (err, result) {
            if (result) {
                res.json(result);
            } else {
                res.json(null);
            }

        });
    });

    //update
    app.put('/api/cate/:id', function (req, res) {
        cate.findByIdAndUpdate({
            _id: req.params.id
        }, req.body, function (err, result) {
            if (result) {
                res.json(result);
            } else {
                res.json(null);
            }
        });
    });

    //destroy
    app.del('/api/cate/:id', function (req, res) {
        cate.findOne({
            _id: req.params.id
        }).remove(function (err, result) {
            res.json(result);
        });
    });
};