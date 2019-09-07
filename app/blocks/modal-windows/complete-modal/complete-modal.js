let completeModal = ()=>{
  
  $(document).ready(()=>{
  
    $('#complete-modal__btn').click(()=>{
      document.body.style.overflow='auto';
      $('body').css("margin-right", 0 + "px");
      $('.complete-modal').fadeOut(300).css('overflow-y', 'auto');;
    });
    
  });/*===*/
};
export default completeModal;