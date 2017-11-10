var express = require('express');
var router = express.Router();

var homeController = require('../controller/homeController');

router.route('/v1/users')
  .post(homeController.postUser)
  .get(homeController.getUser)
  router.route('/v1/login').post(homeController.loginUser);

router.route('/v1/series')
  .post(homeController.postseries)
  .get(homeController.getseries)
  .put(homeController.updateSeries)

// router.route('/v1/seasons')
//   .post(homeController.postseasons)
//   .get(homeController.getseasons)
//   .put(homeController.updateSeasons)


// router.route('/v1/episodes')
//   .post(homeController.postepisodes)
//   .get(homeController.getepisodes)
//   .put(homeController.updateepisodes)

module.exports = router;