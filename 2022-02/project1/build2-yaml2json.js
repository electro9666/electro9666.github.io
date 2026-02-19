console.log('build2.js');
var fs = require('fs');
const yaml = require('js-yaml');

var text = fs.readFileSync('./project1/original.yaml', 'utf-8');
// console.log('text', text);
var resultObj = yaml.load(text);
// console.log('result', resultObj);

fs.writeFileSync('./project1/original-result-yaml2json-json.json', JSON.stringify(resultObj, null, 2));


var convertObj2Array = (obj, depth) => {
  // console.log('convertObj2Array', obj === null);
  if (!obj) return [];
  var resultList = [];
  Object.keys(obj).forEach(key => {
    // console.log('key', key, obj[key] === null);
    if (depth < 2) {
      if (obj[key] === null) {
        resultList.push({
          name: key,
          children: [],
          depth
        })
      } else if (obj[key] instanceof Array) {
        resultList.push({
          name: key,
          children: obj[key].map(o => {
            return convertObj2Array(o, depth + 1);
          }),
          depth
        })
      } else {
        resultList.push({
          name: key,
          children: obj[key],
          depth
        })
      }
    } else {
      // depth 2부터는 있는 그대로
      // resultList.push({
      //   name: key,
      //   data: obj[key]
      // });
      resultList.push(obj);
    }
  });
  if (resultList && resultList.length === 1) {
    return resultList[0];
  } else {
    return resultList;
  }
}

var resultObj2 = convertObj2Array(resultObj, 0);
fs.writeFileSync('./project1/original-result2-yaml2json-json2.js', `var _yaml_json = ${JSON.stringify(resultObj2, null, 2)}`);
