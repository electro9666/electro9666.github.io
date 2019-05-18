var _sampleData = `{"total":{"value":50,"relation":"eq"},"resultList":[{"took":0,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":null,"hits":[{"_index":"videos","_type":"_doc","_id":"MHocymoBzlZvyciqVm4J","_score":null,"_source":{"videoId":"-kYYuKbxa30","cursorStart":1691,"cursorEnd":1710,"sentence":"I love you so much","start":202,"end":204,"parentId":10,"publishedAt":"2019-05-09 14:16:41","thumbnails":"https://i.ytimg.com/vi/-kYYuKbxa30/default.jpg"},"sort":[1691]}]}},{"took":4,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":null,"hits":[{"_index":"videos","_type":"_doc","_id":"3vgdymoB5FJq85kIAnYU","_score":null,"_source":{"videoId":"AXBBPyND0Ao","cursorStart":2682,"cursorEnd":2722,"sentence":"together I love you I love you sue okay","start":161,"end":168,"parentId":9,"publishedAt":"2019-05-09 14:16:41","thumbnails":"https://i.ytimg.com/vi/AXBBPyND0Ao/default.jpg"},"sort":[2682]}]}},{"took":0,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":null,"hits":[{"_index":"videos","_type":"_doc","_id":"3vgdymoB5FJq85kIAnYU","_score":null,"_source":{"videoId":"AXBBPyND0Ao","cursorStart":2682,"cursorEnd":2722,"sentence":"together I love you I love you sue okay","start":161,"end":168,"parentId":9,"publishedAt":"2019-05-09 14:16:41","thumbnails":"https://i.ytimg.com/vi/AXBBPyND0Ao/default.jpg"},"sort":[2682]}]}},{"took":0,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":null,"hits":[{"_index":"videos","_type":"_doc","_id":"bfgdymoB5FJq85kIAncU","_score":null,"_source":{"videoId":"AXBBPyND0Ao","cursorStart":7928,"cursorEnd":7967,"sentence":"love I love you whether he was playing","start":506,"end":513,"parentId":9,"publishedAt":"2019-05-09 14:16:41","thumbnails":"https://i.ytimg.com/vi/AXBBPyND0Ao/default.jpg"},"sort":[7928]}]}},{"took":4,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":null,"hits":[{"_index":"videos","_type":"_doc","_id":"m_gdymoB5FJq85kIAohW","_score":null,"_source":{"videoId":"eAM_LX440T0","cursorStart":138,"cursorEnd":178,"sentence":"honey I love you wait wait no don't hog","start":13,"end":18,"parentId":9,"publishedAt":"2019-05-09 14:16:41","thumbnails":"https://i.ytimg.com/vi/eAM_LX440T0/default.jpg"},"sort":[138]}]}},{"took":4,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":2,"relation":"eq"},"max_score":null,"hits":[{"_index":"videos","_type":"_doc","_id":"xPgdymoB5FJq85kIAohW","_score":null,"_source":{"videoId":"eAM_LX440T0","cursorStart":1469,"cursorEnd":1549,"sentence":"hmm oh wait I forgot and um I love you and you have nice eyes I love you too uh","start":229,"end":241,"parentId":9,"publishedAt":"2019-05-09 14:16:41","thumbnails":"https://i.ytimg.com/vi/eAM_LX440T0/default.jpg"},"sort":[1469]}]}},{"took":0,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":null,"hits":[{"_index":"videos","_type":"_doc","_id":"xfgdymoB5FJq85kIAohW","_score":null,"_source":{"videoId":"eAM_LX440T0","cursorStart":1508,"cursorEnd":1549,"sentence":"and you have nice eyes I love you too uh","start":235,"end":241,"parentId":9,"publishedAt":"2019-05-09 14:16:41","thumbnails":"https://i.ytimg.com/vi/eAM_LX440T0/default.jpg"},"sort":[1508]}]}},{"took":0,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":2,"relation":"eq"},"max_score":null,"hits":[{"_index":"videos","_type":"_doc","_id":"hfgdymoB5FJq85kIApJe","_score":null,"_source":{"videoId":"FRsG7LTy-sM","cursorStart":5374,"cursorEnd":5426,"sentence":"I love you but whoever this is stop calling me it's","start":618,"end":627,"parentId":9,"publishedAt":"2019-05-09 14:16:41","thumbnails":"https://i.ytimg.com/vi/FRsG7LTy-sM/default.jpg"},"sort":[5374]}]}},{"took":4,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":null,"hits":[{"_index":"videos","_type":"_doc","_id":"-fgdymoB5FJq85kIL6gl","_score":null,"_source":{"videoId":"mikyB4BTkaE","cursorStart":270,"cursorEnd":310,"sentence":"think I love you even more so it's hard","start":28,"end":32,"parentId":9,"publishedAt":"2019-05-09 14:16:41","thumbnails":"https://i.ytimg.com/vi/mikyB4BTkaE/default.jpg"},"sort":[270]}]}}]}`;
var _page = 0;
// var host = 'http://192.168.0.2:3010';
var host = 'https://youtube-subtitle0.herokuapp.com';
// ie8
var calcTime = (time) => {
  time = parseInt(time);
  var min = parseInt(time / 60);
  var sec = time % 60;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;
  return min + ':' + sec;
}
document.addEventListener('DOMContentLoaded', function() {
  init();

  search(0, true);
});

