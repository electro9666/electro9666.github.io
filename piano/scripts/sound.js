
var onLeftSound = true;
var onRightSound = true;
var globalType = 2;

var leftVelocity = 0.7;
var rightVelocity = 0.7;

var speed = 1; // 높을 수록 빠름
var half = 0.5 / speed;
var quarter = 0.25 / speed;
// 1박이 0.75
var one = 1 / speed;
var oneHalf = 1.5 / speed;
var two = 2 / speed;

// UI 연결
// const _setSpeedReset = () => {
//   _setSpeedAdd(-speed + 1);
// }
// const _setSpeedAdd = (v) => {
//   speed = speed + v;
//   half = 0.5 / speed;
//   quarter = 0.25 / speed;
//   one = 1 / speed;
//   oneHalf = 1.5 / speed;
//   two = 2 / speed;  
// }

class PlayButtonClass {
  constructor() {

  }
  playing() {
    $('.footer-play').hide();
    $('.footer-pause').show();
  }
  stopped() {
    $('.footer-play').show();
    $('.footer-pause').hide();
  }
}
const playButton = new PlayButtonClass();

class MyMidi {
  constructor() {
    this._sampler = null;
    this._isLoadSampler = false;
    this.timeoutArr = [];
    this.$currentMusic = null;
  }
  init() {
    this._sampler = new Tone.Sampler({
      "A0" : "A0.[mp3|ogg]",
      "A1" : "A1.[mp3|ogg]",
      "A2" : "A2.[mp3|ogg]",
      "A3" : "A3.[mp3|ogg]",
      "A4" : "A4.[mp3|ogg]",
      "A5" : "A5.[mp3|ogg]",
      "A6" : "A6.[mp3|ogg]",
      "A7" : "A7.[mp3|ogg]",
      "C1" : "C1.[mp3|ogg]",
      "C2" : "C2.[mp3|ogg]",
      "C3" : "C3.[mp3|ogg]",
      "C4" : "C4.[mp3|ogg]",
      "C5" : "C5.[mp3|ogg]",
      "C6" : "C6.[mp3|ogg]",
      "C7" : "C7.[mp3|ogg]",
      "C8" : "C8.[mp3|ogg]",    
      "D#1" : "Ds1.[mp3|ogg]",
      "D#2" : "Ds2.[mp3|ogg]",
      "D#3" : "Ds3.[mp3|ogg]",
      "D#4" : "Ds4.[mp3|ogg]",
      "D#5" : "Ds5.[mp3|ogg]",
      "D#6" : "Ds6.[mp3|ogg]",
      "D#7" : "Ds7.[mp3|ogg]",
      "F#1" : "Fs1.[mp3|ogg]",
      "F#2" : "Fs2.[mp3|ogg]",
      "F#3" : "Fs3.[mp3|ogg]",
      "F#4" : "Fs4.[mp3|ogg]",
      "F#5" : "Fs5.[mp3|ogg]",
      "F#6" : "Fs6.[mp3|ogg]",
      "F#7" : "Fs7.[mp3|ogg]",
      
    }, {
      // https://github.com/Tonejs/tonejs.github.io/tree/master/examples/audio/salamander
      baseUrl : "https://tonejs.github.io/examples/audio/salamander/",
      release: 1,
      // curve: "linear",
      onload: () => {
        try {
          this._isLoadSampler = true;
        } catch(e) {
          console.log(e);
          document.getElementById('error').innerHTML = JSON.stringify(e, null, 4);
        }
      },
    }).toMaster();
  }
  soundNote(obj, noteIndex, duration, velocity, delayTime) {
    var convertedIndex = _convertIndex(noteIndex);
    var note = _convert(convertedIndex);
    if (0 < delayTime) {
      const timeoutObj = setTimeout(() => {
        clearTimeout(timeoutObj);
        this._sampler.triggerAttackRelease(note, duration, Tone.now(), velocity);
        $(`.i${convertedIndex}`).addClass('selected');
      }, delayTime);
      this.timeoutArr.push(timeoutObj);
    } else {
      this._sampler.triggerAttackRelease(note, duration, Tone.now(), velocity);
      $(`.i${convertedIndex}`).addClass('selected');
    }
    try {
      this.$currentMusic.find('.badge.chordunit').removeClass('badge-info').addClass('badge-warning');
      this.$currentMusic.find(`.badge.chordunit.note${obj.index}`).removeClass('badge-warning').addClass('badge-info');
    } catch(e) {
      console.error(e);
    }
  }
  sound(obj) {
    if (obj.time === 2) {
      obj.type = globalType;
    }

    if (obj.type === 1) {
      // 1박자
      if (onLeftSound) {
        this.soundNote(obj, obj.left - 24, 2000, leftVelocity, 0);
        this.soundNote(obj, obj.left - 12, 2000, leftVelocity, 0);
      }
      if (onRightSound) {
        obj.chord.forEach((n) => {
          this.soundNote(obj, n, 2000, 0.7, 0);
        });
      }
    } else if (obj.type === 3) {
      // 1박자
      if (onLeftSound) {
        this.soundNote(obj, obj.left - 24, 2000, leftVelocity, half * 1000);
        this.soundNote(obj, obj.left - 12, 2000, leftVelocity, half * 1000);
      }
      if (onRightSound) {
        obj.chord.forEach((n) => {
          this.soundNote(obj, n, 2000, 0.7, 0);
        });
      }
    } else if (obj.type === 2) {
      // 2박자
      if (onLeftSound) {
        this.soundNote(obj, obj.left - 24, 2000, leftVelocity, 0);
        this.soundNote(obj, obj.left - 12, 2000, leftVelocity, 0);        
        this.soundNote(obj, obj.left - 24, 2000, leftVelocity, oneHalf * 1000);
        this.soundNote(obj, obj.left - 12, 2000, leftVelocity, oneHalf * 1000);        
      }
      if (onRightSound) {
        obj.chord.forEach((n) => {
          this.soundNote(obj, n, 2000, 0.7, 0);
          this.soundNote(obj, n, 2000, 0.7, one * 1000);
        });
      }    
    } else if (obj.type === 4) {
      // 2박자
      if (onLeftSound) {
        this.soundNote(obj, obj.left - 24, 2000, leftVelocity, 0);
        this.soundNote(obj, obj.left - 12, 2000, leftVelocity, 0);        
        this.soundNote(obj, obj.left - 24, 2000, leftVelocity, one * 1000);
        this.soundNote(obj, obj.left - 12, 2000, leftVelocity, one * 1000);        
      }
      if (onRightSound) {
        obj.chord.forEach((n) => {
          this.soundNote(obj, n, 2000, 0.7, 0);
          this.soundNote(obj, n, 2000, 0.7, one * 1000);
        });
      }    
    } else if (obj.type === 5) {
      // 2박자
      if (onLeftSound) {
        this.soundNote(obj, obj.left - 12, 2000, leftVelocity, 0);        
        this.soundNote(obj, obj.left, 2000, 1.0, 0);        
      }
      if (onRightSound) {
        obj.chord.forEach((n) => {
          this.soundNote(obj, n, 2000, 0.7, one * 1000);
        });
      }    
    } else if (obj.type === 6) {
      // 2박자
      if (onLeftSound) {
        this.soundNote(obj, obj.chord[0] - 12, 2000, 0.7, 0);
        this.soundNote(obj, obj.chord[1] - 12, 2000, 0.7, half * 1000);
        this.soundNote(obj, obj.chord[2] - 12, 2000, 0.7, one * 1000);
        this.soundNote(obj, obj.chord[1] - 12, 2000, 0.7, oneHalf * 1000);
      }
      if (onRightSound) {
        obj.chord.forEach((n) => {
          this.soundNote(obj, n, 2000, 0.7, 0);
        });
      }    
    } else if (obj.type === 7) {
      // 2박자
      if (onLeftSound) {
        this.soundNote(obj, obj.chord[0] - 12, 2000, 0.7, 0);
        this.soundNote(obj, obj.chord[1] - 12, 2000, 0.7, half * 1000);
        this.soundNote(obj, obj.chord[2] - 12, 2000, 0.7, half * 1000);
        this.soundNote(obj, obj.chord[1] - 12, 2000, 0.7, one * 1000);
        this.soundNote(obj, obj.chord[2] - 12, 2000, 0.7, one * 1000);
        this.soundNote(obj, obj.chord[1] - 12, 2000, 0.7, oneHalf * 1000);
        this.soundNote(obj, obj.chord[2] - 12, 2000, 0.7, oneHalf * 1000);
      }
      if (onRightSound) {
        obj.chord.forEach((n) => {
          this.soundNote(obj, n, 2000, 0.7, 0);
        });     
      }    
    } else if (obj.type === 8) {
      // 2박자
      if (onLeftSound) {
        this.soundNote(obj, obj.chord[0] - 12, 2000, 0.7, 0);
        this.soundNote(obj, obj.chord[1] - 12, 2000, 0.7, quarter * 1000);
        this.soundNote(obj, obj.chord[2] - 12, 2000, 0.7, half * 1000);
        this.soundNote(obj, obj.chord[1] - 12, 2000, 0.7, (half + quarter) * 1000);
        this.soundNote(obj, obj.chord[2] - 12, 2000, 0.7, one * 1000);
        this.soundNote(obj, obj.chord[0] - 12, 2000, 0.7, (one + quarter) * 1000);
        this.soundNote(obj, obj.chord[1] - 12, 2000, 0.7, oneHalf * 1000);
        this.soundNote(obj, obj.chord[2] - 12, 2000, 0.7, (oneHalf + quarter) * 1000);
      }
      if (onRightSound) {
        obj.chord.forEach((n) => {
          this.soundNote(obj, n, 2000, 0.7, 0);
        });   
      }    
    } else if (obj.type === 9) {
      // 2박자
      if (onLeftSound) {
        this.soundNote(obj, obj.left - 24, 2000, leftVelocity, 0);
        this.soundNote(obj, obj.left - 12, 2000, leftVelocity, 0);        
        this.soundNote(obj, obj.left - 24, 2000, leftVelocity, half * 1000);
        this.soundNote(obj, obj.left - 12, 2000, leftVelocity, half * 1000);        
      }
      if (onRightSound) {
        obj.chord.forEach((n) => {
          this.soundNote(obj, n, 2000, 0.7, 0);
          this.soundNote(obj, n, 2000, 0.7, one * 1000);
        });    
      }    
    } else if (obj.type === 10) {
      // 2박자
      if (onLeftSound) {
        // this.soundNote(obj, obj.left - 24, 2000, leftVelocity, 0);
        // this.soundNote(obj, obj.left - 12, 2000, leftVelocity, 0);        
        // this.soundNote(obj, obj.left - 24, 2000, leftVelocity, one * 1000);
        // this.soundNote(obj, obj.left - 12, 2000, leftVelocity, one * 1000);  
        this.soundNote(obj, obj.chord[0] - 12, 2000, 0.7, 0 * half * 1000);
        this.soundNote(obj, obj.chord[2] - 12, 2000, 0.7, 1 * half * 1000);
        this.soundNote(obj, obj.chord[1] - 12, 2000, 0.7, 2 * half * 1000);
        this.soundNote(obj, obj.chord[0] - 12, 2000, 0.7, 3 * half * 1000);      
      }
      if (onRightSound) {
        obj.chord.forEach((n, index) => {
          this.soundNote(obj, n, 2000, 0.7, index * half * 1000);
        });         
      }    
    } else if (obj.type === 10) {
      // 1박 쉼.
    }  
  }
  resetTimeout() {
    this.timeoutArr.forEach((v) => {
      clearTimeout(v)
    })
    this.timeoutArr = [];    
  }
}

