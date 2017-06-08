const express = require('express')
const app = express()
const Nightmare = require('nightmare');

app.use(express.static('public'))

app.get('/', function (req, res) {

  var detailId  = req.query.detailId ? req.query.detailId : 176;
  var imageName = 'static_emotion_' + detailId;
  var imagePath = 'public/images/' + imageName + '.png';
  var nightmare = Nightmare({height: 600, width: 1200});

  nightmare
    .goto('http://fine-exhibition.annawiederkehr.com/detail/' + detailId)
    .wait(3000)
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
