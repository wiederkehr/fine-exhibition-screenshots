const express = require('express')
const app = express()
const Nightmare = require('nightmare')

app.use(express.static('public'))

app.get('/', function (req, res) {

  // const detailIds = [170, 171, 172, 173, 174, 175, 176, 177, 178, 179];
  const detailIds = [180, 181, 182, 183, 184, 185, 186, 187, 188, 189];
  // const detailIds = [190, 191, 192, 193, 194, 195, 196, 197, 198, 199];
  // const detailIds = [200, 201, 202, 203, 204, 205, 206, 207, 208, 209];
  // const detailIds = [210, 211, 212, 213, 214, 215, 216, 217, 218, 219];
  // const detailIds = [220, 221, 222, 223, 224, 225, 226, 227, 228, 229];
  // const detailIds = [230, 231, 232, 233, 234, 235, 236, 237, 238, 239];
  // const detailIds = [240, 241, 242, 243, 244, 245, 246, 247, 248, 249];
  // const detailIds = [250, 251, 252, 253, 254, 255, 256, 257, 258, 259];
  // const detailIds = [260, 261, 262, 263, 264, 265, 2626 267, 268, 269];
  // const detailIds = [270, 271, 272, 273, 274, 275, 276, 277, 278, 279];
  // const detailIds = [280, 281, 282, 283, 284, 285, 286, 287, 288, 289];
  // const detailIds = [290, 291, 292, 293, 294, 295, 296, 297, 298, 299];
  // const detailIds = [300, 301, 302, 303, 304, 305, 306, 307, 308, 309];

  detailIds.forEach((detailId) => {

    const imageName = 'static_emotion_' + detailId;
    const imagePath = 'public/images/' + imageName + '.png';
    const nightmare = Nightmare({height: 600, width: 1200});

    nightmare
      .goto('http://fine-exhibition.annawiederkehr.com/detail/' + detailId)
      .wait(2000)
      .screenshot(imagePath)
      .end(() => {

        // res.setHeader('Content-Type', 'application/json');
        // res.send(JSON.stringify({ url: __dirname + '/' + imagePath }));

        // res.setHeader('Content-Type', 'image/png');
        // res.sendFile(imageName + '.png', {root: __dirname + '/public/images/'});

        console.log('Screenshot ' + imageName + ' finished.')

      })
      .catch(function (error) {
        console.error('Screenshot failed:', error);
      })

  })

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
