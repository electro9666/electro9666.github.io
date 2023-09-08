const express = require('express');
var cors = require('cors'); 

// var imageModule = require('./imageModuleV2.js');
var imageModule = require('./imageModule.js');
var filestore = require('./filestoreV2.js');

const app = express();
// const port = process.env.PORT || 8080;
const port = process.env.PORT || 9000;
// const port = process.env.PORT || 3300; // sapjco
app.use(cors());
app.use(express.json({
  limit: "50mb"
}));
app.use(express.urlencoded({
  limit: "50mb",
  extended: false
}));

// app.use(express.static('../../templateDesigner'));

app.use(express.static('./public'));
app.use(express.static('./markdown'));

function getCurrentDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 해줍니다.
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

  return formattedDateTime;
}

app.get('/getImages', async (req, res) => {
  console.log('req.query.q', req.query.q);
  var key = req.query.q;
  // var result = await filestore.get(key);
  // // console.log('result', result);
  // if (result) {
  //   res.json(result);
  //   return;
  // }

  var resultList = [];
  try {
    resultList = await imageModule.getImages(key, 'https://www.google.com/search?tbm=isch&q=' + key);
  } catch (e) {
    console.error('resultList e', e);
  }

  var currentDate = getCurrentDateTime();
  await filestore.put(key, {
    date: currentDate,
    list: resultList
  });
  res.json({
    date: currentDate,
    list: resultList
  });
});

app.get('/imagesV2.json', async (req, res) => {
  res.json(filestore.getAll());
});

// test
app.get('*', (req, res) => {
  console.log('get');
  res.json(111222333)
});

app.post('*', (req, res) => {
  console.log('post');
  res.json(1124451)
  // setTimeout(() => {
  //   console.log('send');
  //   res.json(11)
  // }, 60000*2); // 60초
});

// TODO API

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});