
/**
 *  Cs Ds    Fs Gs As
 * C  D  E  F  G  A  B
 */
var normalList = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
var _octaveAdd = 0;
var _setOctaveReset = ($elem) => {
  _setOctaveAdd(-_octaveAdd, $elem);
}
var _setOctaveAdd = (add, $elem) => {
  _octaveAdd = _octaveAdd + add;
  var $labels = $elem.find('.badge.chordunit').each((index, elem) => {
    var label_name = $(elem).html();
    var label_name2 = label_name;
    // console.log('label_name', label_name);
    var first = '';
    if (label_name.startsWith('!') || label_name.startsWith('^') || label_name.startsWith('*')) {
      first = label_name[0];
      label_name2 = label_name.substring(1);
    }
    var arr = label_name2.split('/');
    var arr2 = arr.map((v) => {
      var remain = v;
      var last = ''
      if (1 < v.length && v[1] === '#') {
        remain = v.substring(0, 2);
        last = v.substring(2);
      } else {
        remain = v[0];
        last = v.substring(1);
      }
      var iii = normalList.indexOf(remain);
      var iii2 = iii + add
      if (iii2 < 0) iii2 = normalList.length + iii2;
      var newRemain = normalList[(iii2) % normalList.length];
      // console.log(v, remain, last);
      // console.log(v, `${newRemain}${last}`);
      return `${newRemain}${last}`;
    });
    var newResult = first + arr2[0];
    if (arr2.length === 2) {
      newResult = first + arr2[0] + '/' + arr2[1];
    }
    // console.log(label_name, newResult);
    $(elem).html(newResult);
  });
}
const total_list = [
  'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A1', 'A#1', 'B1',
  'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
  'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7', 'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7'
];
const _convertIndex = (noteIndex, add) => {
  if (!add) {
    add = 0;
  }  
  return noteIndex + add + _octaveAdd;
}
const _convert = (noteIndex, add) => {
  if (!add) {
    add = 0;
  }    
  return total_list[_convertIndex(noteIndex, add)];
}
const _convertArr = (arr) => {
  var arr2 = arr.map((v) => {
    return total_list[_convertIndex(v, 0)];
  });
  return arr2;
}

