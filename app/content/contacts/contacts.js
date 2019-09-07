function contactsRequestCall() {
  $(document).ready(function () {
    $('.contacts-request-call__form>form').submit(function (e) {
      e.preventDefault();
      var $form = $(this);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
      }).done(function () {
        document.body.style.overflow = 'hidden';
        $('.complete-modal').fadeIn(200);
        $("#call-back__user-phone").val('');
      });
    });
  });
};

contactsRequestCall();

