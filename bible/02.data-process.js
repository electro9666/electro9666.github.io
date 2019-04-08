// ry: 상대적으로 밀려남
// ay: 절대위치
var changePosition = [
  {id: '1_1_1_8', ry: 600, ay: 0},
  {id: '1_2_1_12', ry: 300, ay: 0},
  {id: '1_14_1_2', ry: 300, ay: 0},

  {id: '3_1_1_18', ry: 500, ay: 0},
  {id: '3_11_1_16', ry: 800, ay: 0},
];

node.forEach((n) => {
  n.ry = 0;
  changePosition.forEach((obj) => {
    if (obj.id === n.id) {
      if (obj.ry !== 0) {
        n.ry = obj.ry;
      }
    }
  });
})


// http://bl.ocks.org/jfreyre/b1882159636cc9e1283a
// var d3Color = d3.scale.linear()
// .interpolate(d3.interpolateHcl)
// .domain([1, 100])
// .range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);

// https://htmlcolorcodes.com/color-chart/material-design-color-chart/
var colorFn = ['#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C', '#FF8A80', '#FF5252', '#FF1744', '#D50000', '#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C', '#FF8A80', '#FF5252', '#FF1744', '#D50000', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F', '#FF80AB', '#FF4081', '#F50057', '#C51162', '#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C', '#FF8A80', '#FF5252', '#FF1744', '#D50000', '#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F', '#FF80AB', '#FF4081', '#F50057', '#C51162', '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C', '#EA80FC', '#E040FB', '#D500F9', '#AA00FF', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#B388FF', '#7C4DFF', '#651FFF', '#6200EA', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#8C9EFF', '#536DFE', '#3D5AFE', '#304FFE', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#80D8FF', '#40C4FF', '#00B0FF', '#0091EA', '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064', '#84FFFF', '#18FFFF', '#00E5FF', '#00B8D4', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#A7FFEB', '#64FFDA', '#1DE9B6', '#00BFA5', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20', '#B9F6CA', '#69F0AE', '#00E676', '#00C853', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#7CB342', '#689F38', '#558B2F', '#33691E', '#CCFF90', '#B2FF59', '#76FF03', '#64DD17', '#E6EE9C', '#DCE775', '#D4E157', '#CDDC39', '#C0CA33', '#AFB42B', '#9E9D24', '#827717', '#F4FF81', '#EEFF41', '#C6FF00', '#AEEA00', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17', '#FFFF8D', '#FFFF00', '#FFEA00', '#FFD600', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00', '#FFE57F', '#FFD740', '#FFC400', '#FFAB00', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100', '#FFD180', '#FFAB40', '#FF9100', '#FF6D00', '#FFAB91', '#FF8A65', '#FF7043', '#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C', '#FF9E80', '#FF6E40', '#FF3D00', '#DD2C00', '#BCAAA4', '#A1887F', '#8D6E63', '#795548', '#6D4C41', '#5D4037', '#4E342E', '#3E2723', '#BDBDBD', '#9E9E9E', '#757575', '#616161', '#424242', '#212121', '#B0BEC5', '#90A4AE', '#78909C', '#607D8B', '#546E7A', '#455A64', '#37474F', '#263238'];

var link = [];
var tArr = [];
originalLink.forEach((obj, index0) => {
  var seq = 0;
  if (obj.k !== '') {
    tArr[seq++] = obj.k.split(',');
  }
  if (obj.t !== '') {
    tArr[seq++] = obj.t.split(',');
  }
  if (obj.n !== '') {
    tArr[seq++] = obj.n.split(',');
  }
  if (obj.j !== '') {
    tArr[seq++] = obj.j.split(',');
  }
  // console.log(tArr);
  for (let i = 0; i < seq; i++) {
    if (i === seq - 1) {
      break;
    }
    tArr[i].forEach((v1, index1) => {
      tArr[i+1].forEach((v2, index2) => {
        link.push({ sourceId: v1, targetId: v2, sourceObj: null, targetObj: null, color: colorFn[(index0 + index0 * 6) % colorFn.length] });
      });
    });
  }
});
// originalLink.forEach((str, index1) => {
//   var arr = str.split(',');
//   var arr2 = [];
//   arr.forEach((node2) => {
//     if (node2 !== '') {
//       arr2.push(node2);
//     }
//   });
//   if (arr2.length < 2) {
//     // alert('arr2.length error. str: ' + str);
//     return;
//   }
//   arr2.forEach((node2, index) => {
//     if (index + 1 === arr2.length) {
//       return;
//     }
//     // link.push({ sourceId: node2, targetId: arr2[index + 1], sourceObj: null, targetObj: null, color: d3Color((index1) % 100) });
//     link.push({ sourceId: node2, targetId: arr2[index + 1], sourceObj: null, targetObj: null, color: colorFn[(index1 + index1 * 6) % colorFn.length] });
//   });
// });
// var link = [
//   { sourceId: 't_1_1_17', targetId: 'n_3_23_38', sourceObj: null, targetObj: null },
//   { sourceId: 't_1_18_25', targetId: 'n_2_1_7', sourceObj: null, targetObj: null },
//   { sourceId: 't_3_1_12', targetId: 'k_1_1_8', sourceObj: null, targetObj: null },
//   { sourceId: 'k_1_1_8', targetId: 'n_3_1_18', sourceObj: null, targetObj: null },
//   { sourceId: 'n_3_1_18', targetId: 'j_1_19_28', sourceObj: null, targetObj: null },
//   { sourceId: 't_3_13_17', targetId: 'k_1_9_11', sourceObj: null, targetObj: null },
//   { sourceId: 'k_1_9_11', targetId: 'n_3_21_22', sourceObj: null, targetObj: null },
// ];

var lineFunction = d3.svg.line()
  .x(function(d) {
    return d.x;
  })
  .y(function(d) {
    return d.y;
  })
  .interpolate('basis');

/**
 * 데이터 전처리
 */
var dx_arr = [450, 50, 950, 1200];
var dy_arr= [50, 50, 50, 50];
var y_space = 4;
node.forEach(function (d, index) {
  d.seq = index;
  d.color = 'gray';
  var height = 10 + (d.end - d.start) * 2; 
  d.height = height;

  d.x = dx_arr[d.book];
  dy_arr[d.book] += d.ry;
  d.y = dy_arr[d.book];
  dy_arr[d.book] += (height + y_space);
});

const collectLinkIndex = (node, linkIndex) => {
  if (!node.linkIndexList) {
    node.linkIndexList = [];
  }
  node.linkIndexList.push(linkIndex);
}
// link에 node 연결하기
link.forEach((l, index) => {
  for (let i = 0; i < node.length; i++) {
    if (l.sourceId === node[i]['id']) {
      l.sourceObj = node[i];
      collectLinkIndex(node[i], index);
      break;
    }
  }
  for (let i = 0; i < node.length; i++) {
    if (l.targetId === node[i]['id']) {
      l.targetObj = node[i];
      collectLinkIndex(node[i], index);
      break;
    }
  }
  if (l.sourceObj === null) {
    alert('link ' + l.sourceId + ' \nsourceObj is null ');
  }
  if (l.targetObj === null) {
    alert('link ' + l.targetId + ' \ntargetObj is null ');
  }

  const pathArr = [];
  const x1 = l.sourceObj.x;
  const y1 = l.sourceObj.y + (l.sourceObj.height / 2);
  const x2 = l.targetObj.x;
  const y2 = l.targetObj.y + (l.targetObj.height / 2);
  const strokeDiff = 0;
  const dx = parseInt(Math.abs(x2 - x1) / 5);
  pathArr.push({x: x1 + 15, y: y1 + strokeDiff});
  pathArr.push({x: x1 + dx, y: y1 + strokeDiff});
  pathArr.push({x: x2 - dx, y: y2 + strokeDiff});
  pathArr.push({x: x2 - 5, y: y2 + strokeDiff});
  l.pathArr = lineFunction(pathArr);  
});

console.log({node});
console.log({link});