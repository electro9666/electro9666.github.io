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

  search();
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

var searchMore = function() {
  search(_page);
}
var search = function(page) {
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
    $.get(`${host}/api/search?text=${encodeURIComponent(text)}&page=${page}&videoId=${videoId}&channelId=${channelId}`, (res) => {
      $('.spinner-border').hide();
      console.log('search res', res);
      if (res.error) {
        alert(res.error);
        return;
      }
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