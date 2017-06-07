const express = require('express')
const app = express()
const Nightmare = require('nightmare');

app.use(express.static('public'))

app.get('/', function (req, res) {

  var detailId  = req.query.detailId;
  var imageName = detailId ? 'static_emotion_' + detailId : 'static_emotion';
  var imagePath = 'public/images/' + imageName + '.png';
  var nightmare = Nightmare({height: 600, width: 1200});

  nightmare
    .goto('http://fine-exhibition.annawiederkehr.com/detail')
    .screenshot(imagePath)
    .end(() => {

      // res.setHeader('Content-Type', 'application/json');
      // res.send(JSON.stringify({ url: __dirname + '/' + imagePath }));

      res.setHeader('Content-Type', 'image/png');
      res.sendFile(imageName + '.png', {root: __dirname + '/public/images/'});

    })
    .catch(function (error) {
      console.error('Screenshot failed:', error);
    });

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