class PlayChord {
  constructor(newNotes, myMidi) {
    this.myMidi = myMidi;

    this.stopFlag = false;
    this.newNotes = newNotes;

    this.index = -1;
  }
  stop() {
    playButton.stopped();
    this.stopFlag = true;
  }
  resume() {
    this.stopFlag = false;
    console.log('this.index', this.index, this.newNotes);
    if (this.newNotes.length <= this.index + 1) {
      this.play(0);
    } else {
      this.play(this.index + 1);
    }
  }
  play(index) {
    playButton.playing();

    return new Promise((resolve, reject) => {
      this.recursiveFn(index).then((newIndex) => {
        this.play(newIndex).then(resolve).catch(reject);
      }).catch((e) => {
        reject(e);
      });
    });
  }
  recursiveFn(index) {
    this.index = index;
    return new Promise((resolve, reject) => {
      try {
        // console.log('recursiveFn', index, this.newNotes[index].original, this.newNotes[index].chord, _convertArr(this.newNotes[index].chord));
        // $('#note').html(`(${this.newNotes[index].original}) ${_convert(this.newNotes[index].baseIndex)}  -    ${_convertArr(this.newNotes[index].chord)}`);
        if (this.stopFlag) {
          this.endIcon();
          reject('End1');
        }      
        $(`.major`).removeClass('selected');
        $(`.minor`).removeClass('selected');
        if (this.newNotes[index].time === 1) {
          setTimeout(() => {
            $(`.major`).removeClass('selected');
            $(`.minor`).removeClass('selected');
          }, half * 900);        
          setTimeout(() => {
            $(`.major`).removeClass('selected');
            $(`.minor`).removeClass('selected');
          }, one * 900);        
        } else if (this.newNotes[index].time === 2) {
          setTimeout(() => {
            $(`.major`).removeClass('selected');
            $(`.minor`).removeClass('selected');
          }, half * 900);          
          setTimeout(() => {
            $(`.major`).removeClass('selected');
            $(`.minor`).removeClass('selected');
          }, one * 900);
          setTimeout(() => {
            $(`.major`).removeClass('selected');
            $(`.minor`).removeClass('selected');
          }, oneHalf * 900);
          setTimeout(() => {
            $(`.major`).removeClass('selected');
            $(`.minor`).removeClass('selected');
          }, two * 900);        
        }      
        this.myMidi.sound(this.newNotes[index]);
      } catch(e) {
        console.log(e);
        reject(e.message);
      }
      setTimeout(() => {
        if (this.stopFlag) {
          this.endIcon();
          reject('End2');
        }
        if (index + 1 === this.newNotes.length) {
          this.endIcon();
          reject('End3');
          // resolve(0);
        }
        resolve(index + 1);
      }, this.newNotes[index].time * one * 1000);
    });
  }
  endIcon() {
    playButton.stopped();     
  }
}