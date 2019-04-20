var _play_data = [
  {
    name: 'test',
    speed: 1,
    baseNote: 'C',
    baseOctave: 4,    
    img: '',
    // chord: `A#,B,C/D#,E/F`
    chord: `C,D,E,F`
  },
  {
    name: '하나님의 등불',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,    
    chord: `
    A,Bm7,A/C#,^E/D,*D,C#m7,F#m7,Bm7,D/E,
    A,Bm7,A/C#,^G#m7,*C#7,F#m7,^A/B,*B7,
    Bm7,A/C#,D,D,D/E,D/E,
    A,Bm7,A/C#,A/C#,F#m7,^Em7,*G/A,D,Dm6/F,
    A/E,C#/F,F#m7,F#m7,A/B,B7,D/E,D/E,
    A,Bm7,A/C#,A/C#,F#m7,^Em7,*G/A,D,Dm6/F,
    A,C#/F,F#m7,F#m7,A/B,B7,D/E,D/E,A,A
    `
  },
  {
    name: '기쁨의 날 주시네',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,    
    chord: `
    A,E/G#,F#m7,A/E,D,D/E,A,D/A,
    A,E/G#,F#m7,A/E,D,D/E,A,D/A,
    A,E/G#,F#m7,A/E,D,D/E,A,^D/A,*E/A,
    A,E/G#,F#m7,A/E,D,D/E,A,E/G#,
    F#m7,D,A,E/G#,F#m7,^D,*E,A,E/G#,
    F#m7,D,A,E/G#,F#m7,^D,*D/E,A,A
    `
  },
  {
    name: 'A 당신의 그 섬김이',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    chord: `
    A,A,F#m,F#m,D,D,Esus4,E,
    A,A,D,D,E,E7,A,A,
    A,A,F#m7,F#m7,D,D,Esus4,E,
    A,A,D,D,E,E7,A,A,
    E,E,A,A,D,D,E7,E7,
    A,A,D,Dm/F,A,E,
    A,E,E,A,A,
    D,D,E7,E7,A,A,
    D,Dm/F,Dm/F,A,E,A,A,
    A,E,A,A,A,E,A,A
    `
  },
  {
    name: 'A 하나님의 그늘 아래',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    chord: `
    A,A,E/G#,E/G#,F#m,F#m,C#m,C#m,
    D,E/D,C#m,F#m,Bm,D/A,D/E,E,
    A,A,E/G#,E/G#,F#m,F#m,C#m,C#m,
    D,E/D,C#m,F#m,B7,B7,E,E,
    E,E,A,A,G,^F#sus4,*F#/A#,Bm,D6/A,D/E,E,
    A,A,G,^F#sus4,*F#/A#,Bm,D/E,E,E
    `
  },
  {
    name: 'A 주의 옷자락 만지며',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    chord: `
    A,A,E/G#,E/G#,F#m,F#m,E,E,
    A,A,E/G#,E/G#,F#m,F#m,E,E,
    E9,E9,F#m,F#m,C#m7,C#m7,Em,A,D2,D2,
    Bm,Bm,A/C#,A/C#,D,D,Esus4,Esus4,
    E,E,A,A,E,E,C#m7,C#m7,F#m,F#m,
    D,D,C#m7,F#m7,Bm7,Bm7,Esus4,E,
    A,A,E,E,C#m7,C#m7,F#m,F#m,
    D,D,C#m7,F#m7,Bm,Bm,D/E,D/E,A,A
    `
  },
  {
    name: 'A 예수 나의 좋은 치료자',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    chord: `
    A,E/G#,Em/G,F#7,Bm7,A/C#,D,E,
    DM7,E/D,C#m7,F#m7,Bm7,D/E,A,A,
    A,E7/G#,Em/G,F#7,Bm7,A/C#,D,E,
    D,E/D,C#m7,F#m7,Bm7,D/E,A,D/E,
    A,A/C#,DM7,DM7,C#m7,F#m7,Bm7,E7,
    DM7,E/D,C#m7,F#m7,^Bm7,^A/C#,D,D/E,D/E
    `
  },
  {
    name: 'A 나는 오늘도 가네',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    chord: `
    A,E/G#,F#m7,A/E,^Bm7,*A/C#,D,D/E,E,
    A,E/G#,F#m7,A/E,^Bm7,*A/C#,D,D/E,E,
    Bm7,D/E,A,A,
    A,E/G#,F#m7,A/E,^Bm7,*A/C#,D,D/E,E,
    A,E/G#,F#m7,A/E,^Bm7,*A/C#,D,D/E,E,
    Bm7,D/E,A,Esus4,
    A,A,E,E,F#m7,F#m7,A7,A7,
    D,D,A/C#,A/C#,Bm7,Bm7,Esus4,E,
    A,A,E,E,F#m7,F#m7,A7,A7,
    D,D,A/C#,A/C#,Bm7,D/E,A,A
    `
  }, 
  {
    name: 'A Born Again',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    chord: `
    D,D,A/C#,D,Esus4,E,A/C#,D,Esus4,E,F#m7,C#m7,D,A,
    Bm7,Bm7,Esus4,E,A/C#,D,Esus4,E,A/C#,D,
    Esus4,E,F#m7,C#m7,D,A/C#,Bm7,Bm7,Esus4,E,F#m7,F#m7,
    C#m7,C#m7,D,D/E,A,E/G#,F#m7,F#m7,C#m7,C#m7,
    D,D,Esus4,E,D2,D2,A/C#,A/C#,Bm7,D/E,
    A,A/C#,D2,D2,C#m7,F#m7,Bm7,D/E,
    A
    `
  },
  {
    name: 'A 나는 예배자입니다',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    chord: `A,E/G#,D/F#,A/E,^D,^E,F#m,Esus4,Esus4,
    A,E/G#,D/F#,A/E,D,F#m7,B/D#,^Esus4,^C#m7,
    !D,!E,!F#m,!A/C#,!D,!E,!A,!A/C#,
    D,D,A/C#,F#m7,Bm7,Esus4,A,A`
  },
  {
    name: 'A 주 은혜임을',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    chord: `A,E/G#,F#m,^F#m,*A/E,D,D/E,A,^D/F#,*E/G#,
    A,E/G#,F#m,^F#m,*A/E,D,D/E,A,E7,
    A,E/G#,F#m,^A/E,^A/C#,D,A/C#,Bm7,E7,
    A,E/G#,F#m,A/E,D,E7,A,A`
  },
  {
    name: 'A 주는 완전합니다',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    chord: `
    A,E/G#,F#m7/E,F#m7/E,D,E,A,^Asus4,^A,
    D,E,C#m7,F#m7,Bm7,E,A,D/E,
    A,E/G#,F#m7/E,F#m7/E,D,E,A,^Asus4,^A,
    D,E,C#m7,F#m7,Bm7,E,A,D/E,
    A,E/G#,F#m7,F#m7/E,Bm7,Bm7/A,G,^Esus4,^E7,
    Em6,A,D,A/C#,Bm7,Bm7,Esus4,E7,
    A,E/G#,F#m7,F#m7/E,Bm7,Bm7/A,G,^Esus4,^E7,
    Em6,A,D,A/C#,Bm7,D/E,A,A`
  },  
  {
    name: 'A 주만 의지해',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    chord: `A,A/G,D/F#,Dm/F,A/E,^E/F#,*F#m7,A/B,^Esus4,*E,
    A,A/G,D/F#,Dm/F,A/E,A/E,Esus4,E,
    A,A/G,D/F#,Dm/F,A/E,^E/F#,*F#m7,A/B,^Esus4,*E,
    D,C#/F,F#m7,B/D#,Bm7,Bm7,Esus4,D/E,A,D/E,
    A,E/G#,F#m7,A/E,D,A/C#,Dsus2,Esus4,
    A,E/G#,F#m7,^A/E,*A/C#,D,B/D#,Esus4,Esus4,
    A,E/G#,F#m7,A/E,D2,A/C#,Dsus2,Esus4,
    A,E/G#,F#m7,A9sus4,^D,*A/C#,^Bm7,*E9sus4,A,A`
  },  
  {
    name: 'B 꽃들도',
    speed: 1,
    baseNote: 'A',
    baseOctave: 3,
    img: '',
    chord: `E,A,B,C#m7,A,B7,
    E,^A,*B,E,A,B,C#m7,
    A,B7,E,^E,*E/G#,A,B,
    ^E,*B/D#,C#m7,A,B7,
    E,E/G#,A,B,
    ^E,*B/D#,C#m7,A,B7,E,E`
  },     
  {
    name: 'B밤이나 낮이나',
    speed: 1,
    baseNote: 'F#',
    baseOctave: 3,
    chord: `
    ^F#m7,^F#m7,B7,E,E,^F#m7,^F#m7,B7,C#m7,C#m,
    ^F#m7,^F#m7,^B,*G#7/C,^C#m7,*G#m/B,^A,*E/G#,^F#m7,^F#m7,B7,E,E/G#,
    A,A,E/G#,E/G#,F#m7,A/B,E,E/G#,
    A,B/A,G#m7,C#m7,F#m7,B7,E,E`
  },  
  {
    name: 'C나의 삶의 결이',
    speed: 1,
    baseNote: 'C',
    baseOctave: 4,
    chord: `C,G/B,Am7,C/G,FM7,C/E,Dm7,G,
    C,G/B,Am7,C/G,FM7,C/E,
    ^Dm7,*F/G,C,G/C,C,G/B,Am7,C/G,
    F,C/E,Dm7,G,C,G/B,Am7,C/G,
    F,C/E,^Dm7,*F/C,
    C,C/A#,G/A,A,
    D,A/C#,Bm7,D/A,G,D/F#,
    Em7,A,D,A/C#,Bm7,D/A,
    G,D/F#,^Em7,*G/A,D,D`
  },
  {
    name: 'C다윗의 노래',
    speed: 1,
    baseNote: 'C',
    baseOctave: 4,
    img: '',
    chord: `C,Em7,F,C/E,Dm7,F/G,C,F/C,
    C,Em7,F,C/E,Dm7,F/G,C,F/C,
    C,Em7,F,C/E,Dm7,F/G,C,F/C,
    C,Em7,F,C/E,Dm7,F/G,C,C,
    FM7,E7,Am7,^Dsus4,*D,Dm7,F/G,C,C,
    FM7,E7,Am7,^Dsus4,*D,Dm7,F/G,C,C`
  },
  {
    name: 'C먼저 그 나라와 의를 구하라',
    speed: 1,
    baseNote: 'C',
    baseOctave: 4,
    img: '',
    chord: `C,G/B,F/A,C/G,F,C,F/G,G7,
    C,Em,F,C,F,C,^F/G,*G7,C,
    C,Em,F,C,F,C,G,G7,C,Em,F,C,F,C,Gsus4,C`
  },
  {
    name: 'C사랑하는 나의 아버지',
    speed: 1,
    baseNote: 'C',
    baseOctave: 4,
    img: '',
    chord: `C,CM7,Dm,Dm,Gsus4,G7,
    C,^C,*G7,CM7,A7,Dm,Dm,
    F,G7,C,G7,C,CM7,
    F,^F,*Dm,G,G7,C,G,
    C,CM7,F,^F,*Dm,F,G7,C,C7,
    F,G,Em,Em,F,G,
    C,C7,F,G,E7,Am,
    F,G7,C,G7`
  },  
  {
    name: 'G그가 오신 이유',
    speed: 1,
    baseNote: 'C',
    baseOctave: 4,
    img: '',
    chord: `
    C,D/C,Bm7,Em7,Am7,D7,G,G,
    C,D/C,Bm7,Em7,Am7,D7,G,G,
    C,D/C,Bm7,Em7,Am7,D7,G,G,
    C,D/C,Bm7,Em7,Am7,Am/G,Dsus4,D,
    G,D/F#,C/E,G/D,C,G/B,Am7,^Bsus4,*B7,
    Em7,B7/D#,G/D,A/C#,Am7,G/B,Dsus4,D,
    G,D/F#,C/E,G/D,C,G/B,Am7,^Bsus4,*B7,Em7,B7/D#,
    G/D,A/C#,Am7,G/B,C6,D7,G,G`
  },
  {
    name: 'G 믿음과 삶',
    speed: 1,
    baseNote: 'G',
    baseOctave: 3,
    chord: `
    G,G,A/G,A/G,C/G,C/G,G,D/F#,
    Em7,G/D,C,G/B,Am7,C/G,C/D,C/D,
    G,G,A/G,A/G,C/G,C/G,G,D/F#,
    Em7,G/D,C,G/B,Am7,Am7,C/D,^C/E,*D/F#,
    ^C/G,*G,D/F#,Em7,G/D,C,D/C,Bm7,Em7,
    Am7,C/D,^G,*D/F#,^Em7,*G/D,C,Am7,C/D,^C/E,*D/F#,
    ^C/G,*G,D/F#,Em7,G/D,C,D/C,Bm7,Em7,
    Am7,^F#m7,*B7,^Em7,*D,^C,*G/B,Am7,C/D,G,G
    `
  },
  {
    name: 'G물댄동산',
    speed: 1,
    baseNote: 'C',
    baseOctave: 4,
    img: '',
    chord: `G,D/F#,Em,Em/D,C,G/B,
    Am,D,G,D/F#,Em,Em/D,
    C,Am,D,D,G,D/F#,
    Em,Em/D,C,D,G,G`
  },  
  {
    name: 'E대단한 믿음 없어도',
    speed: 1,
    baseNote: 'C',
    baseOctave: 4,
    img: '',
    chord: `A,A,B7sus4,B7sus4,G#m7,G#m7,C#m7,C#m7,
    F#m7,F#m7,B7sus4,B7sus4,E,E,E,E,
    A,A,B7sus4,B7sus4,G#m7,G#m7,C#m7,C#m7,
    F#m7,F#m7,B7sus4,B7sus4,E,E,E,E,
    AM7,A6,B7sus4,B,E,E,B/E,E,
    AM7,A6,B7sus4,B,E,E,D/E,D/E,
    AM7,AM7,G#7,G#7,C#m7,C#m7,E/F#,F#7,
    F#m7,F#m7,B7sus4,B7sus4,E,E`
  }
]
