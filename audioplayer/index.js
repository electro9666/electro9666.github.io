var $swiperWrapper = document.querySelector('.swiper-wrapper');
_data.forEach((obj) => {
  $swiperWrapper.innerHTML += `
    <div class="swiper-slide" onclick="autoplay('resources/${obj.audio}')" data-audio="resources/${obj.audio}">
      <img class="background" src="resources/${obj.img}">
      <img class="center" src="resources/${obj.img}">
    </div>
  `;
});

var currentAudio = null;

function fullscreenFn() {
  document.documentElement.requestFullscreen()
}


function autoplay(filepath) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  var audio1 = new Audio(filepath);
  currentAudio = audio1;
  audio1.loop = false; // 반복재생하지 않음
  audio1.volume = 1; // 음량 설정
  audio1.play(); // sound1.mp3 재생
}

function audiostop() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
}

var swiper = new Swiper(".mySwiper", {
  loop: true,
  // spaceBetween: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // slideToClickedSlide: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  },
  on: {
    slideChange: function () {
      autoplay(this.slides[this.activeIndex].dataset.audio);
    },
  },
});

// 스택 추가
history.pushState(null, null, location.href);

// 뒤로라기 이벤트감지 -> 현재페이지로 이동
window.onpopstate = function () {
  history.go(1);
}

window.addEventListener('DOMContentLoaded', function () {


});