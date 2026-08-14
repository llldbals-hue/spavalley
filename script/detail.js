$(function () {

  $(".dropdown-bg").css({
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 1,
    width: "100%",
    height: 0,
    backgroundColor: "#fff",
    borderTop: "1px solid #eee",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)"
  });

  $(".submenu").hide();

  $(".gnb").mouseenter(function () {
    $(".dropdown-bg")
      .stop()
      .animate({ height: "250px" }, 250);

    $(".submenu")
      .stop()
      .fadeIn(200);
  });

  $("header").mouseleave(function () {
    $(".dropdown-bg")
      .stop()
      .animate({ height: 0 }, 250);

    $(".submenu")
      .stop()
      .fadeOut(200);
  });

  // 햄버거 사이드 메뉴
  $(".menu_btn").click(function () {
    $(".m_menu").addClass("on");
    $("body").css("overflow", "hidden");
  });

  $(".m_menu .close").click(function () {
    $(".m_menu").removeClass("on");
    $("body").css("overflow", "");
  });

  $(".lang-current").click(function (e) {
    e.stopPropagation();
    $(this).siblings(".lang-list").toggle();
  });

  $(".lang-list button").click(function (e) {
    e.stopPropagation();
    $(this).closest(".lang-dropdown").find(".lang-current span").text($(this).text());
    $(this).closest(".lang-list").hide();
  });

  $(document).click(function () {
    $(".lang-list").hide();
  });

  // 스크롤탑 버튼
  $(window).on('scroll', function () {
    let w_p = $(window).scrollTop();

    if (w_p > 100) {
      $(".topbtn").stop().fadeIn();
    } else {
      $('.topbtn').stop().fadeOut();
    }
  });

  $(".topbtn").on('click', function () {
    $(window).scrollTop(0);
  });

  // 슬라이드

  const detailSwiper = new Swiper(".detail-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,

    /* 가로 위치 이동 대신 이미지를 겹쳐 전환해 loop 보정 흔들림 최소화 */
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    pagination: {
      el: ".detail-swiper .swiper-pagination",
      clickable: true,
    },

    /* 자동 전환하고 사용자 조작 후에도 자동 재생 유지 */
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    /* 마지막 슬라이드 다음에 첫 슬라이드가 자연스럽게 이어지도록 처리 */
    loop: true,

    /* 컨테이너 및 화면 크기 변경 감지 */
    resizeObserver: true,
    updateOnWindowResize: true,

    /* 리사이즈 중 정수 픽셀로 튀는 현상을 막기 위해 소수점 너비 유지 */
    roundLengths: false,

    /* 슬라이드 수가 적을 때 불필요한 작동 방지 */
    watchOverflow: true,

    /* 화면 크기가 바뀌는 동안 기존 전환 애니메이션이 섞이지 않게 처리 */
    on: {
      beforeResize(swiper) {
        swiper.setTransition(0);
      },
    },
  });

  /////////////////// 종료 //////////////////
});
