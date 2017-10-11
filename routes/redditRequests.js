require('dotenv').config();
var express = require('express');
var router = express.Router();
var snoowrap = require('snoowrap');

const r = new snoowrap({
  userAgent: 'view images from r/wallpapers',
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

    var imagesArr = [];

    daily.getTop({time:"week"}).then(submission => {
      submission.map(function(el, map){
        var postTitle = el.title;
        var postURL = el.url;
        var imageObj = {
          title:postTitle,
          url:postURL
        }
        imagesArr.push(imageObj);
      });
      res.json(imagesArr);
    });
});

module.exports = router;

