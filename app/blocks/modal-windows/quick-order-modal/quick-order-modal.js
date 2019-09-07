let quickOrderModal =()=>{
  
  $(document).ready(()=>{
  
    /*********************************************************************************************************/
    /* Find the width of the scrollbar */
    function getScrollbarWidth() {
            if ($(document).height() <= $(window).height()) {
              return 0;
            }

            var outer = document.createElement('div');
            var inner = document.createElement('div');
            var widthNoScroll;
            var widthWithScroll;

            outer.style.visibility = 'hidden';
            outer.style.width = '100px';
            document.body.appendChild(outer);

            widthNoScroll = outer.offsetWidth;

            // Force scrollbars
            outer.style.overflow = 'scroll';

            // Add inner div
            inner.style.width = '100%';
            outer.appendChild(inner);

            widthWithScroll = inner.offsetWidth;

            // Remove divs
            outer.parentNode.removeChild(outer);

            return widthNoScroll - widthWithScroll;
    };

    var scrollW = getScrollbarWidth();
    var body = $('body').innerWidth(); /* Find the width of the BODY */

    let bodyScrollNo = ()=>{
      document.body.style.overflow='hidden';
    };
    let bodyScroll = ()=>{
      document.body.style.overflow='auto';
    };

    let navTopW = document.documentElement.clientWidth;

    $( window ).resize(function(){
      navTopW = document.documentElement.clientWidth;
    })

    let bodyStyle1 = ()=>{
      $('body').css("margin-right", scrollW + "px");
      $('.nav-top').css("margin-right", scrollW + "px !important");
      $('.nav-top_sticky').css("width", navTopW);

    };
    let bodyStyle2 = ()=>{
      $('body').css("margin-right", "0");
      $('.nav-top .nav-top_sticky').css("margin-right", "0");
      $('.nav-top_sticky').css("width", "100%");
    };
    /*********************************************************************************************************/


    /* quickOrderModal script animate*/
    function quickOrderOpen(btn){
      $(btn).click(function(e){
        e.preventDefault();
        bodyScrollNo();
        bodyStyle1();
        $('.quick-order-modal__container').show();
        $('.quick-order-modal').fadeIn(300);
        $('.quick-order-modal__content').animate({'margin-top': "50px"}, 300);
      });
    };
    quickOrderOpen('.quick-order__open');
    quickOrderOpen('#request');
    // $('.quick-order__open').click(function(e){
    //   e.preventDefault();
    //   bodyScrollNo();
    //   bodyStyle1();
    //   $('.quick-order-modal__container').show();
    //   $('.quick-order-modal').fadeIn(300);
    //   $('.quick-order-modal__content').animate({'margin-top': "50px"}, 300);
    // });

    let closeQuickOrderModal = (bodyScrollFunc, bodyStyleFunc)=>{
      $('.quick-order-modal').fadeOut(200, function(){
        $('.quick-order-modal__container').hide();
        bodyScrollFunc();
        bodyStyleFunc();
        $('.quick-order-modal__content').css('margin-top', '-50px');
        $('#quick-order__user-phone').removeClass('not-correct');
        $('input').val('');
      });
    };

    $('.quick-order-modal_close').click(function(){
      closeQuickOrderModal(bodyScroll, bodyStyle2);
    });
    $('.quick-order-modal__overlay').click(function(){
      closeQuickOrderModal(bodyScroll, bodyStyle2);
    });

    /* Submit form ================================================================================ */
    $('#quick-order-modal__form').submit(function(e){
      e.preventDefault();
      var $form = $(this);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
      }).done(function() {
        closeQuickOrderModal(bodyScrollNo, bodyStyle1);
        $('.complete-modal').fadeIn(200).css('overflow-y', 'scroll');
      });
      return false;
    });
    
  });/***/
 
};
export default quickOrderModal;