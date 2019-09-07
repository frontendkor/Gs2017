let ModalWindows = ()=>{
  
  $('[name = phone]').mask("+(999) 999-999-999");
  
  
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
        console.log(validMail);
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
      $('#write-director-modal__form').unbind('submit').submit();
    };

  });
  

};
export default ModalWindows;


