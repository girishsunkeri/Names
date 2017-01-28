var express = require('express');
var router = express.Router();
var users = ['Girish', 'Scanny', 'Akash']

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Names', users: users });
});

router.post('/', function(req, res, next) {
  users.push(req.body.username);
  res.render('index', { title: 'Names', users: users });
});

module.exports = router;
