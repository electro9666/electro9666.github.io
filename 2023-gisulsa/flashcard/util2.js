var scoreRepository = []; // key-value map

function loadScoreRepository() {
  scoreRepository = JSON.parse(window.localStorage.getItem('score')) || [];
  console.log('scoreRepository', scoreRepository);

}
function saveScoreRepository(params) {
  window.localStorage.setItem('score', JSON.stringify(params));
}
function resetScoreRepository() {
  window.localStorage.removeItem('score');
}

function getKey(obj) {
  return `${obj.x}-${obj.y}`;
}

function getStoredPos(name, pos) {
  for (let i = 0, len = scoreRepository.length; i < len; i++) {
    if (scoreRepository[i].name === name) {

      for (let j = 0, len2 = scoreRepository[i].list.length; j < len2; j++) {
        var pos2 = scoreRepository[i].list[j];
        if (pos.x === pos2.x && pos.y === pos2.y) {
          return pos2;
        }
      }
    }
  }
  return null;
}
function initTestScore(cropsList) {
  cropsList.forEach(obj => {
    var name = obj.name;
    var list = obj.list;

    // cropsList에 respository 반영하기

    list.forEach(pos => {
      var result = getStoredPos(name, pos);
      if (result) {
        pos.score = result.score;
        pos.used = result.used;
      } else {
        pos.score = 0;
        pos.used = false;
      }

      summaryFn(obj);
    });
  });

  cropsList.forEach(obj => {
    var name = obj.name;
    var list = obj.list;

    var activePos = null;
    list.forEach(pos => {
      if (pos.used === false) {
        activePos = pos;
      }
    });
    if (activePos === null) {
      var min = 99999;
      list.forEach(pos => {
        if (pos.score <= min) {
          min = pos.score;
          activePos = pos;
        }
      });
    }

    list.forEach(pos => {
      pos.active = false;
    });
    activePos.active = true;
  });


  saveScoreRepository(cropsList);
  return cropsList;
}

function summaryFn(obj) {
  var sum = 0;
  var usedCount = 0;
  var notUsedCount = 0;
  obj.list.forEach(pos => {
    sum += pos.score;
    if (pos.used) {
      usedCount++;
    } else {
      notUsedCount++;
    }
  });

  obj.summary = `점수:${sum} / 총${obj.list.length}개 / ${notUsedCount}개 미확인 / ${usedCount}개 확인`;
}
function updateScore(cropsList, obj, isYes) {
  var filterList = obj.list.filter(pos => pos.active);
  if (filterList.length === 1) {
    filterList[0].used = true;
    if (isYes) {
      filterList[0].score++;
    } else {
      filterList[0].score--;
    }
  } else {
    console.warn('active invalid', filterList.length);
  }

  summaryFn(obj);
  console.log('obj', obj);
  saveScoreRepository(cropsList);
}
