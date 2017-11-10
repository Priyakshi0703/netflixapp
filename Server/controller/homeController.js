var User = require('../models/user');
var Promise = require("bluebird");

exports.getUser = function (req, res) {
    User.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}


exports.postUser = function (req, res) {
    var user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });
    console.log(req);
    User.find({ email: user.email }, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        } else {
            if (response.length < 1) {
                user.save(function (err, response) {
                    if (err) {
                        console.log(err)
                        res.json(err);
                    }
                    else {
                        res.json({
                            success: true,
                            body: response
                        })
                    }
                })
            } else {
    
                    res.json({
                        success: false,
                        data: 'Email Id Already Registered'
                    });
                
            }
        }
    })
}

exports.loginUser = function (req, res) {
    var user = {
        email: req.body.email,
        password: req.body.password,
    }
    User.find({ email: user.email }, function (err, response) {
        console.log(err, response);
        if (err) {
            return res.json(req, res, err);
        } else {
            if (response.length < 1) {
                res.json({
                    success: false,
                    data: 'Email Id Not Found'
                });
            } else {
                if (response[0].password == user.password) {
                    res.json({
                        success: true,
                        data: 'Login User'
                    });
                } else {
                    res.json({
                        success: false,
                        data: 'Wrong Password'
                    });
                }
            }
        }
    })
}
