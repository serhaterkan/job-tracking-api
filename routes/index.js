var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getPriority', function (req, res, next) {
  const priority = [
    { key: "1", name: "Urgent" },
    { key: "2", name: "Regular" },
    { key: "3", name: "Trival" },
  ];
  res.json({ isSuccess: true, resultSet: priority, resultMessage: "Success" });
});


module.exports = router;
