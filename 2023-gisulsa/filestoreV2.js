var fs = require('fs');
const { clearInterval } = require('timers');

var isLock = false;
var filepath = './public/imagesV2.json';

module.exports.getAll = function () {
  return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}
module.exports.get = async function (key) {
  if (isLock) {
    await new Promise(resolve => {
      var intervalObj = setInterval(() => {
        if (!isLock) {
          clearInterval(intervalObj);
          resolve(1);
        }
      }, 100);
    });
  }
  console.log('get');
  isLock = true;
  var jsonObj = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  isLock = false;
  return jsonObj[key];
}
module.exports.put = async function (key, value) {
  if (isLock) {
    await new Promise(resolve => {
      var intervalObj = setInterval(() => {
        if (!isLock) {
          clearInterval(intervalObj);
          resolve(1);
        }
      }, 100);
    });
  }
  console.log('put');
  isLock = true;
  var jsonObj = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  jsonObj[key] = value;
  fs.writeFileSync(filepath, JSON.stringify(jsonObj, null, 2), 'utf-8');
  isLock = false;
}