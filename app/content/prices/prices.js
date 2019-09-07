function tabPrices() {
  //Request Ajax (performed when the page is loaded)
  $.ajax({
    dataType: "json",
    url: 'json/prices/prices.json',
    cache: false,
    error: function error(XHR, status, _error) {
      console.log(status + ' ' + _error);
    },
    success: function success(answerAjax) {
      moveAjax(answerAjax);
      var prices = document.getElementById("tab-prices__container");
      prices.classList.remove("opasity");
    }
  });
  /* ======================================================================================*/
  //The function that is called in success

  function moveAjax(answerAjax) {
    var objAjax = answerAjax;
    var tabBtns = $('.tab-btns');
    var tabData;
    var descriptionTitle, description, descriptionPs; //Add buttons to the tab

    (function addBtn(answerAjax) {
      for (var i = 0; i < objAjax.length; i++) {
        var tabData = objAjax[i].data; //Dynamic addition of an element (tab buttons)

        tabBtns.append('<li><span data="' + tabData + '">' + objAjax[i].name + '</span></li>');
      }

      ;
    })(); //Active tab when loading a page


    (function () {
      tabBtns.find('li:first span').addClass('tab_active');
      var startPrice = objAjax[0];
      var employees = objAjax[0].employees;
      $('.tab-body').empty();
      var tr;

      for (var i = 0; i < employees.length; ++i) {
        tr = $('<tr/>');
        var employee = employees[i];
        tr.append('<td class="employee">' + employee.employeeName + '</td>');
        tr.append('<td class="price">' + employee.price + '</td>');
        tr.append('<td class="price">' + employee.commonPrice + '</td>');
        $('.tab-body').append(tr);
      }
    })(); //Event handler showing the tab


    function showTab(tabData) {
      $('.tab__title').html(objAjax[tabData - 1].name + '<br/>');
      $('.name-service>span').text(objAjax[tabData - 1].name.toUpperCase());
      $('.tab-body').empty();
      var tr;
      var employees = objAjax[tabData - 1].employees;

      for (var i = 0; i < employees.length; ++i) {
        tr = $('<tr/>');
        var employee = employees[i];
        tr.append('<td class="employee">' + employee.employeeName + '</td>');
        tr.append('<td class="price">' + employee.price + '</td>');
        tr.append('<td class="price">' + employee.commonPrice + '</td>');
        $('.tab-body').append(tr);
      }

      descriptionTitle = '<h3>' + objAjax[tabData - 1].name + '</h3>';
      description = '<p>' + objAjax[tabData - 1].description + '</p>';
      descriptionPs = '<p>' + objAjax[tabData - 1].descriptionPs + '</p>';
      $('.description-tab').html(descriptionTitle + description + descriptionPs);
    }

    ; //The event handler for dynamically added elements (tab buttons) - Tab click

    $('.tab-btns>li').on('click', "span", function () {
      tabData = $(this).attr('data');
      tabBtns.find('li>span').removeClass('tab_active');
      $(this).addClass('tab_active');
      showTab(tabData);
    });

    (function () {
      var strURL = window.location.toString();
      var testURL = strURL.indexOf('?dataTab=');
      var liArr = $('.tab-btns').children();

      if (testURL > 0) {
        var searchURL = window.location.search;
        tabData = searchURL.substr(searchURL.indexOf('=') + 1);
        var btnActive = liArr[tabData - 1].childNodes[0];
        tabBtns.find('li>span').removeClass('tab_active');
        $(btnActive).addClass('tab_active');
        showTab(tabData);
      }
    })();
  }

  ;

  var tabRes = function tabRes() {
    if (window.innerWidth <= 1200) {
      $('.tab-prices__content').addClass('col-lg-12').removeClass('col-lg-9');
    } else {
      $('.tab-prices__content').addClass('col-lg-9').removeClass('col-lg-12');
    }
  };

  tabRes();
  $(window).resize(function () {
    tabRes();
  });
};

tabPrices();



