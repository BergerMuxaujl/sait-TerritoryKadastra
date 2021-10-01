$(document).ready(function () {
    //!SLIDERS
    $(".command-slider").slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      variableWidth: true,
      prevArrow: $('.command-content .arrow_wrap .prev'),
      nextArrow: $('.command-content .arrow_wrap .next'),
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".slider-docs").slick({
      infinite: false,
      arrows: true,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      variableWidth: true,
      prevArrow: $('.docs-content .arrow_wrap .prev'),
      nextArrow: $('.docs-content .arrow_wrap .next'),
      responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".slider-reviews").slick({
      infinite: false,
      arrows: true,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      variableWidth: true,
      prevArrow: $('.reviews-content .arrow_wrap .prev'),
      nextArrow: $('.reviews-content .arrow_wrap .next'),
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    //!FANCYBOX
    $('.reviews-videos').fancybox({
      mobile : {
        clickContent : "close",
        clickSlide : "close",
        animationEffect: false,
        }
    });
    $('[data-fancybox]').fancybox({
      mobile : {
      clickContent : "close",
      clickSlide : "close",
      animationEffect: false,
      backFocus: false,
      },
      animationDuration: 300
      
});
    //! POPUP ///
    //? Появление //
    $(".button1").on("click", function () {
      $("body").css("overflow-y", "hidden"); //для фикса скрола
      $(".popup1").css("display", "flex");
      $(".popup1").animate({ opacity: 1 }, 200);
    });

    //? Исчезание
    $(".popup1").on("click", function (e) {
      if ( ($(e.target).hasClass("popup1"))||($(e.target).hasClass("order-close__img")) ) { // объекты-тригеры на закрытие Popup
        $("body").css("overflow-y", "visible"); //для возобновления скрола
        $(".popup1").animate({ opacity: 0 }, 200, function () {
          $(".popup1").css("display", "none");;
        });
      }
    });
    //////////!

    //! MASKA ////
      $(".form-main__phone, .order-form__phone").mask("+7(999)999-99-99");
    //////////!


    // ! JQUERY.LAZY + SCROLL LOAD MAP //
    $(function() {
      $('.foto').lazy({
        threshold: 1000,
        onFinishedAll: function(element) { //загрузка скроллбара
          $(".foto-scroll").mCustomScrollbar({
            axis:"x",
            theme:"my-theme",
            autoDraggerLength: false,
          });
      }
      });
    });

    // ! JQUERY.LAZY на слайдерах
    $(function() {
      instance = $('.doc__img').lazy({
          chainable: false,
          threshold: 1000,
          afterLoad: function(element) { //загрузка скроллбара
            $('.slider-docs').slick('setPosition');
            instance.loadAll(); //загрузка фоток со всего слайдера
        }
      });
    });
  // ! /////////////////

})

