const download = require('image-downloader');
var jsonObject = require('./public/imagesV2.json');

var sum = 0;
function start() {
  Object.keys(jsonObject).forEach(key => {
    jsonObject[key].list.forEach((o, index) => {
      sum++;
      // var outputfilename = key + ' ' + index + '.png';
      // download.image({
      //   url: o.imgsrc,
      //   dest: `../../images/${outputfilename}`,
      // })
      //   .then(({ filename }) => {
      //     console.log('Saved to', filename); // saved to /path/to/dest/photo.jpg
      //   })
      //   .catch((err) => console.error(err));
    });
  });

  console.log('sum', sum);
}

start();

