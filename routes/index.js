var express = require('express');
var router = express.Router();

const Pageres = require('pageres');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send('Hello World!')
  // res.render('index', { title: 'Express' });
  const pageres = new Pageres()
  .src('fine-exhibition.annawiederkehr.com/detail', ['iphone5'], {
    crop: true,
    delay: 2,
    filename: 'screenshot',
    incrementalName: true,
    // userAgent: 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36'
  })
  .dest('screenshots')
  .run()
  .then((res) => {
    console.log('Done');
  });
});

module.exports = router;
