$(document).ready(function () {
  var currentPlay = null;
  /**
   * handlebars
   */
  Handlebars.registerHelper('showFn', function(params) {
    return params === 0 ? 'show' : '';
  });
  const parseChord = (chord) => {
    let html = '';
    let index = 0;    
    chord.split('\n').forEach((v) => {
      v = v.trim();
      if (!v) return;
      v.split(',').forEach((v) => {
        let className = 'time1';
        v = v.trim();
        if (!v) return;
        if (v.startsWith('^') || v.startsWith('*') || v.startsWith('@')) {
          // 1박
        } else {
          className = 'time2';
        }
        html += `<span class="badge chordunit badge-warning ${className} note${index}" onclick="clickChord(this, ${index});">${v}</span>`;
        index++;
      });
      html += '<br/>';
    });    
    return html;
  }
  Handlebars.registerHelper('chordFn', function(params) {
    return parseChord(params.chord);
  });
  Handlebars.registerHelper('chordFn2', function(params) {
    return JSON.stringify(this)
  });
  var source = document.getElementById("db-template").innerHTML;
  var template = Handlebars.compile(source);  
  var html = template(_play_data);
  $('#db').html(html);

  /**
   * piano
   */
  var pianoData = [
    {class: 'major', note: 'C', left: 0},
    {class: 'minor', note: 'Cs', left: 6},
    {class: 'major', note: 'D', left: 9},
    {class: 'minor', note: 'Ds', left: 16},
    {class: 'major', note: 'E', left: 18},
    {class: 'major', note: 'F', left: 27},
    {class: 'minor', note: 'Fs', left: 33},
    {class: 'major', note: 'G', left: 36},
    {class: 'minor', note: 'Gs', left: 43},
    {class: 'major', note: 'A', left: 45},
    {class: 'minor', note: 'As', left: 53},
    {class: 'major', note: 'B', left: 54}
  ];
  var seq = 0;
  var pianoObj = [];
  for (let i = 1; i <= 5; i++) {
    var pianoData2 = JSON.parse(JSON.stringify(pianoData));
    pianoData2.forEach((obj, index) => {
      obj.noteAndNum = obj.note + i;
      obj.seq = seq++;
      return obj;
    });
    pianoObj.push(pianoData2);;
  }
  Handlebars.registerHelper('if2', function(options) {
    if (this.class === 'major') {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });  
  var source = document.getElementById("piano-template").innerHTML;
  var template = Handlebars.compile(source);  
  var html = template(pianoObj);
  $('.piano').html(html);

  /**
   * init
   */
  var myMidi = new MyMidi();
  myMidi.init();

  /**
   * event
   */
  window.openCard0 = (obj) => {
    const isClose = $(obj).attr('aria-expanded');
    if (isClose === 'false') {
      window._testTextarea();

      playButton.playing();
      window.clickChord(null, 0, $(obj).closest('.card').find('.card-body'), true);
    } else {
      playButton.stopped();
      if (currentPlay) {
        currentPlay.stop();
      }      
    } 
  }
  window.openCard = (obj) => {
    const isClose = $(obj).attr('aria-expanded');
    if (isClose === 'false') {
      playButton.playing();
      window.clickChord(null, 0, $(obj).closest('.card').find('.card-body'));
    } else {
      playButton.stopped();
      if (currentPlay) {
        currentPlay.stop();
      }      
    }
  };
  window.clickChord = (obj, index, cm, isTest) => {
    if (!myMidi._isLoadSampler) {
      alert('sampler is loading...');
      return;
    }
    myMidi.resetTimeout();
  
    if (!cm) {
      myMidi.$currentMusic = $(obj).closest('.card-body');
    } else {
      myMidi.$currentMusic = cm;
    }
    var source = myMidi.$currentMusic.data('source');
    var notes = source.chord.split(',');
    var cObj = new ChordManager(source.baseNote, source.baseOctave);
    var newNotes = notes.map((note, i) => {
      return cObj._generateChord(note, i);
    });
    console.log('newNotes', newNotes);
  
    if (currentPlay) {
      currentPlay.stop();
    }
  
    currentPlay = new PlayChord(newNotes, myMidi, isTest);
    currentPlay.play(index);
  
    // $('#music_sheet').attr('src', source.img);
    // $('#music_sheet').css('height', window.innerHeight + 'px');
  }
  
  window._play = () => {
    if (currentPlay) {
      if (currentPlay.isTest) {
        window._testTextarea();
        window.clickChord(null, 0, $('#card-body0'), true);
      } else {
        currentPlay.resume();
      }
    } else {
      window._testTextarea();
      window.clickChord(null, 0, $('#card-body0'), true);      
    }
  }
  window._pause = () => {
    if (currentPlay) {
      currentPlay.stop();
    }
  }
  window._octaveUp = () => {
    if (myMidi.$currentMusic) {
      _setOctaveAdd(1, myMidi.$currentMusic);
    }
  }
  window._octaveDown = () => {
    if (myMidi.$currentMusic) {
      _setOctaveAdd(-1, myMidi.$currentMusic);
    }    
  }
  window._octaveReset = () => {
    if (myMidi.$currentMusic) {
      _setOctaveReset(myMidi.$currentMusic);
    }
  }
  let typeIndex = 0;
  const typeArray = [2,4,5,6,7,8,9,10];
  window._changeMode = () => {
    globalType = typeArray[++typeIndex % typeArray.length];
    console.log('globalType', globalType);
    $('#mode2').html(globalType);
  }
  window._gotoGoogle = (keyword) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(keyword + ' 악보')}&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjlrci50d3hAhWBXrwKHWeXDEYQ_AUIDigB&biw=1920&bih=937`);
  }
  window._testTextarea = () => {
    _octaveAdd = 0;
    
    var chord = $('.tx').val();
    $('#card-body0').closest('.card').find('.card-body').data('source',  {
      name: 'test',
      speed: 1,
      baseNote: 'A',
      baseOctave: 3,    
      chord: chord
    });
    var html = parseChord(chord);
    $('.badgeModeList').html(html);
    $('.badgeMode').show();
    $('.editMode').hide();
  }
  window._editTextarea = () => {
    $('.badgeMode').hide();
    $('.editMode').show();
    if (currentPlay) {
      currentPlay.stop();
    }    
  }
});