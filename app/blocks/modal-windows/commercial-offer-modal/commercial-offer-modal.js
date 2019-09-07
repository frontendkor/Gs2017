let commercialOfferModal = ()=>{
  
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
  
  
    /* commercialOfferModal script ============================================================= */
    (function commercialOfferModal(){

      $('.commercial-offer-modal_open').click(function(){
        $('.commercial-offer-modal__overlay').fadeIn(300);
        $('.commercial-offer-modal__content').animate({'right': "0"}, 300);
      });

      $('.commercial-offer-modal_close').click(function(){
        commercialOfferModalClose();
      });
      $('.commercial-offer-modal__overlay').click(function(){
        commercialOfferModalClose();
      });

    })();
    function commercialOfferModalClose (){
      $('.commercial-offer-modal__overlay').fadeOut(200);
      $('.commercial-offer-modal__content').animate({'right': "-704px"}, 300);
      $('input').removeClass('error');
      $('p.error-text ').text('');
      $('input').val('');
    };

  
    /* commercialOfferModal2 script ============================================================= */
    let commercialOfferModal2 = (()=>{

      $('.commercial-offer2__open').click(function(){
        $('.commercial-offer-modal2__container').show();
        $('.commercial-offer-modal2').fadeIn(300);
        $('.commercial-offer-modal2__content').animate({'margin-top': "50px"}, 300);
      });

      let closeCommercialOfferModal2 = ()=>{
        $('.commercial-offer-modal2').fadeOut(200,);
        $('.commercial-offer-modal2__content').animate({'margin-top': "-50px"}, 300);
        $('.commercial-offer-modal2__container').hide();
        $('input').removeClass('error');
        $('p.error-text ').text('');
      };

      $('.commercial-offer-modal2_close').click(function(){
        closeCommercialOfferModal2();
      });
      $('.commercial-offer-modal2__overlay').click(function(){
        closeCommercialOfferModal2();
      });
    })();


    /* Validate Form =======================================================================*/


    function validForm(form, mailInput, phoneInput){
      let valid = false;

      function onError(ind, input, classError, addTextError, textError){
        ind = false;
        $(input).addClass(classError);
        $(addTextError).text(textError);
      };

      function onFocus(input, classError, addTextError){
        $(input).on("focus", ()=>{
          $(input).removeClass(classError);
          $(addTextError).text('');
        });
      };
      onFocus('input', 'error', 'p.error-text');
      onFocus('input', 'error', 'p.error-text');

      function clearError(elem, clearTextError){
        $(elem).removeClass('error');
        $(clearTextError).text('');
      };

      $(form).submit(function(e){
        e.preventDefault();
        var mail = $(mailInput).val();
        var phone = $(phoneInput).val();
        console.log(mail)
        if(mail == "" && phone == ""){
          onError(valid, mailInput, 'error', 'p.error-text', 'Заполните поле телефон или почта');
          onError(valid, phoneInput, 'error', 'p.error-text', 'Заполните поле телефон или почта');
        } else {
          valid = true;
        };
        if(phone){
          clearError(phoneInput, 'p.error-text');
          valid = true;
        }

        if(mail){
          let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(!pattern.test(mail)){
              onError(valid, mailInput, 'error','p.error-text', 'Не корректный email');
              valid = false;
            } else {
              clearError(mailInput, 'p.error-text');
              valid = true;
            };
        };


        if(valid == true ){
          var $form = $(this);
            $.ajax({
              type: $form.attr('method'),
              url: $form.attr('action'),
              data: $form.serialize()
            }).done(function() {
              commercialOfferModalClose();
              $('.complete-modal').fadeIn(200);
              valid = false;
            });

        };

      });



    };
    validForm('#commercial-offer-modal__form', $('#commercial-offer__mail'), $('#commercial-offer__user-phone'));
    validForm('#commercial-offer-modal2__form', $('#commercial-offer2__mail'), $('#commercial-offer2__user-phone'));
    
    
    
  });/*==========*/
  
};
export default commercialOfferModal;