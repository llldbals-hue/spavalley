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

  // 필터부분

  $("main .but .entire").addClass("active");

  $("main .but > div").click(function () {
    const $button = $(this);
    const filter = $button.hasClass("outdoor")
      ? "outdoor"
      : $button.hasClass("indoor")
        ? "indoor"
        : "all";

    $button.addClass("active").siblings().removeClass("active");

    if (filter === "all") {
      $(".attraction .card").show();
    } else {
      $(".attraction .card").hide();
      $(`.attraction .card[data-location="${filter}"]`).show();
    }
  });


 /////////////////// 종료 //////////////////
});
