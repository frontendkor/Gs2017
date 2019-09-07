let writeDirectorhModall =()=>{
  
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



    /* writeDorouchModall script animate */  
      let openWriteDorouchModall = ()=>{
        bodyScrollNo();
        bodyStyle1();
        $('.write-director-modal__container').show();
        $('.write-director-modal').fadeIn(300);
        $('.write-director-modal__content').animate({'margin-top': "50px"}, 300);
      };

      let closeWriteDorouchModall = (bodyScrollFunc, bodyStyleFunc)=>{
        $('.write-director-modal').fadeOut(200, function(){
          $('.write-director-modal__container').hide();
          bodyScrollFunc();
          bodyStyleFunc();
          $('.write-director-modal__content').css('margin-top', '-50px');
          $('input[name=email]').removeClass('error');
          $('textarea[name=message]').removeClass('error');
          $('div.deal-checkbox>label>i').removeClass('error');
          $('span.error-text').text('');
          $('input').val('');
          $('textarea').val('');
        });
      };

      $('.write-director-modal__open').click(function(e){
        e.preventDefault();
        bodyScrollNo();
        bodyStyle1();
        $('.write-director-modal__container').show();
        $('.write-director-modal').fadeIn(300);
        $('.write-director-modal__content').animate({'margin-top': "50px"}, 300);
      });

      $('.write-director-modal__close').click(function(){
        closeWriteDorouchModall(bodyScroll, bodyStyle2);
      });
      $('.write-director-modal__overflay').click(function(){
        closeWriteDorouchModall(bodyScroll, bodyStyle2);
      });

    /* Validate Form =======================================================================*/

        function clearError(elem, clearTextError){
          $(elem).removeClass('error');
          $(clearTextError).text('');
        };

        let onError = (elem, addTextError, text)=>{
          $(elem).addClass('error');
          $(addTextError).text(text);
        };

        let onFocus = (elemFocus, elem, clearTextError)=>{
          $(elemFocus).on("focus", ()=>{
            clearError(elem, clearTextError);
          });
        };


        /* Valid In */
        let validMail = false;
        let validMessage = false;
        let validCheckbox = false;
        $('#write-director-modal__form').submit((e)=>{
          e.preventDefault();

          /* Valid Email */
          let mail = $('input[name=email]').val();
          let mailTextError = $('#write-director-modal__mail>span.error-text');
          let mailInput = $('input[name=email]');
          if(mail == ""){
            onError(mailInput, mailTextError, 'Введите email');
          } else {
            let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(!pattern.test(mail)){
              onError(mailInput, mailTextError, 'Не корректный email');
            } else {
              clearError(mailInput, mailTextError);
              validMail = true;
            }
          };

         /* Valid Message */
          let message = $('textarea[name=message]').val();
          let messageTextError = $('#write-director-modal__message>span.error-text');
          let messageInput = $('textarea[name=message]');
          if(message == ""){
            onError(messageInput, messageTextError, 'Введите сообщение');
          } else {
            if(message.length < 10){
              onError(messageInput, messageTextError, 'Минимум 10 символов');
            } else {
              clearError(messageInput, messageTextError);
              validMessage = true;
              console.log(validMessage);
            }
          };


          let dealCheckbox = $('#deal-checkbox');
          let dealCheckboxTextError = $('#write-director-modal__form>span.error-text');
          let dealCheckboxInput = $('div.deal-checkbox>label>i');
          if($(dealCheckbox).prop('checked')){
            validCheckbox = true;
            clearError(dealCheckboxInput, dealCheckboxTextError);
          } else {
            validCheckbox = false;
            onError(dealCheckboxInput, dealCheckboxTextError, 'Нужно разрешение на обработку данных');
          };

          onFocus(mailInput, mailInput, mailTextError);
          onFocus(messageInput, messageInput, messageTextError);
          onFocus(dealCheckbox, dealCheckboxInput, dealCheckboxTextError);

          if(validMail==true && validMessage==true && validCheckbox == true){
            var $form = $(this);
            $.ajax({
              type: $form.attr('method'),
              url: $form.attr('action'),
              data: $form.serialize()
            }).done(function() {
              closeWriteDorouchModall(bodyScrollNo, bodyStyle1);
              $('.complete-modal').fadeIn(200).css('overflow-y', 'scroll');
              validMail = false;
              validMessage = false;
              validCheckbox = false;
            });
          };


        });
  
  

  });/***/

};
export default writeDirectorhModall;