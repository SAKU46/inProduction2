$(function () {

  // ハンバーガーボタン
  $(".hamburger-btn").click(function () {
    var heroHeight = $('.hero-area__musk').height();
    $(".bar").toggleClass("cross");
    $('.hamburger-btn__musk').fadeToggle(300);
    $(".slide-nav").toggleClass("slide");
    $("body").toggleClass("stop");
    
    if ($(window).scrollTop() < heroHeight) {
      $(".header__left--text").toggleClass("black");
      $(".bar").toggleClass("black");
      $(".hamburger-btn__text").toggleClass("black");
    }
  });
  
  // スライドイン（company）
  $(window).on('scroll', function () {
    var historyHeight = $('.company__image--history').offset().top;
    var profileHeight = $('.company__image--profile').offset().top;
    var recruitHeight = $('.company__image--recruit').offset().top;
    if ($(window).scrollTop() > historyHeight - 450) {
      $(".company__image--history").addClass("slide");
    }
    if ($(window).scrollTop() > profileHeight - 450) {
      $(".company__image--profile").addClass("slide");
    }
    if ($(window).scrollTop() > recruitHeight - 450) {
      $(".company__image--recruit").addClass("slide");
    }

    var heroHeight = $('.hero-area__musk').height();
    if ($(window).scrollTop() > heroHeight) {
      $(".header__left--text").addClass("black");
      $(".header__nav--item").addClass("black");
      $(".bar").addClass("black");
      $(".hamburger-btn__text").addClass("black");
    } else {
      $(".header__left--text").removeClass("black");
      $(".header__nav--item").removeClass("black");
      $(".bar").removeClass("black");
      $(".hamburger-btn__text").removeClass("black");
    }

    // スライドイン（works）
    var imageHeight1 = $('.works__box--image1').offset().top;
    var imageHeight2 = $('.works__box--image2').offset().top;
    var imageHeight3 = $('.works__box--image3').offset().top;
    
    // 付ける
    if ($(window).scrollTop() > imageHeight1 - 500) {
      $(".sales-text").addClass("black");
    }
    if ($(window).scrollTop() > imageHeight2 - 500) {
      $(".delivery-text").addClass("black");
    }
    if ($(window).scrollTop() > imageHeight3 - 500) {
      $(".construction-text").addClass("black");
    }

    // 外す（上）
    if ($(window).scrollTop() < imageHeight1 - 500) {
      $(".sales-text").removeClass("black");
    }
    if ($(window).scrollTop() < imageHeight2 - 500) {
      $(".delivery-text").removeClass("black");
    }
    if ($(window).scrollTop() < imageHeight3 - 500) {
      $(".construction-text").removeClass("black");
    }

    // 外す（下）
    if ($(window).scrollTop() > imageHeight1) {
      $(".sales-text").removeClass("black");
    }
    if ($(window).scrollTop() > imageHeight2) {
      $(".delivery-text").removeClass("black");
    }
    if ($(window).scrollTop() > imageHeight3) {
      $(".construction-text").removeClass("black");
    }
  });

    // パララックス
    //各背景画像のtopの位置を取得
    var bg1_top = $("body").offset().top;
    // ウィンドウの高さを取得
    var win_h = $(window).height();
    //各背景画像を動かすタイミングの位置を計算
    var start_bg1 = bg1_top;
  
    $(window).scroll(function () {
      //スクロール量
      var y = $(this).scrollTop();
      y = y - 10;
      //スクロール量と動かすタイミング位置を判定した場合は背景画像を動かす
      if (y >= start_bg1) {
        $('body').css('background-position-y', -(y - bg1_top) * 0.4 + 'px');
      }
    });
});




// Swiper
(function () {
  var elem = document.querySelector(".swiper-container");
  if (elem !== null) { //swiper-containerがあれば…
    var mySwiper = new Swiper(".slider1", {
      loop: true, //ループさせる
      effect: "fade", //フェードのエフェクト
      autoplay: {
        delay: 3500, //４秒後に次の画像へ
        disableOnInteraction: false //ユーザー操作後に自動再生を再開する
      },
      speed: 4500 //２秒かけながら次の画像へ移動

    });
  }
  var elem = document.querySelector(".swiper-container");
  if (elem !== null) { //swiper-containerがあれば…
    var mySwiper = new Swiper(".slider2", {
      loop: true, //ループさせる
      effect: "fade", //フェードのエフェクト
      autoplay: {
        delay: 5500, //４秒後に次の画像へ
        disableOnInteraction: false //ユーザー操作後に自動再生を再開する
      },
      speed: 2500 //２秒かけながら次の画像へ移動

    });
  }
})();


// AOS
AOS.init({
  duration: 700,
});