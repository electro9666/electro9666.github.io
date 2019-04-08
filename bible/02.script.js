  var width = 2000;
  var height = 4000;
  
  var svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
    ;
  var container = svg.append('g');

  // link
  // container.selectAll('line')
  //   .data(link)
  //   .enter()
  //   .append('line')
  //   .attr('x1', function (d) { return d.sourceObj.x })
  //   .attr('y1', function (d) { return d.sourceObj.y })
  //   .attr('x2', function (d) { return d.targetObj.x })
  //   .attr('y2', function (d) { return d.targetObj.y })
  //   .style('stroke', 'blue');
  container.selectAll('path')
    .data(link)
    .enter()
    .append('path')
    .attr('class', function(d, index) {
      // console.log(d);
      return `line-stroke link link${index}`;
    })
    .attr('seq', function(d, index) {
      return index;
    })
    .attr('d', function(d) {
      return d.pathArr;
    })
    .attr('stroke', function(d) {
      return d.color;
    })
    ;

  // node
  var g = container.selectAll('g')
    .data(node)
    .enter()
    .append('g')
    .attr('class', 'gNode')
    .attr('seq', function(d) {
      return d.seq;
    })
    ;
  g.append('rect')
    .attr('class', 'node')
    .attr('x', function (d) {
      return d.x
    })
    .attr('y', function (d) {
      return d.y;
    })
    .attr('width', 10)
    .attr('height', function (d) {
      return d.height;
    })
    .attr('fill', function (d) {
      return d.color;
    })

  g.append('text')
    .attr('dx', function (d) {
      // if (d.book === 0 || d.book === 1) {
      //   return d.x + 20;
      // } else if (d.book === 2 || d.book === 3) {
      //   return d.x - 10;
      // }      
      return d.x + 20;
    })
    .attr('dy', function (d) {
      return d.y + 15;
    })
    .text(function (d) {
      return `${d.desc}`;
    })
    .attr('text-anchor', function(d) {
      // if (d.book === 0 || d.book === 1) {
      //   return 'start';
      // } else if (d.book === 2 || d.book === 3) {
      //   return 'end';
      // }
      return 'start';
    }); // start, middle, end


  // start
  g.append('text')
    .attr('class', 'chapter')
    .attr('dx', function (d) {
      return d.x - 5;
    })
    .attr('dy', function (d) {
      return d.y + 11;
    })
    .text(function (d) {
      if (d.start === 1) {
        if (d.end - d.start < 4) {
          if (d.end === d.start) {
            return `${d.chapter}:${d.start}`;  
          } else {
            return `${d.chapter}:${d.start}-${d.end}`;  
          }
        }else {
          return `${d.chapter}:${d.start}`;
        }
      } else {
        if (d.end - d.start < 4) {
          if (d.end === d.start) {
            return `${d.chapter}:${d.start}`;
          } else {
            return `${d.chapter}:${d.start}-${d.end}`;
          }
        } else {
          return `${d.chapter}:${d.start}`;
        }
      }
    })
    .attr('text-anchor', function(d) {
      return 'end';
    }); // start, middle, end

  // end
  g.append('text')
    .attr('class', 'chapter')
    .attr('dx', function (d) {
      return d.x - 5;
    })
    .attr('dy', function (d) {
      return d.y + d.height + 1;
    })
    .text(function (d) {
      if (d.end - d.start < 4) {
        return ``;
      } else {
        return `${d.chapter}:${d.end}`;
      }
    })
    .attr('text-anchor', function(d) {
      return 'end';
    }); // sta    

  const searchNode = (seq, storeArr) => {
    storeArr.push(seq);
    const node0 = node[seq];
    console.log('node0.linkIndexList', node0.linkIndexList);
    if (node0.linkIndexList) {
      node0.linkIndexList.forEach((num) => {
        $('.link' + num).css('opacity', 1);
        const link0 = link[num];
        if (node0.id === link0.sourceId) {
          if (storeArr.indexOf(link0.targetObj.seq) === -1) {
            console.log('1');
            searchNode(link0.targetObj.seq, storeArr);
          } else {
            console.log('중복1');
          }
        } else {
          if (storeArr.indexOf(link0.sourceObj.seq) === -1) {
            console.log('2');
            searchNode(link0.sourceObj.seq, storeArr);
          } else {
            console.log('중복2');
          }
        }
      })
    }
  }

  function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)){
       return true;
    } else {
      return false;
    }
  }
  if (detectmob()) {
    // mobile
    $('.gNode').on('click', function() {
      $('.link').css('opacity', 0.1);
      const startNode = this;
      const seq = parseInt($(startNode).attr('seq'));
      searchNode(seq, []);
    });
    $('.link').on('click', function() {
      $('.link').css('opacity', 0.1);
      const startLink = this;
      const seq = parseInt($(startLink).attr('seq'));
      searchNode(link[seq].sourceObj.seq, []);
      searchNode(link[seq].targetObj.seq, []);
    });
  } else {
    // pc
    $('.gNode').on('mouseover', function() {
      $('.link').css('opacity', 0.1);
      const startNode = this;
      const seq = parseInt($(startNode).attr('seq'));
      searchNode(seq, []);
    });
    $('.gNode').on('mouseout', function() {
      $('.link').css('opacity', 0.4);
    });
    $('.link').on('mouseover', function() {
      $('.link').css('opacity', 0.1);
      const startLink = this;
      const seq = parseInt($(startLink).attr('seq'));
      searchNode(link[seq].sourceObj.seq, []);
      searchNode(link[seq].targetObj.seq, []);
    });
    $('.link').on('mouseout', function() {
      $('.link').css('opacity', 0.4);
    });
  }