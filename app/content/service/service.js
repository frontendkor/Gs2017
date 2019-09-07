function serviceScripts() {
  $(document).ready(function () {
    //Slider in the form of "Ipad"
    var sliderIpad = function sliderIpad() {
      var slideNow = 1;
      var slideCount = $('.slider-ipad__items').children().length;
      var navBtnId = 0;
      var translateWidth = 0;
      $('.slider-ipad__text-btn').click(function () {
        navBtnId = $(this).index();
        var navBtns = $(".slider-ipad__nav").children();
        $('.slider-ipad__text-btn').removeClass('slider-ipad__text-btn_active');
        $(navBtns[navBtnId]).addClass('slider-ipad__text-btn_active');

        if (navBtnId + 1 != slideNow) {
          translateWidth = -$('.slider-ipad__viewport').width() * navBtnId;
          $('.slider-ipad__items').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
          });
          slideNow = navBtnId + 1;
        }

        ;
      });
    };

    sliderIpad(); // Faq Spoiler

    var faqSpoiler = function faqSpoiler(spoiler, spoilerHeader, spoilerContent, addClassOpen) {
      $(spoiler).on("click", spoilerHeader, function (e) {
        $("." + addClassOpen).slideUp(300);

        if ($(this).parent().children(spoilerContent).hasClass(addClassOpen)) {
          $(this).parent().children(spoilerContent).slideUp(300).removeClass(addClassOpen);
        } else {
          $(spoilerContent).removeClass(addClassOpen);
          $(this).parent().children(spoilerContent).slideDown(300).addClass(addClassOpen);
        }

        ;
      });
    };

    faqSpoiler(".faq-spoiler", ".faq-spoiler__header", ".faq-spoiler__content", "faq-spoiler__content_open"); //Change Content

    function changeContent(btn1, baner, removeClassBaner, addClassBaner, servicePerformers, serviceExecution, addClassBtn) {
      $(btn1).on("click", function (e) {
        e.preventDefault();
        $(this).parent().children().removeClass(addClassBtn);
        $(this).addClass(addClassBtn);
        $(baner).addClass(addClassBaner).removeClass(removeClassBaner);
        $(servicePerformers).show();
        $(serviceExecution).hide();
      });
    }

    ;
    changeContent('.private-person-btn', '#service-baner', 'baner_1', 'baner_2', '#service-performers', '#service-execution', 'service-btn-active');
    changeContent('.company-btn', '#service-baner', 'baner_2', 'baner_1', '#service-execution', '#service-performers', 'service-btn-active');
  });
};

serviceScripts();