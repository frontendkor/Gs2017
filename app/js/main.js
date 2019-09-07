/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _commercialOfferModal = __webpack_require__(1);

var _commercialOfferModal2 = _interopRequireDefault(_commercialOfferModal);

var _jobApplicationModal = __webpack_require__(2);

var _jobApplicationModal2 = _interopRequireDefault(_jobApplicationModal);

var _quickOrderModal = __webpack_require__(3);

var _quickOrderModal2 = _interopRequireDefault(_quickOrderModal);

var _writeDorouchModal = __webpack_require__(4);

var _writeDorouchModal2 = _interopRequireDefault(_writeDorouchModal);

var _completeModal = __webpack_require__(5);

var _completeModal2 = _interopRequireDefault(_completeModal);

var _headerTopBlok = __webpack_require__(6);

var _headerTopBlok2 = _interopRequireDefault(_headerTopBlok);

var _callBackBlock = __webpack_require__(7);

var _callBackBlock2 = _interopRequireDefault(_callBackBlock);

var _nav = __webpack_require__(8);

var _nav2 = _interopRequireDefault(_nav);

var _nav_responsive = __webpack_require__(9);

var _nav_responsive2 = _interopRequireDefault(_nav_responsive);

var _sliderok = __webpack_require__(10);

var _sliderok2 = _interopRequireDefault(_sliderok);

var _gallery = __webpack_require__(11);

var _gallery2 = _interopRequireDefault(_gallery);

var _map = __webpack_require__(12);

var _map2 = _interopRequireDefault(_map);

var _mapMini = __webpack_require__(13);

var _mapMini2 = _interopRequireDefault(_mapMini);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {

  var FooterRes = function FooterRes() {
    if ($(window).width() <= 1200) {
      $('.footer__content').removeClass('col-lg-5');
    };
    if ($(window).width() > 1200) {
      $('.footer__content').addClass('col-lg-5');
    };
  };
  FooterRes();
  $(window).resize(function () {
    FooterRes();
  });

  // alert(jQuery.fn.jquery);
});

/* CommercialOfferModal scripts ===================================================*/

(0, _commercialOfferModal2.default)();
/* Job-application-modal Modal scripts ===================================================*/

(0, _jobApplicationModal2.default)();
/* QuickOrderModal Modal scripts ===================================================*/

(0, _quickOrderModal2.default)();
/* QuickOrderModal Modal scripts ===================================================*/

(0, _writeDorouchModal2.default)();

(0, _completeModal2.default)();
$('[name = phone]').mask("+(999) 999-999-999");

/* Header Top Block scripts ===================================================*/

(0, _headerTopBlok2.default)();

/* Сall Back Phone scripts ===================================================*/

(0, _callBackBlock2.default)();

/* Nav scripts ===============================================================*/

(0, _nav2.default)();
/* Nav Responsive scripts ====================================================*/

(0, _nav_responsive2.default)();

/* Slider is on the page (prices-service.html) & (about-us.html) =============*/

(0, _sliderok2.default)();

/* Gallery (thanks.html) =================================*/

(0, _gallery2.default)();

/* initMaps ==============================================*/

(0, _map2.default)();

