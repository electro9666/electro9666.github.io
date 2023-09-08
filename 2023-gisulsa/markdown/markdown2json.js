var fs = require('fs');
var lines = fs.readFileSync('./markdown-keyword.md', 'utf-8');
if (lines.indexOf('\r\n') !== -1) {
  lines = lines.split('\r\n');
} else if (lines.indexOf('\n') !== -1) {
  lines = lines.split('\n');
}

var itemList = [];
var item = {};
var lastCursor = null;
for (let i = 0, len = lines.length; i < len; i++) {
  var line = lines[i].trim();
  if (line === '') continue;
  console.log('line', line);

  if (line.startsWith('##')) {
    var cursor = [];

    var lastItem = itemList[itemList.length - 1];
    lastItem.h2List.push({
      h2title: line.replaceAll('##', '').trim(),
      content: cursor
    });
    lastCursor = cursor;
  } else if (line.startsWith('#')) {
    // 시작
    var cursor = [];
    item = {
      h1title: line.replaceAll('#', '').trim(), // # 일때
      content: cursor, // # 이하의 라인
      h2List: [] // ## 일때
      // h2List: [{
      //   h2title: line,
      //   content: []
      // }]
    }
    itemList.push(item);
    lastCursor = cursor;
  } else {
    console.log('itemList', itemList, lastCursor);
    lastCursor.push(line);
  }
}

fs.writeFileSync('./markdown-keyword-result.js', 'var _jsonData = ' + JSON.stringify(itemList, null, 2));