let sliderok =()=>{
  
  var slideNow = 1;
  var slideCount = $('#slidewrapper').children().length;
  var slideInterval = 3000;
  var navBtnId = 0;
  var translateWidth = 0;
  
  var slideNavBtn = $('.slide-nav-btn');
  var btnActive = 'slide-nav-btn__active';

  $(document).ready(()=>{
            var switchInterval = setInterval(nextSlide, slideInterval);

            $('#viewport').hover(function() {
                clearInterval(switchInterval);
            }, function() {
                switchInterval = setInterval(nextSlide, slideInterval);
            });

            $('#next-btn').click(function() {
                nextSlide();
            });

            $('#prev-btn').click(function() {
                prevSlide();
            });

            slideNavBtn.click(function() {
                navBtnId = $(this).index();
                console.log(navBtnId);
                let navBtns = $("#nav-btns").children();
                slideNavBtn.removeClass(btnActive);
                $(navBtns[navBtnId]).addClass(btnActive);
                if (navBtnId + 1 != slideNow) {
                    translateWidth = -$('#viewport').width() * (navBtnId);
                    $('#slidewrapper').css({
                        'transform': 'translate(' + translateWidth + 'px, 0)',
                        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                    });
                    slideNow = navBtnId + 1;
                }
            });
  });

  let navBtns = $("#nav-btns").children();
  /* Next */
  function nextSlide() {
            if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
                $('#slidewrapper').css('transform', 'translate(0, 0)');
                slideNow = 1;
                slideNavBtn.removeClass(btnActive);
                $(navBtns[slideNow-1]).addClass(btnActive);
            } else {
                slideNavBtn.removeClass(btnActive);
                $(navBtns[slideNow]).addClass(btnActive);
                translateWidth = -$('#viewport').width() * (slideNow);
                $('#slidewrapper').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow++;
            }
  };
  /* Prev */
  function prevSlide() {
              if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
                  translateWidth = -$('#viewport').width() * (slideCount - 1);
                  $('#slidewrapper').css({
                      'transform': 'translate(' + translateWidth + 'px, 0)',
                      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                  });
                  slideNow = slideCount;
                  slideNavBtn.removeClass(btnActive);
                  $(navBtns[slideNow-1]).addClass(btnActive);
              } else {
                  slideNavBtn.removeClass(btnActive);
                  $(navBtns[slideNow-2]).addClass(btnActive);
                  translateWidth = -$('#viewport').width() * (slideNow - 2);
                  $('#slidewrapper').css({
                      'transform': 'translate(' + translateWidth + 'px, 0)',
                      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                  });
                  slideNow--;
              }
  };
  
  
  
  
  
  
  
  
  
  
};

export default sliderok;