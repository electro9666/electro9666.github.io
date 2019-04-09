  const searchNode = (seq, storeArr) => {
    storeArr.push(seq);
    const $node0 = $('.gNode').eq(seq);
    const node0 = $node0.data('source');
    if (node0.linkIndexList) {
      node0.linkIndexList.forEach((num) => {
        $('.link' + num).css('opacity', 1);
        const $link = $('.link').eq(num);
        const link0 = $link.data('source');
        if (node0.id === link0.sourceId) {
          if (storeArr.indexOf(link0.targetObj.seq) === -1) {
            searchNode(link0.targetObj.seq, storeArr);
          } else {
          }
        } else {
          if (storeArr.indexOf(link0.sourceObj.seq) === -1) {
            searchNode(link0.sourceObj.seq, storeArr);
          } else {
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

$(document).ready(() => {
  $('.radio1').click(function(e) {
    if ($('.radio1:checked').val() === 'click') {
      $('.gNode').off();
      $('.gNode').on('click', function() {
        $('.link').css('opacity', 0.1);
        const startNode = this;
        const seq = parseInt($(startNode).attr('seq'));
        searchNode(seq, []);
      });
      $('.link').off();
      $('.link').on('click', function() {
        $('.link').css('opacity', 0.1);
        const startLink = this;
        const source = $(startLink).data('source');
        $('.originNum' + source.originNum).css('opacity', 1);
      });
    } else {
      $('.gNode').off();
      $('.gNode').on('mouseover', function() {
        $('.link').css('opacity', 0.1);
        const startNode = this;
        const seq = parseInt($(startNode).attr('seq'));
        searchNode(seq, []);
      });
      $('.gNode').on('mouseout', function() {
        $('.link').css('opacity', 0.4);
      });
      $('.link').off();
      $('.link').on('mouseover', function() {
        $('.link').css('opacity', 0.1);
        const startLink = this;
        const source = $(startLink).data('source');
        $('.originNum' + source.originNum).css('opacity', 1);
      });
      $('.link').on('mouseout', function() {
        $('.link').css('opacity', 0.4);
      });
    }
  });
  if (detectmob()) {
    // mobile
    $('.radio1').eq(1).trigger('click');
  } else {
    // pc
    $('.radio1').eq(0).trigger('click');
  }  
})