var init = function() {
  Handlebars.registerHelper('json2string', function(data) {
    return JSON.stringify(data)
  });    
  Handlebars.registerHelper('calcTime', function(time) {
    return calcTime(time);
  });    
  Handlebars.registerHelper('calcHeart', function(time) {
    var lsArray = window.localStorage.getItem('youtube-video');
    if (lsArray) {
      lsArray = JSON.parse(lsArray);
    }
    var d = {videoId: this._source.videoId, cursorStart: this._source.cursorStart};
    var existObj = _.find(lsArray, d);
    if (existObj) {
      return 'btn-danger';
    } else {
      return ''
    }
  });    
  Handlebars.registerHelper('calcDateTime', function(datetime) {
    return datetime.split(' ')[0];
  });    
}


var searchDetail = (page, res) => {
  clickNav(0);
  $('.tab0').tab('show');

  if ((page + 1) * 5 < res.total.value) {
    // page
    $('#list-more-button').show();
    _page = page + 1;
  } else {
    $('#list-more-button').hide();
  }

  var source = document.getElementById("list-template").innerHTML;
  var template = Handlebars.compile(source);
  var html = template({
    page: page,
    data: res.resultList
  });
  if (page === 0) {
    $('#list-output').html(html);   
  } else {
    $('#list-output').append($(html));
  }

  // 
  var clickTargets = $(`#list-output .page${page} .clickTarget`);
  for (let i = 0, len = clickTargets.length; i < len; i++) {
    const $element = $(clickTargets[i]);
    var $parent = $element.closest('.list-group');
    var json = $parent.data('source');
    youtube_init_single($parent, $element, json._source, `-search-page${page}-${i}`);
  }
}
var searchMore = function() {
  search(_page);
}
var search = function(page, isFirst) {
  if (_currentPlayer) {
    try {
      _currentPlayer.player.pauseVideo();
    } catch(e) {
      console.error(e);
    }
  }
    
  var videoId = '';
  var text = $('#text').val();
  if (!page) {
    page = 0;
    _currentPlayer = null;
  }
  
  var channelId = '';
  console.log(text);

  // $('.output').html('');
  $('.spinner-border').show();
  try {
    if (isFirst) {
      res = JSON.parse(_sampleData);
      searchDetail(page, res);
      $('.spinner-border').hide();
      return;
    }
    $.get(`${host}/api/search?text=${encodeURIComponent(text)}&page=${page}&videoId=${videoId}&channelId=${channelId}`, (res) => {
      $('.spinner-border').hide();
      console.log('search res', res);
      if (res.error) {
        alert(res.error);
        return;
      }
      searchDetail(page, res);
    });    
  } catch(e) {
    $('.spinner-border').hide();
    console.log(e);
  }
}

var clickNav = (num) => {
  if (_currentPlayer) {
    try {
      _currentPlayer.player.pauseVideo();
    } catch(e) {
      console.error(e);
    }
  }

  $('.nav-item').removeClass('selected');
  $('.nav-item').eq(num).addClass('selected');
  if (num === 0) {

  } else if (num === 1) {
    displayHeartList();
  }
}
var displayHeartList = () => {
  var lsArray = window.localStorage.getItem('youtube-video');
  if (lsArray) {
    lsArray = JSON.parse(lsArray);

    var newArray = lsArray.map((obj) => {
      return {hits: {
        hits: [{
          _source: obj
        }]
      }}
    });
    console.log('newArray', newArray);
    var source = document.getElementById("list-template").innerHTML;
    var template = Handlebars.compile(source);
    var html = template({
      page: -1,
      data: newArray
    });
    $('#heart-list').html(html);

    var clickTargets = $('#heart-list .clickTarget');
    for (let i = 0, len = clickTargets.length; i < len; i++) {
      const $element = $(clickTargets[i]);
      var $parent = $element.closest('.list-group');
      var json = $parent.data('source');
      youtube_init_single($parent, $element, json._source, '-heart-' + i);
    }    
  }
}