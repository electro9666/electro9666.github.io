const express = require('express');
var cors = require('cors');

var imageModule = require('./imageModule.js');
var filestore = require('./filestore.js');

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


app.get('/getImages', async (req, res) => {
  console.log('req.query.q', req.query.q);
  var key = req.query.q;
  // var result = await filestore.get(key);
  // // console.log('result', result);
  // if (result) {
  //   res.json(result);
  //   return;
  // }

  var resultList = await imageModule.getImages('https://www.google.com/search?tbm=isch&q=' + key);
  await filestore.put(key, resultList);
  res.json(resultList);
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