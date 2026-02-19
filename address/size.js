window.addEventListener('resize', function() {
  var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  container.style.width = window.innerWidth + 'px';
  container.style.height = window.innerHeight + 'px';
});
var setSize = function() {
  var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  container.style.width = window.innerWidth + 'px';
  container.style.height = window.innerHeight + 'px';
}