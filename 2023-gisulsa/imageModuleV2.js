var HTMLParser = require('node-html-parser');


var getImages = (key, url) => {
  console.log('getImages');
  return new Promise(async (resolve, reject) => {
    var resultList = [];
    try {
      var res = await fetch(url);
      var text = await res.text();
      // console.log(text);
      // var document = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');
      // console.log(document.querySelectorAll('ul')[0].querySelectorAll('li'));
      var document = HTMLParser.parse(text);

      // var tables = document.querySelectorAll('td table');
      var tables = document.querySelectorAll('td table');
      console.log('tables', key, tables.length);
      tables.forEach(table => {
        var trs = table.querySelectorAll('tr');
        var a = trs[0].querySelector('a');
        var link = a.getAttribute('href');

        var searchParams = (new URL('http://localhost' + link)).searchParams;
        link = searchParams.get('q');

        var imgsrc = a.querySelector('img').getAttribute('src')
        // console.log('link', link);
        // console.log('src', src);

        var textA = trs[1].querySelector('a');
        // console.log('url', textA.getAttribute('href'));
        // console.log('text', textA.querySelector('div span span').textContent.trim());
        var alt = textA.querySelector('div span span').textContent.trim();

        resultList.push({
          link: link,
          imgsrc: imgsrc,
          alt: alt
        });
      });
      resolve(resultList);
    } catch (e) {
      console.error('e', e);
    }
  })
}
async function start() {
  var imageList = await getImages('ai', 'https://www.google.com/search?tbm=isch&q=ai');
  console.log('imageList', imageList);
}

start();

module.exports.getImages = getImages;