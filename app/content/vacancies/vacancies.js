function tabOfVacancies() {
  $(document).ready(function () {
    /* Today's date output =====================================================================*/
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!

    var yyyy = today.getFullYear();
    var arrMm = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    today = dd + ' ' + arrMm[mm];
    $('#date-today').html(today);
    /* Tab of vacancies =====================================================================*/
    //Request Ajax (performed when the page is loaded)

    $.ajax({
      dataType: "json",
      url: 'json/vacancies/vacancies.json',
      cache: false,
      error: function error(XHR, status, _error) {
        console.log(status + ' ' + _error);
      },
      success: function success(answerAjax) {
        moveVacanciesAjax(answerAjax);
      }
    });
    /* ======================================================================================*/

    function moveVacanciesAjax(answerAjax) {
      var objAjax = answerAjax;
      var tabBtns = $('.vacancies-tab__btns');
      var tabData;
      var descriptionTitle, description, descriptionPs;

      if (window.innerWidth <= 767) {
        vacanciesSpoiler2();
      } else {
        $('.vacancies-spoilers__container').empty();
      }

      ;
      $(window).resize(function () {
        if (window.innerWidth <= 767) {
          vacanciesSpoiler2();
        } else {
          $('.vacancies-spoilers__container').empty();
          var testUl = $('.duties>li').length;

          if (testUl == 0) {
            activeTabLoadingPage();
          }
        }
      });
      /* Tab =======================================================================================*/
      //Add buttons to the tab

      (function addBtn() {
        for (var i = 0; i < objAjax.length; i++) {
          var tabData = objAjax[i].data; //Dynamic addition of an element (tab buttons)

          tabBtns.append('<li><span data="' + tabData + '">' + objAjax[i].name + '</span></li>');
        }

        ;
      })(); //Active tab when loading a page


      function activeTabLoadingPage() {
        if (window.innerWidth > 767) {
          tabBtns.find('li:first span').addClass('tab_active');
          $('.salary').text(objAjax[0].salary);
          $('.experience').text(objAjax[0].experience);
          var duties = objAjax[0].duties;
          var conditions = objAjax[0].conditions;
          $('.duties').empty();
          $('.conditions').empty();

          for (var i = 0; i < duties.length; ++i) {
            $('.duties').append('<li>' + duties[i] + '</li>');
          }

          ;

          for (var _i = 0; _i < conditions.length; ++_i) {
            $('.conditions').append('<li>' + conditions[_i] + '</li>');
          }
        }
      }

      ;
      activeTabLoadingPage(); //The event handler for dynamically added elements (tab buttons) - Tab click

      $('.vacancies-tab__btns>li').on('click', "span", function () {
        tabData = $(this).attr('data');
        tabBtns.find('li>span').removeClass('tab_active');
        $(this).addClass('tab_active');
        $('.job-offer').html('<span>&laquo;' + objAjax[tabData - 1].name + '&raquo;</span>');
        $('.salary').text(objAjax[tabData - 1].salary);
        $('.experience').text(objAjax[tabData - 1].experience);
        var duties = objAjax[tabData - 1].duties;
        var conditions = objAjax[tabData - 1].conditions;
        $('.duties').empty();
        $('.conditions').empty();

        for (var i = 0; i < duties.length; ++i) {
          $('.duties').append('<li>' + duties[i] + '</li>');
        }

        ;

        for (var _i2 = 0; _i2 < conditions.length; ++_i2) {
          $('.conditions').append('<li>' + conditions[_i2] + '</li>');
        }
      });
      /* Spoiler =======================================================================================*/
      function vacanciesSpoiler2(){
          answerAjax.map(function(item){
            function returnLi(arr){
              var itemLi;
              itemLi = arr.map(function(item){
                return '<li>'+item+'</li>';
              })
              return itemLi.join().replace(/[,]/g, "");
            }
            $('<div id="vacancies-spoiler__'+item.data+'"><p class="vacancies-spoiler__header">'+item.name+'</p><div class="vacancies-spoiler__text"><div class="salary-experience"><div><p class="salary-title">Уровень зарплаты</p><p>'+item.salary+'</p></div><div><p class="experience-title">Опыт работы</p><p>'+item.experience+'</p></div></div><p>Крупный оператор рабочего персонала приглашает на вакансию <b class="job-offer">«'+item.name+'»</b>. Отличные условия труда, социальный пакет, регулярные выплаты без задержек. Рассматриваем соискателей на постоянную и временную занятость. Возможен гибкий график в удобное время.</p><span>Обязаности:</span><ul>'+returnLi(item.duties)+'</ul><span>Условия:</span><ul>'+returnLi(item.conditions)+'</ul><a class="btn-worksheet" href="http">Заполнить анкету</a></div></div>').appendTo('.vacancies-spoilers__container');
          });
      };


      var faqSpoiler = function faqSpoiler(spoiler, spoilerHeader, spoilerContent, addClassOpen) {
        $(spoiler).on("click", spoilerHeader, function (e) {
          $("." + addClassOpen).slideUp(300);
          $(spoilerHeader).removeClass('vacancies-spoiler__header_active');

          if ($(this).parent().children(spoilerContent).hasClass(addClassOpen)) {
            $(this).parent().children(spoilerContent).slideUp(300).removeClass(addClassOpen);
          } else {
            $(spoilerContent).removeClass(addClassOpen);
            $(this).parent().children(spoilerContent).slideDown(300).addClass(addClassOpen);
            $(this).parent().children(spoilerHeader).addClass('vacancies-spoiler__header_active');
          }

          ;
        });
      };

      faqSpoiler(".vacancies-spoilers__container", ".vacancies-spoiler__header", ".vacancies-spoiler__text", "vacancies-spoiler__text_open");
    }

    ;
  });
};

tabOfVacancies();



