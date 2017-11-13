var express = require('express');
var router = express.Router();

var homeController = require('../controller/homeController');

router.route('/v1/users')
  .post(homeController.postUser)
  .get(homeController.getUser)
  router.route('/v1/login')
  .post(homeController.loginUser);

  router.route('/v1/movies')
  .get(homeController.getMovies)
  .post(homeController.postMovies);
 router.route('/v1/movies/update/:name')
  .put(homeController.updateMovies)
  .delete(homeController.deleteMovies)
  .get(homeController.searchMovies);
  router.route('/v1/movies/category/:category')
  .get(homeController.searchMoviesByCategory);
 

// router.route('/v1/series')
//   .post(homeController.postseries)
//   .get(homeController.getseries)
//   .put(homeController.updateSeries)

// router.route('/v1/seasons')
//   .post(homeController.postseasons)
//   .get(homeController.getseasons)
//   .put(homeController.updateSeasons)


// router.route('/v1/episodes')
//   .post(homeController.postepisodes)
//   .get(homeController.getepisodes)
//   .put(homeController.updateepisodes)

module.exports = router;