(0, _mapMini2.default)();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var commercialOfferModal = function commercialOfferModal() {

  $(document).ready(function () {

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

    var bodyScrollNo = function bodyScrollNo() {
      document.body.style.overflow = 'hidden';
    };
    var bodyScroll = function bodyScroll() {
      document.body.style.overflow = 'auto';
    };

    var navTopW = document.documentElement.clientWidth;

    $(window).resize(function () {
      navTopW = document.documentElement.clientWidth;
    });

    var bodyStyle1 = function bodyStyle1() {
      $('body').css("margin-right", scrollW + "px");
      $('.nav-top').css("margin-right", scrollW + "px !important");
      $('.nav-top_sticky').css("width", navTopW);
    };
    var bodyStyle2 = function bodyStyle2() {
      $('body').css("margin-right", "0");
      $('.nav-top .nav-top_sticky').css("margin-right", "0");
      $('.nav-top_sticky').css("width", "100%");
    };
    /*********************************************************************************************************/

    /* commercialOfferModal script ============================================================= */
    (function commercialOfferModal() {

      $('.commercial-offer-modal_open').click(function () {
        $('.commercial-offer-modal__overlay').fadeIn(300);
        $('.commercial-offer-modal__content').animate({ 'right': "0" }, 300);
      });

      $('.commercial-offer-modal_close').click(function () {
        commercialOfferModalClose();
      });
      $('.commercial-offer-modal__overlay').click(function () {
        commercialOfferModalClose();
      });
    })();
    function commercialOfferModalClose() {
      $('.commercial-offer-modal__overlay').fadeOut(200);
      $('.commercial-offer-modal__content').animate({ 'right': "-704px" }, 300);
      $('input').removeClass('error');
      $('p.error-text ').text('');
      $('input').val('');
    };

    /* commercialOfferModal2 script ============================================================= */
    var commercialOfferModal2 = function () {

      $('.commercial-offer2__open').click(function () {
        $('.commercial-offer-modal2__container').show();
        $('.commercial-offer-modal2').fadeIn(300);
        $('.commercial-offer-modal2__content').animate({ 'margin-top': "50px" }, 300);
      });

      var closeCommercialOfferModal2 = function closeCommercialOfferModal2() {
        $('.commercial-offer-modal2').fadeOut(200);
        $('.commercial-offer-modal2__content').animate({ 'margin-top': "-50px" }, 300);
        $('.commercial-offer-modal2__container').hide();
        $('input').removeClass('error');
        $('p.error-text ').text('');
      };

      $('.commercial-offer-modal2_close').click(function () {
        closeCommercialOfferModal2();
      });
      $('.commercial-offer-modal2__overlay').click(function () {
        closeCommercialOfferModal2();
      });
    }();

    /* Validate Form =======================================================================*/

    function validForm(form, mailInput, phoneInput) {
      var valid = false;

      function onError(ind, input, classError, addTextError, textError) {
        ind = false;
        $(input).addClass(classError);
        $(addTextError).text(textError);
      };

      function onFocus(input, classError, addTextError) {
        $(input).on("focus", function () {
          $(input).removeClass(classError);
          $(addTextError).text('');
        });
      };
      onFocus('input', 'error', 'p.error-text');
      onFocus('input', 'error', 'p.error-text');

      function clearError(elem, clearTextError) {
        $(elem).removeClass('error');
        $(clearTextError).text('');
      };

      $(form).submit(function (e) {
        e.preventDefault();
        var mail = $(mailInput).val();
        var phone = $(phoneInput).val();
        console.log(mail);
        if (mail == "" && phone == "") {
          onError(valid, mailInput, 'error', 'p.error-text', 'Заполните поле телефон или почта');
          onError(valid, phoneInput, 'error', 'p.error-text', 'Заполните поле телефон или почта');
        } else {
          valid = true;
        };
        if (phone) {
          clearError(phoneInput, 'p.error-text');
          valid = true;
        }

        if (mail) {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test(mail)) {
            onError(valid, mailInput, 'error', 'p.error-text', 'Не корректный email');
            valid = false;
          } else {
            clearError(mailInput, 'p.error-text');
            valid = true;
          };
        };

        if (valid == true) {
          var $form = $(this);
          $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
          }).done(function () {
            commercialOfferModalClose();
            $('.complete-modal').fadeIn(200);
            valid = false;
          });
        };
      });
    };
    validForm('#commercial-offer-modal__form', $('#commercial-offer__mail'), $('#commercial-offer__user-phone'));
    validForm('#commercial-offer-modal2__form', $('#commercial-offer2__mail'), $('#commercial-offer2__user-phone'));
  }); /*==========*/
};
exports.default = commercialOfferModal;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* jobApplicationModal script ================================================================= */
var jobApplicationModal = function jobApplicationModal() {

  $(document).ready(function () {

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

    var bodyScrollNo = function bodyScrollNo() {
      document.body.style.overflow = 'hidden';
    };
    var bodyScroll = function bodyScroll() {
      document.body.style.overflow = 'auto';
    };

    var navTopW = document.documentElement.clientWidth;

    $(window).resize(function () {
      navTopW = document.documentElement.clientWidth;
    });

    var bodyStyle1 = function bodyStyle1() {
      $('body').css("margin-right", scrollW + "px");
      $('.nav-top').css("margin-right", scrollW + "px !important");
      $('.nav-top_sticky').css("width", navTopW);
    };
    var bodyStyle2 = function bodyStyle2() {
      $('body').css("margin-right", "0");
      $('.nav-top .nav-top_sticky').css("margin-right", "0");
      $('.nav-top_sticky').css("width", "100%");
    };
    /*********************************************************************************************************/

    /* jobApplicationModalOpen script animate*/
    var jobApplicationModalOpen = function jobApplicationModalOpen() {
      bodyScrollNo();
      bodyStyle1();
      $('.job-application-modal__container').show();
      $('.job-application-modal').fadeIn(300);
      $('.job-application-modal__content').animate({ 'margin-top': "50px" }, 300);
    };

    $('.btn-worksheet').on('click', function (e) {
      e.preventDefault();
      jobApplicationModalOpen();
    });

    var closejobApplicationModal = function closejobApplicationModal(bodyScrollFunc, bodyStyleFunc) {
      $('.job-application-modal').fadeOut(200, function () {
        $('.job-application-modal__container').hide();
        bodyScrollFunc();
        bodyStyleFunc();
        $('.job-application-modal__content').css('margin-top', '-50px');
        $('input').val('');
      });
    };

    $('.vacancies-spoilers__container').on('click', '.btn-worksheet', function (e) {
      e.preventDefault();
      jobApplicationModalOpen();
    });

    $('.job-application-modal__close').on('click', function () {
      closejobApplicationModal(bodyScroll, bodyStyle2);
    });
    $('.job-application-modal__overflay').on('click', function () {
      closejobApplicationModal(bodyScroll, bodyStyle2);
    });

    $("#write-dorouch-modal__year-of-birth").mask("99/99/9999");

    var citizenship = "Гражданство";
    $('#write-dorouch-modal__citizenship').on('change', function () {
      var str = $("#write-dorouch-modal__citizenship :selected").text();
      citizenship = str;
    });

    /* Submit form ================================================================================ */
    var validSurname = false;
    var validName = false;
    var validMiddleName = false;
    var validPhone = false;
    var validCheckbox = true;

    function onError(ind, input, classError, addTextError, textError) {
      ind = false;
      $(input).addClass(classError);
      $(addTextError).text(textError);
    };

    function onFocus(input, classError, addTextError) {
      $(input).on("focus", function () {
        $(input).removeClass(classError);
        $(addTextError).text('');
      });
    };
    onFocus('input', 'error', '.surname__error-text');
    onFocus('input', 'error', '.name__error-text');
    onFocus('input', 'error', '.middle-name__error-text');
    onFocus('input', 'error', '.user-phone__error-text');

    function clearError(elem, clearTextError) {
      $(elem).removeClass('error');
      $(clearTextError).text('');
    };
    $('.job-application-modal__form').submit(function (e) {
      e.preventDefault();

      var surname = $('#job-application-modal__surname');
      if (surname.val() == "") {
        onError(validSurname, surname, 'error', '.surname__error-text', 'Введите Фамилию');
      } else {
        validSurname = true;
      };

      var name = $('#job-application-modal__name');
      if (name.val() == "") {
        onError(validName, name, 'error', '.name__error-text', 'Введите Имя');
      } else {
        validName = true;
      };

      var middleName = $('#job-application-modal__middle-name');
      if (middleName.val() == "") {
        onError(validMiddleName, middleName, 'error', '.middle-name__error-text', 'Введите Отчество');
      } else {
        validMiddleName = true;
      };

      var phone = $('#job-application-modal__user-phone');
      if (phone.val() == "") {
        onError(validPhone, phone, 'error', '.user-phone__error-text', 'Введите телефон');
      } else {
        validPhone = true;
      };

      var checkbox = $('#deal-checkbox2');
      if ($(checkbox).prop('checked')) {
        validCheckbox = true;
      } else {
        validCheckbox = false;
        onError(validCheckbox, '.deal-checkbox>label>i', 'error', '.deal-checkbox2__error-text', 'Нужно разрешение на обработку данных');
      };
      onFocus(checkbox, 'error', '.deal-checkbox2__error-text');

      var $form = $(this);
      if (validSurname == true && validName == true && validMiddleName == true && validPhone == true && validCheckbox == true) {
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function () {
          closejobApplicationModal(bodyScrollNo, bodyStyle1);;
          $('.complete-modal').fadeIn(200).css('overflow-y', 'scroll');
        });
        console.log(phone.val());
        return false;
      };
    });
  }); /***/
};
exports.default = jobApplicationModal;

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var quickOrderModal = function quickOrderModal() {

  $(document).ready(function () {

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

    var bodyScrollNo = function bodyScrollNo() {
      document.body.style.overflow = 'hidden';
    };
    var bodyScroll = function bodyScroll() {
      document.body.style.overflow = 'auto';
    };

    var navTopW = document.documentElement.clientWidth;

    $(window).resize(function () {
      navTopW = document.documentElement.clientWidth;
    });

    var bodyStyle1 = function bodyStyle1() {
      $('body').css("margin-right", scrollW + "px");
      $('.nav-top').css("margin-right", scrollW + "px !important");
      $('.nav-top_sticky').css("width", navTopW);
    };
    var bodyStyle2 = function bodyStyle2() {
      $('body').css("margin-right", "0");
      $('.nav-top .nav-top_sticky').css("margin-right", "0");
      $('.nav-top_sticky').css("width", "100%");
    };
    /*********************************************************************************************************/

    /* quickOrderModal script animate*/
    function quickOrderOpen(btn) {
      $(btn).click(function (e) {
        e.preventDefault();
        bodyScrollNo();
        bodyStyle1();
        $('.quick-order-modal__container').show();
        $('.quick-order-modal').fadeIn(300);
        $('.quick-order-modal__content').animate({ 'margin-top': "50px" }, 300);
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

    var closeQuickOrderModal = function closeQuickOrderModal(bodyScrollFunc, bodyStyleFunc) {
      $('.quick-order-modal').fadeOut(200, function () {
        $('.quick-order-modal__container').hide();
        bodyScrollFunc();
        bodyStyleFunc();
        $('.quick-order-modal__content').css('margin-top', '-50px');
        $('#quick-order__user-phone').removeClass('not-correct');
        $('input').val('');
      });
    };

    $('.quick-order-modal_close').click(function () {
      closeQuickOrderModal(bodyScroll, bodyStyle2);
    });
    $('.quick-order-modal__overlay').click(function () {
      closeQuickOrderModal(bodyScroll, bodyStyle2);
    });

    /* Submit form ================================================================================ */
    $('#quick-order-modal__form').submit(function (e) {
      e.preventDefault();
      var $form = $(this);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
      }).done(function () {
        closeQuickOrderModal(bodyScrollNo, bodyStyle1);
        $('.complete-modal').fadeIn(200).css('overflow-y', 'scroll');
      });
      return false;
    });
  }); /***/
};
exports.default = quickOrderModal;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var writeDirectorhModall = function writeDirectorhModall() {

  $(document).ready(function () {

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

    var bodyScrollNo = function bodyScrollNo() {
      document.body.style.overflow = 'hidden';
    };
    var bodyScroll = function bodyScroll() {
      document.body.style.overflow = 'auto';
    };

    var navTopW = document.documentElement.clientWidth;

    $(window).resize(function () {
      navTopW = document.documentElement.clientWidth;
    });

    var bodyStyle1 = function bodyStyle1() {
      $('body').css("margin-right", scrollW + "px");
      $('.nav-top').css("margin-right", scrollW + "px !important");
      $('.nav-top_sticky').css("width", navTopW);
    };
    var bodyStyle2 = function bodyStyle2() {
      $('body').css("margin-right", "0");
      $('.nav-top .nav-top_sticky').css("margin-right", "0");
      $('.nav-top_sticky').css("width", "100%");
    };
    /*********************************************************************************************************/

    /* writeDorouchModall script animate */
    var openWriteDorouchModall = function openWriteDorouchModall() {
      bodyScrollNo();
      bodyStyle1();
      $('.write-director-modal__container').show();
      $('.write-director-modal').fadeIn(300);
      $('.write-director-modal__content').animate({ 'margin-top': "50px" }, 300);
    };

    var closeWriteDorouchModall = function closeWriteDorouchModall(bodyScrollFunc, bodyStyleFunc) {
      $('.write-director-modal').fadeOut(200, function () {
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

    $('.write-director-modal__open').click(function (e) {
      e.preventDefault();
      bodyScrollNo();
      bodyStyle1();
      $('.write-director-modal__container').show();
      $('.write-director-modal').fadeIn(300);
      $('.write-director-modal__content').animate({ 'margin-top': "50px" }, 300);
    });

    $('.write-director-modal__close').click(function () {
      closeWriteDorouchModall(bodyScroll, bodyStyle2);
    });
    $('.write-director-modal__overflay').click(function () {
      closeWriteDorouchModall(bodyScroll, bodyStyle2);
    });

    /* Validate Form =======================================================================*/

    function clearError(elem, clearTextError) {
      $(elem).removeClass('error');
      $(clearTextError).text('');
    };

    var onError = function onError(elem, addTextError, text) {
      $(elem).addClass('error');
      $(addTextError).text(text);
    };

    var onFocus = function onFocus(elemFocus, elem, clearTextError) {
      $(elemFocus).on("focus", function () {
        clearError(elem, clearTextError);
      });
    };

    /* Valid In */
    var validMail = false;
    var validMessage = false;
    var validCheckbox = false;
    $('#write-director-modal__form').submit(function (e) {
      e.preventDefault();

      /* Valid Email */
      var mail = $('input[name=email]').val();
      var mailTextError = $('#write-director-modal__mail>span.error-text');
      var mailInput = $('input[name=email]');
      if (mail == "") {
        onError(mailInput, mailTextError, 'Введите email');
      } else {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (!pattern.test(mail)) {
          onError(mailInput, mailTextError, 'Не корректный email');
        } else {
          clearError(mailInput, mailTextError);
          validMail = true;
        }
      };

      /* Valid Message */
      var message = $('textarea[name=message]').val();
      var messageTextError = $('#write-director-modal__message>span.error-text');
      var messageInput = $('textarea[name=message]');
      if (message == "") {
        onError(messageInput, messageTextError, 'Введите сообщение');
      } else {
        if (message.length < 10) {
          onError(messageInput, messageTextError, 'Минимум 10 символов');
        } else {
          clearError(messageInput, messageTextError);
          validMessage = true;
          console.log(validMessage);
        }
      };

      var dealCheckbox = $('#deal-checkbox');
      var dealCheckboxTextError = $('#write-director-modal__form>span.error-text');
      var dealCheckboxInput = $('div.deal-checkbox>label>i');
      if ($(dealCheckbox).prop('checked')) {
        validCheckbox = true;
        clearError(dealCheckboxInput, dealCheckboxTextError);
      } else {
        validCheckbox = false;
        onError(dealCheckboxInput, dealCheckboxTextError, 'Нужно разрешение на обработку данных');
      };

      onFocus(mailInput, mailInput, mailTextError);
      onFocus(messageInput, messageInput, messageTextError);
      onFocus(dealCheckbox, dealCheckboxInput, dealCheckboxTextError);

      if (validMail == true && validMessage == true && validCheckbox == true) {
        var $form = $(undefined);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function () {
          closeWriteDorouchModall(bodyScrollNo, bodyStyle1);
          $('.complete-modal').fadeIn(200).css('overflow-y', 'scroll');
          validMail = false;
          validMessage = false;
          validCheckbox = false;
        });
      };
    });
  }); /***/
};
exports.default = writeDirectorhModall;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var completeModal = function completeModal() {

  $(document).ready(function () {

    $('#complete-modal__btn').click(function () {
      document.body.style.overflow = 'auto';
      $('body').css("margin-right", 0 + "px");
      $('.complete-modal').fadeOut(300).css('overflow-y', 'auto');;
    });
  }); /*===*/
};
exports.default = completeModal;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var headerTopBlock = function headerTopBlock() {

  $(document).ready(function () {

    /* Today's date output =====================================================================*/
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth(); //January is 0!
    var yyyy = today.getFullYear();

    var arrMm = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    today = dd + ' ' + arrMm[mm] + ' ';
    $('#discount__date').html(today);
  });
};
exports.default = headerTopBlock;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var callBackPhone = function callBackPhone() {

  $(document).ready(function () {

    var callBackBtnClick = function callBackBtnClick() {
      $('#call-back__submit').animate({ left: "230px" }, 400);
    };

    var callBackPhoneBtnResize = function callBackPhoneBtnResize() {
      $('#call-back__submit').animate({ top: "70px" }, 400);
    };

    var callBackBtn = function callBackBtn() {
      $('#call-back__submit').on("click", function () {
        if (window.innerWidth <= 944) {
          callBackPhoneBtnResize();
        } else {
          callBackBtnClick();
        };
      });
    };
    callBackBtn();
    $(window).resize(function () {
      callBackBtn();
    });

    $('.form-phone').submit(function (e) {
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

exports.default = callBackPhone;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Nav = function Nav() {

  $(document).ready(function () {
    var d = new Date();
    var year = 'Цены ' + d.getFullYear();
    $('.link-prise').append(year);

    /* Active navigation link ===============================================================*/
    function addClassLinkActive(link, link2) {
      $('#nav').find('a').removeClass('active');
      $(link).addClass('active');
      link2 ? $(link2).addClass('active') : null;
    }
    var strURL = window.location.toString();
    strURL.indexOf('prices.html') >= 0 && addClassLinkActive('.link-prise');
    strURL.indexOf('about-us.html') >= 0 && addClassLinkActive('.link-about-us', '.link-nav-drop');
    strURL.indexOf('service.html') >= 0 && addClassLinkActive('.link-service', '.link-nav-drop');
    strURL.indexOf('thanks.html') >= 0 && addClassLinkActive('.link-thanks', '.link-nav-drop');
    strURL.indexOf('vacancies.html') >= 0 && addClassLinkActive('.linlk-vacancies');
    strURL.indexOf('contacts.html') >= 0 && addClassLinkActive('.linlk-contacts');

    /* Display a drop-down navigation list (Company) =========================================*/
    var navDrop = $('.nav-drop');
    var addClass = 'nav-drop_open';

    $('.link-nav-drop').hover(function () {
      navDrop.addClass(addClass).hover(function () {
        navDrop.css("opacity", "1");
      }, function () {
        navDrop.css("opacity", "0").removeClass(addClass);
      });
    });

    /* Changing the position of blocks when changing the width of the window =================*/
    var NavTopRes = function NavTopRes() {
      var btnContainer = $('.nav-top__btn-container');
      var logoContainer = $('.nav-top__logo-container');
      if (window.innerWidth <= 1200) {
        btnContainer.removeClass('col-lg-3');
        logoContainer.addClass('col-lg-5 col-md-5').removeClass('col-lg-2');
      } else {
        btnContainer.addClass('col-lg-3');
        logoContainer.addClass('col-lg-2').removeClass('col-lg-5 col-md-5');
      }
    };
    NavTopRes();
    $(window).resize(function () {
      NavTopRes();
    });

    /* Sticky top navigation when scrolling window ===========================================*/
    var navSticky = function navSticky() {
      var navTop = $('.nav-top');
      var content = $('.content');
      var addCl = 'nav-top_sticky';
      var headerTopBlock = Number.parseInt($('.header__top-blok').css("height"));
      var navTopH = Number.parseInt($('.nav-top').css("height"));
      if ($(window).scrollTop() > headerTopBlock) {
        navTop.addClass(addCl);
        content.css("margin-top", navTopH);
      } else {
        navTop.removeClass(addCl);
        content.css("margin-top", "0");
      }
    };
    navSticky();
    $(window).scroll(function () {
      navSticky();
    });
  });
};

exports.default = Nav;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var NavResponsive = function NavResponsive() {

  $(document).ready(function () {

    /* Open nav_responsive ==============================================================*/
    var tahBtn = $('.nav-top__tah-btn');
    tahBtn.on("click", function () {
      $('.nav-modal').fadeToggle(300);
      $('body').toggleClass('scrol_none');
      $(".nav_responsive").toggleClass("nav_responsive_open");
      tahBtn.toggleClass("nav-top__tah-btn_active");
    });

    /* Open nav_responsive panels =======================================================*/
    var ResponsivNavOpenPanels = {
      PanelWidth: '+=' + $('.nav_responsive').css("width"),

      OpenPanel: function OpenPanel(link, panel, main_panel) {
        $(link).on("click", function (e) {
          e.preventDefault();
          $(main_panel).animate({ right: "50px" }, 500);
          $(panel).animate({ left: 0 }, 400);
        });
      },
      HidePanel: function HidePanel(panelHeader, panel, main_panel) {
        var panel_w = '+=' + $(panel).css("width");
        $(panelHeader).on("click", function (e) {
          e.preventDefault();
          $(panel).animate({ left: panel_w }, 400);
          $(main_panel).animate({ right: 0 }, 500);
        });
      }
    };
    ResponsivNavOpenPanels.OpenPanel('.link-panel-2', '.panel-2', '.panel-1');
    ResponsivNavOpenPanels.OpenPanel('.link-panel-3', '.panel-3', '.panel-1');

    ResponsivNavOpenPanels.HidePanel('.panel-2__header', '.panel-2', '.panel-1');
    ResponsivNavOpenPanels.HidePanel('.panel-3__header', '.panel-3', '.panel-1');
  });

  /* Remove indents from the top of the element (nav_responsive) when scrolling the window =========*/
  var ResponsivNavScroll = function ResponsivNavScroll() {
    var scroll = $(window).scrollTop();
    var navTopHeight = parseInt($('.nav-top').css("height"));
    var headerTopBlockHeight = parseInt($('.header__top-blok').css("height"));
    var marginTop = navTopHeight - scroll;
    var responsivNavHeightScroll = "calc(100vh - " + navTopHeight + "px";
    var navRes = $('.nav_responsive');
    navRes.css("padding-top", marginTop + 'px');
    if (scroll > navTopHeight) {
      navRes.css({ "top": navTopHeight, "padding-top": "1px", "height": responsivNavHeightScroll });
    } else {
      navRes.css("top", headerTopBlockHeight);
    }
  };
  ResponsivNavScroll();
  $(window).scroll(function () {
    ResponsivNavScroll();
  });
};

exports.default = NavResponsive;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var sliderok = function sliderok() {

    var slideNow = 1;
    var slideCount = $('#slidewrapper').children().length;
    var slideInterval = 3000;
    var navBtnId = 0;
    var translateWidth = 0;

    var slideNavBtn = $('.slide-nav-btn');
    var btnActive = 'slide-nav-btn__active';

    $(document).ready(function () {
        var switchInterval = setInterval(nextSlide, slideInterval);

        $('#viewport').hover(function () {
            clearInterval(switchInterval);
        }, function () {
            switchInterval = setInterval(nextSlide, slideInterval);
        });

        $('#next-btn').click(function () {
            nextSlide();
        });

        $('#prev-btn').click(function () {
            prevSlide();
        });

        slideNavBtn.click(function () {
            navBtnId = $(this).index();
            console.log(navBtnId);
            var navBtns = $("#nav-btns").children();
            slideNavBtn.removeClass(btnActive);
            $(navBtns[navBtnId]).addClass(btnActive);
            if (navBtnId + 1 != slideNow) {
                translateWidth = -$('#viewport').width() * navBtnId;
                $('#slidewrapper').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
                });
                slideNow = navBtnId + 1;
            }
        });
    });

    var navBtns = $("#nav-btns").children();
    /* Next */
    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('#slidewrapper').css('transform', 'translate(0, 0)');
            slideNow = 1;
            slideNavBtn.removeClass(btnActive);
            $(navBtns[slideNow - 1]).addClass(btnActive);
        } else {
            slideNavBtn.removeClass(btnActive);
            $(navBtns[slideNow]).addClass(btnActive);
            translateWidth = -$('#viewport').width() * slideNow;
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
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
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow = slideCount;
            slideNavBtn.removeClass(btnActive);
            $(navBtns[slideNow - 1]).addClass(btnActive);
        } else {
            slideNavBtn.removeClass(btnActive);
            $(navBtns[slideNow - 2]).addClass(btnActive);
            translateWidth = -$('#viewport').width() * (slideNow - 2);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow--;
        }
    };
};

exports.default = sliderok;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Galleries = function Galleries() {

  /*Gallery plugin ================================================*/
  var Gallery = function Gallery(gItem, gLinks, gModal, gOverlay, gCloseUpBtn, gNext, gPrev) {

    /* Func */
    var imgReplace = function imgReplace(srcNew) {
      gModal.find('img').attr('src', srcNew);
    };

    var getHref = function getHref(index) {
      return gItem.eq(index).find('>a').attr('href');
    };

    /* Open Gallery =============================================*/
    $(gLinks).on("click", function (e) {
      e.preventDefault();
      gItemIndex = $(this).parent().index();
      targetImg = $(this).attr('href');
      imgReplace(targetImg);
      gModal.fadeIn(500);
    });

    /* Navigation Gallery =======================================*/
    gNext.click(function () {
      if (gItemIndex + 1 < gLinks.length) {
        targetImg = getHref(gItemIndex + 1);
        gItemIndex++;
      } else {
        targetImg = getHref(0);
        gItemIndex = 0;
      }
      imgReplace(targetImg);
    });

    gPrev.click(function () {
      if (gItemIndex > 0) {
        targetImg = getHref(gItemIndex - 1);
        gItemIndex--;
      } else {
        targetImg = getHref(gLinks.length - 1);
        gItemIndex = gLinks.length - 1;
      }
      imgReplace(targetImg);
    });

    /*Close Gallery ==============================================*/
    var galleryClose = function galleryClose() {
      gModal.fadeOut(500);
    };
    gOverlay.click(function () {
      galleryClose();
    });
    gCloseUpBtn.click(function () {
      galleryClose();
    });
  };
  /* ===================================================================================*/

  var initGallery = function initGallery() {
    var gItem = $('.gallery__item');
    var gLinks = $('.gallery__item').find('>a');
    var gModal = $('.gallery__modal');
    var gOverlay = $('.gallery__overlay');
    var gCloseUpBtn = $('.close-up-btn');
    var gNext = $('.gallery_next');
    var gPrev = $('.gallery_prev');
    var gItemIndex = void 0;
    var targetImg = void 0;
    Gallery(gItem, gLinks, gModal, gOverlay, gCloseUpBtn, gNext, gPrev);
  };
  initGallery();
};

exports.default = Galleries;


var gItem = $('.gallery__item');
var gLinks = $('.gallery__item').find('>a');
var gModal = $('.gallery__modal');
var gOverlay = $('.gallery__overlay');
var gCloseUpBtn = $('.close-up-btn');
var gNext = $('.gallery_next');
var gPrev = $('.gallery_prev');
var gItemIndex = void 0;
var targetImg = void 0;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initMap = function initMap() {

  $(document).ready(function () {

    var strURL = window.location.toString();
    var testURL = strURL.indexOf('about-us.html');

    function init() {
      var i;
      var place;
      var pointer = [[[53.895281, 27.435990], 'Минск'], [[55.826465, 37.315373], 'Красногорск'], [[55.568985, 38.220911], 'Раменское'], [[62.028339, 129.702753], 'Якутск'], [[50.272922, 127.536158], 'Благовещенск'], [[43.114502, 131.878586], 'Владивосток'], [[46.952067, 142.736466], 'Южно-Сахалинск'], [[56.011683, 92.867787], 'Красноярск'], [[55.351941, 86.066149], 'Кемерово'], [[56.470495, 84.971545], 'Томск'], [[55.017711, 82.923284], 'Новосибирск'], [[53.342588, 83.772285], 'Барнаул'], [[57.902742, 59.993958], 'Нижний Тагил'], [[57.155392, 65.546587], 'Тюмень'], [[56.829359, 60.615081], 'Екатеринбург'], [[58.014234, 56.253507], 'Пермь'], [[55.167379, 61.389316], 'Челябинск'], [[51.771740, 55.103102], 'Оренбург'], [[56.857264, 53.221579], 'Ижевск'], [[55.723092, 52.380131], 'Набережные Челны'], [[53.226064, 50.191181], 'Самара'], [[56.621522, 47.887207], 'Йошкар-Ола'], [[55.806032, 49.198288], 'Казань'], [[54.313500, 48.426387], 'Ульяновск'], [[56.322086, 43.951457], 'Нижний Новгород'], [[53.195457, 45.024905], 'Пенза'], [[51.581325, 45.974404], 'Саратов'], [[57.626606, 39.884403], 'Ярославль'], [[57.767818, 40.923370], 'Кострома'], [[56.991198, 40.989566], 'Иваново'], [[58.525614, 31.280757], 'Великий Новгород'], [[59.940041, 30.309809], 'Санкт-Петербург'], [[52.725831, 41.450751], 'Тамбов'], [[52.605186, 39.593208], 'Липецк'], [[51.668120, 39.221360], 'Воронеж'], [[51.725962, 36.181844], 'Курск'], [[48.696997, 44.499464], 'Волгоград'], [[47.249932, 39.697120], 'Ростов-на-Дону'], [[45.034602, 38.973947], 'Краснодар'], [[44.717312, 37.779389], 'Новороссийск'], [[43.584030, 39.720020], 'Сочи'], [[44.609224, 33.591716], 'Севастополь'], [[42.989037, 47.489004], 'Махачкала']];

      var centerMap = [57.4336, 67.1227];

      var myMap = new ymaps.Map("map", {
        center: centerMap,
        zoom: 4,
        controls: []
      });

      for (i = 0; i < pointer.length; ++i) {
        place = new ymaps.Placemark(pointer[i][0], { hintContent: pointer[i][1] }, { iconLayout: 'default#image',
          iconImageHref: 'img/marker.png',
          iconImageSize: [15, 15] });
        myMap.geoObjects.add(place);
      }
    };

    if (testURL >= 0) {
      ymaps.ready(init);
    };
  });
};
exports.default = initMap;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mapMini = function mapMini() {

  $(document).ready(function () {

    var strURL = window.location.toString();
    var testURL = strURL.indexOf('vacancies.html');
    var testURL2 = strURL.indexOf('contacts.html');

    function init() {
      var myMap = new ymaps.Map("map-mini", {
        center: [53.895226, 27.436003],
        zoom: 9,
        controls: ['zoomControl', 'fullscreenControl', 'routeButtonControl']
      });

      var place;
      place = new ymaps.Placemark([53.895226, 27.436003], { hintContent: 'улица Лобанка 19' }, { iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [15, 15] });
      myMap.geoObjects.add(place);
    };

    if (testURL >= 0 || testURL2 >= 0) {
      ymaps.ready(init);
    }
  });
};

exports.default = mapMini;

/***/ })
/******/ ]);