var User = require('../models/user');
var Promise = require("bluebird");
var Series = require('../models/series')
var Seasons = require('../models/series')
var Episodes = require('../models/episodes')
var Movies = require('../models/movies')

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
                        role: response[0].role
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
exports.newSeriesAdd = function (req, res) {
    var series = new Series({
        series_id: req.body.series_id,
        series_name: req.body.series_name
    });
    series.save(function (error, response) {
        if (error) {
            res.json({
                "success": false,
                "error": error
            })

        }
        else {

            var seasons = new Seasons({
                season_name: req.body.season_name,
                series_id: req.body.series_id
            });
            seasons.save(function (error1, response1) {
                if (error1) {
                    res.json({
                        "success": false,
                        "error": error1
                    })

                }
                else {
                    res.json({
                        "success": true,
                        "body": response1
                    })
                }
            });
        }
    });



    exports.seasonAdd = function (req, res) {
        var seasons = new Seasons({
            season_name: req.body.season_name,
            series_id: req.body.series_id,
        });
        Season.findOne({ season_name: seasons.season_name, series_id: seasons.series_id }, function (err, response) {
            if (err) {
                res.json({
                    status: "false",
                    data: "server error"
                })
            }
            else if (response == null) {
                season.save(function (error, response1) {
                    if (error) {
                        res.json({
                            "success": false,
                            "error": error
                        })

                    }
                    else {
                        res.json({
                            "success": true,
                            "body": response1
                        })
                    }
                });

            }
            else {
                res.json({
                    success: false,
                    body: "Season Already exist"
                })
            }

        });


    }
    exports.episodesAdd=function (req, res) {
        var episodes = new Episodes({
            episode: req.body.episode,
            season_name: req.body.season_name,
            series_id:req.body.series_id,
            episode_name:req.body.episode_name
        });
        Episodes.findOne({ season_name: episodes.season_name, series_id:episodes.series_id,episode_name:episodes.episode_name }, function (err, response) {
            if (err) {
                res.json({
                    status: "false",
                    data: "server error"
                })
            }
            else if (response == null) {
                episodes.save(function (error, response1) {
                    if (error) {
                        res.json({
                            "success": false,
                            "error": error
                        })
    
                    }
                    else {
                        res.json({
                            "success": true,
                            "body": response1
                        })
                    }
                });
    
            }
            else {
                res.json({
                    success: false,
                    body: "Episodes Already exist"
                })
            }
    
        });


    }

}
exports.postMovies = function(req,res){
    var movies = new Movies({
        name: req.body.name,
        category: req.body.category,
        image:req.body.path

        
    });
    movies.save(function (error, response) {
        if (error) {
            res.json({
                "success": false,
                "error": error
            })

        }
        else {
            res.json({
                "success": true,
                "body": response
            })
        }
    });
}
exports.getMovies = function (req, res) {
    Movies.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }
        res.json(response);
    })
}
exports.updateMovies = function (req, res) {
    var name = req.params.name;
    Movies.findOne({ name: name }, function (err, movies) {
        if (err) {
            res.json(err);
        }
        if(movies!=null){
        name = req.body.newName;
        movies.name = name;

        movies.save(function (err, response) {
            if (err) {
                res.json(err);
            }

            res.json(response);
        });
    }
    else{
        res.json({
            success:false,
            message:"no movie found"
        })
    }
    })
}
exports.deleteMovies = function (req, res) {
    var name = req.params.name;
    Movies.findOne({ name: name }, function (err, movies) {
        if (err) {
            res.json(err);
        }

        if (movies) {
            Movies.remove({ name: name }, function (err) {
                if (err) {
                    res.json(err);
                }

                res.json({
                    success:true
                });
            })
        } else {
            res.json({
                success:false,
                message:"Movie doesnt exist"
            });
        }

    })
}
exports.searchMovies = function (req, res) {
    var name = req.params.name;
    Movies.find({ name: name }, function (err, movies) {
        if (err) {
            res.json(err);
        }
        if (movies) {
            res.json(movies);
        }
        else {
            res.json("Movie Does not exist");
        }
    })
}
exports.searchMoviesByCategory = function (req, res) {
    var category = req.params.category;
    Movies.find({ category: category }, function (err, movies) {
        if (err) {
            res.json(err);
        }
        if (movies) {
            res.json(movies);
        }
        else {
            res.json("Movie or Category does not exist");
        }
    })
}
