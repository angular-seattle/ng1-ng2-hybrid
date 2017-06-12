var express = require('express');
var router = express.Router();

var mockTagsResponse = require('./mockTagsResponse.json');
var mockCommitsResponse = require('./mockCommitsResponse.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("OK thx");
  res.render('index', { title: 'JENSBODAL' });
});

router.get('/github/repos/:repoAuthor/:repoName/compare/:baseHead/', function(req, res) {
  var repoAuthor = req.params.repoAuthor;
  var repoName = req.params.repoName;

  var baseHeadSplit = req.params.baseHead.split('...');
  var base = baseHeadSplit[0];
  var head = baseHeadSplit[1];

  console.log('compare', repoAuthor + '/' + repoName, base, head);

  res.send(mockCommitsResponse);
});

router.get('/github/repos/:repoAuthor/:repoName/tags/', function(req, res) {
  var repoAuthor = req.params.repoAuthor;
  var repoName = req.params.repoName;

  console.log('tags', repoAuthor, repoName);

  res.send(mockTagsResponse);
});

module.exports = router;