class ChordManager {
  constructor(baseNote, baseOctave) {
    if (!baseNote || !baseOctave) {
      throw new Error('if (!baseNote || !baseOctave) {');
    }
    this.baseNote = baseNote;
    this.baseOctave = baseOctave;

    var baseIndex = total_list.indexOf(baseNote + baseOctave);
    this.baseIndexObj = {};
    for (let i = 0; i < 12; i++) {
      const element = total_list[baseIndex + i];
      if (element.length === 2) {
        this.baseIndexObj[element[0]] = element[1];
      } else if (element.length === 3) {
        this.baseIndexObj[element.substring(0,2)] = element.substring(2);
      } else {
        throw new Error('for (let i = 0; i < 12; i++) {');
      }
    }
    console.log('this.baseIndexObj', this.baseIndexObj);
  }
  getIndex2(note) {
    var left = note[0] + this.baseIndexObj[note[0]];
    if (1 < note.length && note[1] === '#') {
      left = note.substring(0, 2) + this.baseIndexObj[note.substring(0, 2)];
    } 
    // console.log(left, 'index', total_list.indexOf(left))
    return total_list.indexOf(left);
  }
  collectChord (baseIndex, ...arr) {
    let octaveAdd2 = 0;
    var result = [];
    arr.forEach((v) => {
      result.push(baseIndex + v - 1);
    });
    return result;
  }  
// return chord after generator
  _generateChord (note, index) {
    note = note.trim();
    if (!note) {
      throw new Error('if (!note) {');
    };

    // if (!isNaN(note[0])) { // 숫자라면
    //   octaveAdd = parseInt(note[0]);
    //   note = note.substring(1);
    // }
    
    // 기본 2박(딴 따단)
    let result = {index, original:note, type: 2, time: 2, left: '', chord: []};
    if (note.startsWith('@')) { // 1박 쉼.
      result.type = 10;
      result.time = 1;
      return result;
    }
    if (note.startsWith('^')) { // 1박으로 구성(딴)
      result.type = 1;
      result.time = 1;
      note = note.substring(1);
    }
    if (note.startsWith('*')) { // 1박으로 구성(따단)
      result.type = 3;
      result.time = 1;
      note = note.substring(1);
    }
    if (note.startsWith('!')) { // 2박으로 구성(딴 딴)
      result.type = 4;
      result.time = 2;
      note = note.substring(1);
    }
    let left = null;
    if (note.indexOf('/') !== -1) { // D/G# 과 같이 악보에 나오는 경우
      const arr = note.split('/');
      note = arr[0].trim();
      left = arr[1].trim();
    }

    // change mode
    // if (result.time === 2) {
    //   result.type = 5; // 2박(단 딴)
    // }
    // if (result.time === 2) {
    //   result.type = 6; // 2박 (왼손 도미솔)
    // }
    // if (result.time === 2) {
    //   result.type = 7; // 2박
    // }
    // if (result.time === 2) {
    //   result.type = 8; // 2박 (왼손 도미솔 빠르게)
    // }
    // if (result.time === 2) {
    //   result.type = 4; // 2박
    // }

    // 1. baseIndex 찾기
    var baseIndex = this.getIndex2(note);
    result.baseIndex = baseIndex;
    // left
    result.left = this.getIndex2(note);
    if (left) {
      result.left = this.getIndex2(left);
    }
    // console.log('note, baseIndex, result', note, baseIndex, result);
    /**
     * A - A
     *     A7
     *     AM7
     *     Am - Am7
     *     Asus4 - A7sus4
     *     A# - A#7
     *     A#m - A#m7
     *     Adim
     */  
    // 2. chord 찾기
    var nnnn = note.substring(1);
    if (note.length === 2 && note[1] === '#') {
      // G#
      nnnn = '';
    } else if (2 < note.length && note[1] === '#') {
      // G#sus4
      nnnn = note.substring(2);
    }
    switch(nnnn){
      case '':
        // A
        result.chord = this.collectChord(baseIndex, 1, 5, 8);
        break;
      case '2': // add2 와 같음
        // A2
        result.chord = this.collectChord(baseIndex, 1, 5, 8, 3);
        break;
      case '6':
        result.chord = this.collectChord(baseIndex, 1, 5, 8, 10);
        break;
      case '7':
        // A7
        result.chord = this.collectChord(baseIndex, 1, 5, 8, 11);
        break;
      case '9': // add9
        result.chord = this.collectChord(baseIndex, 1, 5, 8, 15);
        break;
      case 'M7':
        result.chord = this.collectChord(baseIndex, 1, 5, 8, 12);
        break;
      case 'm':
        result.chord = this.collectChord(baseIndex, 1, 4, 8);
        break;
      case 'm6':
        result.chord = this.collectChord(baseIndex, 1, 4, 8, 10);
        break;
      case 'm7':
        result.chord = this.collectChord(baseIndex, 1, 4, 8, 11);
        break;
      case 'sus2':
        result.chord = this.collectChord(baseIndex, 1, 3, 8);
        break;        
      case 'sus4':
        result.chord = this.collectChord(baseIndex, 1, 6, 8);
        break;
      case '7sus4':
        result.chord = this.collectChord(baseIndex, 1, 6, 8, 11);
        break;    
      case '9sus4':
        result.chord = this.collectChord(baseIndex, 1, 6, 8, 11, 15);
        break;    
      case 'aug':
        result.chord = this.collectChord(baseIndex, 1, 4, 9);
        break;
      case 'dim':
        result.chord = this.collectChord(baseIndex, 1, 4, 7);
        break;
      default:
        // console.log('result', result);
        alert('invalid note:' + note);
        throw new Error('invalid note:' + note);
        // document.getElementById('error').innerHTML = 'not match, note: ' + note + ', ' + note.substring(1);
        break;
    }
    return result;
  }  
}
