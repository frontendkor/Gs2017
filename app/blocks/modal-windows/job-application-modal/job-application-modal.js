/* jobApplicationModal script ================================================================= */
let jobApplicationModal =()=>{
  
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
  
  
    /* jobApplicationModalOpen script animate*/
    let jobApplicationModalOpen = ()=>{
      bodyScrollNo();
      bodyStyle1();
      $('.job-application-modal__container').show();
      $('.job-application-modal').fadeIn(300);
      $('.job-application-modal__content').animate({'margin-top': "50px"}, 300);
    };

    $('.btn-worksheet').on('click', (e)=>{
      e.preventDefault();
      jobApplicationModalOpen();
    });

    let closejobApplicationModal = (bodyScrollFunc, bodyStyleFunc)=>{
      $('.job-application-modal').fadeOut(200, function(){
        $('.job-application-modal__container').hide();
        bodyScrollFunc();
        bodyStyleFunc();
        $('.job-application-modal__content').css('margin-top', '-50px');
        $('input').val('');
      });
    };

    $('.vacancies-spoilers__container').on('click', '.btn-worksheet', (e)=>{
      e.preventDefault();
      jobApplicationModalOpen();
    });


    $('.job-application-modal__close').on('click', function(){
      closejobApplicationModal(bodyScroll, bodyStyle2);
    });
    $('.job-application-modal__overflay').on('click', function(){
      closejobApplicationModal(bodyScroll, bodyStyle2);
    });


    $("#write-dorouch-modal__year-of-birth").mask("99/99/9999");

    var citizenship = "Гражданство";
    $('#write-dorouch-modal__citizenship').on('change', ()=>{
      var str = $("#write-dorouch-modal__citizenship :selected").text();
      citizenship = str;
    });

    /* Submit form ================================================================================ */
    let validSurname = false;
    let validName = false;
    let validMiddleName = false;
    let validPhone = false;
    let validCheckbox = true;

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
    onFocus('input', 'error', '.surname__error-text');
    onFocus('input', 'error', '.name__error-text');
    onFocus('input', 'error', '.middle-name__error-text');
    onFocus('input', 'error', '.user-phone__error-text');
    
    
      function clearError(elem, clearTextError){
        $(elem).removeClass('error');
        $(clearTextError).text('');
      };
    $('.job-application-modal__form').submit(function(e){
      e.preventDefault();

      let surname = $('#job-application-modal__surname');
      if(surname.val() == ""){
        onError(validSurname, surname, 'error', '.surname__error-text','Введите Фамилию');
      } else {
        validSurname = true;
      };

      let name = $('#job-application-modal__name');
      if(name.val() == ""){
        onError(validName, name, 'error', '.name__error-text','Введите Имя');
      } else {
        validName = true;
      };

      let middleName = $('#job-application-modal__middle-name');
      if(middleName.val() == ""){
        onError(validMiddleName, middleName, 'error', '.middle-name__error-text','Введите Отчество');
      } else {
        validMiddleName = true;
      };

      let phone = $('#job-application-modal__user-phone');
      if(phone.val() == ""){
        onError(validPhone, phone, 'error', '.user-phone__error-text','Введите телефон');
      } else {
        validPhone = true;
      };

      let checkbox = $('#deal-checkbox2');
      if($(checkbox).prop('checked')){
            validCheckbox = true;
          } else {
            validCheckbox = false;
            onError(validCheckbox, '.deal-checkbox>label>i', 'error', '.deal-checkbox2__error-text', 'Нужно разрешение на обработку данных')
          };
      onFocus(checkbox, 'error', '.deal-checkbox2__error-text');


      let $form = $(this);
      if(validSurname == true && validName == true && validMiddleName == true && validPhone == true && validCheckbox == true){
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
          closejobApplicationModal(bodyScrollNo, bodyStyle1);;
          $('.complete-modal').fadeIn(200).css('overflow-y', 'scroll');
        });
        console.log(phone.val());
        return false;
      };






    });
    
    
  });/***/


};
export default jobApplicationModal;

























//    $('#job-application-modal__btn').on('click', ()=>{
//      if(citizenship == "Гражданство"){
//        $('#write-dorouch-modal__citizenship').css('border', '2px solid red');
////        $('.job-application-modal__form').submit
//      };
//      if(citizenship !== "Гражданство"){
//        $('#write-dorouch-modal__citizenship').css('border', '2px solid #cccccc')
//      };
//      
//    });