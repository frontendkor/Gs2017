let callBackPhone = ()=>{
  
  $(document).ready(()=>{
    
    let callBackBtnClick = ()=>{
      $('#call-back__submit').animate({left: "230px" },400);
    };
    
    let callBackPhoneBtnResize = ()=>{
      $('#call-back__submit').animate({top: "70px" },400);
    };
    
    let callBackBtn = ()=>{
      $('#call-back__submit').on("click", ()=>{
        if(window.innerWidth <= 944){
          callBackPhoneBtnResize();
        } else {
          callBackBtnClick();
        };
      });
    };
    callBackBtn();
    $( window ).resize(()=>{
      callBackBtn();
    });

    $('.form-phone').submit(function(e){
      e.preventDefault();
      let $form = $(this);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
      }).done(function() {
        document.body.style.overflow='hidden';
        $('.complete-modal').fadeIn(200);
        $("#call-back__user-phone").val('');
      });
    });
    
 
  });
  
};


export default callBackPhone;