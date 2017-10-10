require('dotenv').config();
var express = require('express');
var router = express.Router();
var snoowrap = require('snoowrap');

const r = new snoowrap({
  userAgent: 'random daily programmer challenge',
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  refreshToken: process.env.refreshToken
});

r.config({"proxies":false});

router.get('/', function(req, res, next){
  res.json("hi from from our test route");
});


router.get('/images', function(req, res, next){

    var daily = r.getSubreddit('wallpapers');

    daily.getTop({"time":"week"}).then(submission => {
      var postTitle = submission.title;
      var postId = submission.id;
      var challengeObj = {
        title:postTitle
      }
      res.json(challengeObj);
    });
});

module.exports = router;
