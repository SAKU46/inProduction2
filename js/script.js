jQuery(function () {

  // ハンバーガーボタン
  jQuery(".hamburger-btn").click(function () {
    jQuery(".bar").toggleClass("cross");
    jQuery('.hamburger-btn__musk').fadeToggle(300);
    jQuery(".slide-nav").toggleClass("slide");
    jQuery(".slide-nav").animate({ scrollTop:0}, '1');
  });
});

