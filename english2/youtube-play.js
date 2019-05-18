var _currentPlayer = null;

class Player {
  constructor($parent, $clickTarget, _source, id) {
    this.$parent = $parent;
    this._source = _source;
    this.id = id;
    this.$yt = $parent.find('.yt');
    this.$clickTarget = $clickTarget;

    this.intervalObj = -1;

    this.init();
    this.isFirst = true;

    this.$heart = $parent.find('.heart');
    // this.$play = $parent.find('.play');
    // this.$pause = $parent.find('.pause');
    // this.$start = $parent.find('.start');
    // this.$end = $parent.find('.end');
    // this.$backwardStart = $parent.find('.backward-start');
    // this.$forwardStart = $parent.find('.forward-start');
    // this.$backwardEnd = $parent.find('.backward-end');
    // this.$forwardEnd = $parent.find('.forward-end');
    // this.$currentTime = $parent.find('.current_time');

    this.event();
  }
  event() {
    // this.$pause.hide();
    this.$clickTarget.on('click', () => {
      if (this.isFirst) {
        this.initPlayer();
      }
    });
    // this.$play.on('click', () => {
    //   if (this.isFirst) {
    //     this.initPlayer();
    //   } else {
    //     this.player.playVideo();
    //   }
    // });
    // this.$pause.on('click', () => {
    //   this.player.pauseVideo();
    // });
    // this.$backwardStart.on('click', () => {
    //   this.$start.html(calcTime(--this._source.start));
    //   this.startPlay();
    // });
    // this.$forwardStart.on('click', () => {
    //   this.$start.html(calcTime(++this._source.start));
    //   this.startPlay();
    // });
    // this.$backwardEnd.on('click', () => {
    //   this.$end.html(calcTime(--this._source.end));
    //   this.startPlay();
    // });
    // this.$forwardEnd.on('click', () => {
    //   this.$end.html(calcTime(++this._source.end));
    //   this.startPlay();
    // });
    this.$heart.on('click', () => {
      var lsArray = window.localStorage.getItem('youtube-video');
      if (lsArray) {
        lsArray = JSON.parse(lsArray);
      } else {
        lsArray = [];
      }
      var d = {videoId: this._source.videoId, cursorStart: this._source.cursorStart};
      var findIndexResult = _.findIndex(lsArray, d);
      if (findIndexResult !== -1) {
        console.log('exist localStorage');
        // delete
        lsArray.splice(findIndexResult, 1);
        this.$heart.removeClass('btn-danger');
      } else {
        // add
        d = Object.assign({}, d, {
          sentence: this._source.sentence,
          publishedAt: this._source.publishedAt,
          start: this._source.start,
          end: this._source.end,
          thumbnails: this._source.thumbnails
        });
        lsArray.push(d);
        this.$heart.addClass('btn-danger');
      }

      window.localStorage.setItem('youtube-video', JSON.stringify(lsArray));
    });
  }
  init() {
    this.id = 'video' + this.id;
    this.$yt.html($(`<div class='videoClass' id='${this.id}'></div>`));
  }
  initPlayer() {
    var thumbnailsElem = this.$parent.find('.thumbnails');
    thumbnailsElem.remove();            
    this.isFirst = !this.isFirst;

    this.player = new YT.Player(this.id, {
      width: '100%',
      height: 300,
      videoId: '',
      playerVars: {
        playlist: ''
        ,controls: 1
        ,cc_load_policy: 0
      },
      events: {
        onReady: () => {
          this._onReady();
        },
        onPlaybackQualityChange : () => {},
        onStateChange : (event) => {
          this._onStateChange(event);
        },
        onError : () => {}
      }
    });
    window.yyy = this.player;
  }
  startPlay() {
    if (this.isFirst) {
      this.initPlayer();
    }
    this.player.setVolume(100);
    this.player.seekTo(this._source.start);
  }    
  _onReady() {
    this.player.loadVideoById({
      videoId: this._source.videoId,
      startSeconds: this._source.start,
      // endSeconds: this._source.end,
      suggestedQuality: 'large'
    });
    this.player.setVolume(100);   
  }
  _onStateChange(event) {
    window.yyy = this.player;
        
    clearInterval(this.intervalObj);
    var state = "undefiend";
    switch (event.data) {
      case YT.PlayerState.UNSTARTED:	//-1
        break;
      case YT.PlayerState.ENDED:		//0
        state = "ended";
        this.startPlay();
        break;
      case YT.PlayerState.PLAYING:	//1
        state = "playing";
        // endTime을 가져온다.
        if (this._source.end === 0) {
          this._source.end = parseInt(this.player.getDuration());
        }

        if (_currentPlayer && _currentPlayer !== this) {
          try {
            _currentPlayer.player.pauseVideo();
          } catch(e) {
            console.error(e);
          }
        } else {

        }
        _currentPlayer = this;
        $('.timestamp-controller').find('.start').html(calcTime(this._source.start));
        $('.timestamp-controller').find('.end').html(calcTime(this._source.end));

        // this.$pause.show();
        // this.$play.hide();
        $('.timestamp-controller').find('.current_time').html(calcTime(this.player.getCurrentTime()));
        this.intervalObj = setInterval(() => {
          $('.timestamp-controller').find('.current_time').html(calcTime(this.player.getCurrentTime()));
          if (this.player.getCurrentTime() < this._source.start || this._source.end < this.player.getCurrentTime()) {
            this.startPlay();
            clearInterval(this.intervalObj);
          }
        }, 500);
        break;
      case YT.PlayerState.PAUSED:		//2
        state = "paused";
        // this.$pause.hide();
        // this.$play.show();        
        break;
      case YT.PlayerState.BUFFERING:	//3
        state = "buffering";
        break;
      case YT.PlayerState.CUED:		//5
        state = "video cued";
        break;
      default:
        state = "unknown (" + event.data + ")";
    }
    console.log('state', state);
  }
  destroy() {
    clearInterval(this.intervalObj);
    this.player.destroy();
  }
}

document.addEventListener("DOMContentLoaded", function() {

  window.onYouTubeIframeAPIReady = () => {
    console.log('onYouTubeIframeAPIReady');
    // youtube_init();
  }  
  // youtube
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

var playerList = [];
var youtube_init_single = ($parent, clickTarget, _source, index) => {
  new Player($parent, clickTarget, _source, index);
}
var youtube_init = (videoList) => {
  console.log('youtube_init');

  // var videoList = [{
  //   videoId: '66WHeG0v3D0',
  //   start: 10,
  //   end: 15
  // },{
  //   videoId: '66WHeG0v3D0',
  //   start: 20,
  //   end: 25
  // }];

  if (playerList) {
    playerList.forEach((player) => {
      player.destroy();
    });
    playerList = [];
  }

  var $parent = $('#video-output');
  $parent.empty();
  for (let i = 0, len = videoList.length; i < len; i++) {
    if (5 < i) {
      break;
    }
    const video = videoList[i];
    playerList.push(new Player($parent, video, i));
  }
}