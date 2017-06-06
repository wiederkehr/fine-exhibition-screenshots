const express = require('express')
const app = express()
const Nightmare = require('nightmare');
const fs = require('fs')

app.get('/', function (req, res) {

  var nightmare = Nightmare({height: 600, width: 1200});

  nightmare
    .goto('http://fine-exhibition.annawiederkehr.com/detail')
    .screenshot('screenshots/screenshot.png')
    .end()
    .catch(function (error) {
      console.error('Screenshot failed:', error);
    });
  res.sendFile('screenshot.png', {root: __dirname + '/screenshots/'})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
