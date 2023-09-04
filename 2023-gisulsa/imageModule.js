const puppeteer = require('puppeteer');

var getImages = (url) => {
  console.log('getImages');
  return new Promise(async (resolve) => {
    // Puppeteer 브라우저를 시작합니다.
    const browser = await puppeteer.launch();

    // 새 페이지를 엽니다.
    const page = await browser.newPage();

    // Google 검색 페이지로 이동합니다.
    await page.goto(url);

    // 검색어를 입력하고 검색 버튼을 클릭합니다.
    // await page.type('input[name=q]', 'Puppeteer');
    // await page.click('input[type=submit]');

    // 검색 결과를 가져옵니다.
    const searchResults = await page.$$('#islrg>div>div>a:nth-child(2)');
    console.log('searchResults', searchResults.length);

    var resultList = [];
    for (let i = 0; i < searchResults.length; i++) {
      // // img 2개 중 
      await searchResults[i].click(); // 클릭을 해야 href가 생성된다.
      var href = await page.evaluate(elem => elem.getAttribute('href'), searchResults[i]);
      // console.log('href', href);
      var src = (new URL('http://localhost' + href)).searchParams.get('imgurl');
      // console.log('imgs', imgs);
      // var src = await page.evaluate(elem => elem.getAttribute('src'), searchResults[i]);

      // var atags = await page.evaluate(elem => elem.querySelectorAll('a'), searchResults[i]);
      if (src !== null && resultList.length < 10) {
        resultList.push(src);
      }
    }

    resolve(resultList);

    // Puppeteer 브라우저를 종료합니다.
    await browser.close();
  })
}

async function start() {
  var imageList = await getImages('https://www.google.com/search?tbm=isch&q=%EC%A0%84%EC%9D%B4%ED%95%99%EC%8A%B5');
  console.log('imageList', imageList);
}

// start();

module.exports.getImages = getImages;